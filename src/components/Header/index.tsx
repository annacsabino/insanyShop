import Image from 'next/image'

import { Button } from '../Button'

export function Header() {
  return (
    <nav>
      <h1>InsanyShop</h1>
      <Button>
        <Image
          src="./assets/icons/cart.svg"
          alt="Icone de carrinho de compra"
          width={24}
          height={24}
        />
        Adicionar
      </Button>
      <Button variant="secondary">Finalizar a compra</Button>
    </nav>
  )
}
