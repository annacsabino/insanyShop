import Image from 'next/image'

import { HeaderLogo, InputSearch } from './style'

export function Header() {
  return (
    <nav>
      <HeaderLogo>InsanyShop</HeaderLogo>
      <div>
        <InputSearch type="search" />
      </div>
    </nav>
  )
}
