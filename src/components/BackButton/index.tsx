import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { BackButtonContainer } from './style'

export function BackButton() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }
  return (
    <BackButtonContainer onClick={handleGoBack}>
      <Image
        src="/assets/icons/arrow-back.svg"
        alt="Icone de uma setinha virada para esquerda e um circulo em volta"
        width={24}
        height={24}
      />
      <p>Voltar</p>
    </BackButtonContainer>
  )
}
