import { ButtonContainer, ButtonVariant } from './style'

interface ButtonProps {
  variant?: ButtonVariant
  children: React.ReactNode
}

export function Button({ children, variant = 'primary' }: ButtonProps) {
  return <ButtonContainer $variant={variant}>{children}</ButtonContainer>
}
