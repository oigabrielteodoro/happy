import type { ReactNode } from 'react'

import { ThemeGlobalStyle } from './Theme'

export * from './Theme'

type Props = {
  children: ReactNode
}

export function Config({ children }: Props) {
  return (
    <>
      {children}
      <ThemeGlobalStyle />
    </>
  )
}
