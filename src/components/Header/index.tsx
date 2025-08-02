import { Container } from '../../styles/Patterns'
import { Button } from '../Button'

export function Header() {
  return (
    <nav>
      <h1>InsanyShop</h1>
      <Button>Home</Button>
      <Button variant="secondary">Home</Button>
    </nav>
  )
}
