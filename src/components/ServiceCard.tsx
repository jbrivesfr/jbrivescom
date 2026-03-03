interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 group">
      <div className="text-4xl mb-4" aria-hidden="true">
        {icon}
      </div>
      <h3 className="font-serif text-lg font-bold text-navy mb-2 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="text-gray-mid text-sm leading-relaxed">
        {description}
      </p>
    </div>
  )
}
