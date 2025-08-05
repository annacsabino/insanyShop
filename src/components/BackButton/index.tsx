import Link from 'next/link'
import Image from 'next/image'
import { BackButtonContainer } from './style'

export function BackButton() {
  return (
    <BackButtonContainer>
      <Image
        src="/assets/icons/arrow-back.svg"
        alt="Icone de uma setinha virada para esquerda e um circulo em volta"
        width={24}
        height={24}
      />
      <Link href="/">Voltar</Link>
    </BackButtonContainer>
  )
}
