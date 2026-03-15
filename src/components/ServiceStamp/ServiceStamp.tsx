import { useEffect, useState } from 'react'

import clsx from 'clsx'

interface ServiceStampProps {
  name: string
  href: string
  delay?: number
}

export function ServiceStamp({ name, href, delay = 0 }: ServiceStampProps) {
  const [start, setStart] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setStart(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <a href={href} className="relative inline-block w-fit">
      <span
        data-text={name}
        className={clsx(
          'service-text relative font-serif text-2xl uppercase',
          start && 'animate-text-fill',
        )}
      >
        {name}
      </span>

      <img
        src="/roloIcon.png"
        alt="rolo"
        className={clsx(
          'absolute left-0 top-1/2 -translate-y-1/2 w-16 pointer-events-none',
          start && 'animate-roller-move',
        )}
      />
    </a>
  )
}
