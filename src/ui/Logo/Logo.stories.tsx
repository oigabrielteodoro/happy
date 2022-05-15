import type { ComponentMeta } from '@storybook/react'

import { Logo } from '.'

export default {
  title: 'Logo',
  component: Logo,
  decorators: [(Story) => <div>{Story()}</div>],
} as ComponentMeta<typeof Logo>

export const Default = () => <Logo />

export const OnlyIcon = () => <Logo.OnlyIcon />
