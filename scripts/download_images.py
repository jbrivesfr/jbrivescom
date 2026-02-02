import os
import re
import urllib.request
import time

CONSTANTS_FILE = 'constants.ts'
IMAGES_DIR = 'public/images'

def download_image(url, filename):
    filepath = os.path.join(IMAGES_DIR, filename)
    if os.path.exists(filepath):
        print(f"Skipping {filename}, already exists.")
        return

    print(f"Downloading {url} to {filename}...")
    try:
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response, open(filepath, 'wb') as out_file:
            out_file.write(response.read())
        time.sleep(0.5) # Be nice to the API
    except Exception as e:
        print(f"Failed to download {url}: {e}")

def process_file():
    with open(CONSTANTS_FILE, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []

    context = 'NONE'
    current_id = None
    current_slug = None

    # Regex patterns
    url_pattern = re.compile(r'"(https://images\.unsplash\.com/[^"]+)"')

    ingredient_start = re.compile(r'const INGREDIENT_IMAGES =')
    articles_start = re.compile(r'export const ARTICLES')
    comments_start = re.compile(r'export const MOCK_COMMENTS')
    recipes_start = re.compile(r'export const RECIPES')

    id_pattern = re.compile(r'id:\s*"([^"]+)"')
    slug_pattern = re.compile(r'slug:\s*"([^"]+)"')
    ingredient_key_pattern = re.compile(r'(\w+):\s*"https://images\.unsplash\.com')

    for line in lines:
        # Update context
        if ingredient_start.search(line):
            context = 'INGREDIENTS'
        elif articles_start.search(line):
            context = 'ARTICLES'
        elif comments_start.search(line):
            context = 'COMMENTS'
        elif recipes_start.search(line):
            context = 'RECIPES'

        # Update current object ID/Slug
        id_match = id_pattern.search(line)
        if id_match:
            current_id = id_match.group(1)
            # Reset slug when new ID is found, just in case
            current_slug = None

        slug_match = slug_pattern.search(line)
        if slug_match:
            current_slug = slug_match.group(1)

        # Check for Unsplash URL
        url_match = url_pattern.search(line)
        if url_match:
            url = url_match.group(1)
            filename = None

            if context == 'INGREDIENTS':
                key_match = ingredient_key_pattern.search(line)
                if key_match:
                    key = key_match.group(1)
                    filename = f"ingredient_{key}.jpg"

            elif context == 'ARTICLES':
                if current_slug:
                    filename = f"article_{current_slug}.jpg"
                elif current_id:
                    filename = f"article_{current_id}.jpg"

            elif context == 'RECIPES':
                # Recipes use recipe_ prefix
                if current_slug:
                    # Remove recipe- prefix from slug if present to avoid duplication if preferred,
                    # or just use it as is. The slug usually starts with "recette-".
                    # Let's just use the slug, it's unique.
                    filename = f"{current_slug}.jpg"
                elif current_id:
                    filename = f"recipe_{current_id}.jpg"

            elif context == 'COMMENTS':
                if current_id:
                    filename = f"comment_{current_id}.jpg"

            if filename:
                download_image(url, filename)
                # Replace URL in line
                new_line = line.replace(url, f"/images/{filename}")
                new_lines.append(new_line)
            else:
                print(f"Could not determine filename for URL in context {context}: {url}")
                new_lines.append(line)
        else:
            new_lines.append(line)

    with open(CONSTANTS_FILE, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)

if __name__ == '__main__':
    process_file()
