import { ComponentProps } from 'react'
import { ButtonContainer, ButtonVariant } from './style'

interface ButtonProps extends ComponentProps<'button'> {
  variant?: ButtonVariant
  children: React.ReactNode
}

export function Button({
  children,
  variant = 'primary',
  ...rest
}: ButtonProps) {
  return (
    <ButtonContainer $variant={variant} {...rest}>
      {children}
    </ButtonContainer>
  )
}
