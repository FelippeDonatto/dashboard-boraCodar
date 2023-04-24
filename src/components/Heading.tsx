import { ReactNode } from 'react'

interface HeadingProps {
  children: ReactNode
}

export function Heading({ children }: HeadingProps) {
  return <h2 className="font-semibold text-2xl">{children}</h2>
}
