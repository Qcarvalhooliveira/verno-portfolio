import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { Link } from 'react-router-dom'

interface ServiceStampProps {
  name: string
  href: string
  start: boolean
  delay?: number
}

export function ServiceStamp({ name, href, start, delay = 0 }: ServiceStampProps) {
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>

    if (start) {
      timer = setTimeout(() => setAnimate(true), delay)
    } else {
      setAnimate(false)
    }

    return () => clearTimeout(timer)
  }, [start, delay])

  return (
    <Link to={href} className="relative inline-block w-fit">
      <span
        data-text={name}
        className={clsx(
          'service-text relative font-serif text-2xl uppercase',
          animate && 'animate-text-fill',
        )}
      >
        {name}
      </span>

      <img
        src={`${import.meta.env.BASE_URL}/roloIcon.png`}
        alt="rolo"
        className={clsx(
          'absolute left-0 top-1/2 -translate-y-1/2 w-16 pointer-events-none',
          animate && 'animate-roller-move',
        )}
      />
    </Link>
  )
}
