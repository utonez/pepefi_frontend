interface Props {
  icon?: string
  title: string
  description?: string
  ctaText?: string
  ctaHref?: string
  onClick?: () => void
}

export default function EmptyState({ icon = '🎯', title, description, ctaText, ctaHref, onClick }: Props) {
  return (
    <div className="rounded-card border border-surface-border bg-surface p-12 text-center space-y-4">
      <div className="text-5xl">{icon}</div>
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      {description && (
        <p className="text-sm text-gray-400 max-w-md mx-auto">{description}</p>
      )}
      {ctaText && (ctaHref || onClick) && (
        ctaHref ? (
          <a href={ctaHref} className="inline-block btn-primary">
            {ctaText} →
          </a>
        ) : (
          <button onClick={onClick} className="btn-primary">
            {ctaText} →
          </button>
        )
      )}
    </div>
  )
}
