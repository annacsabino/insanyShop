export function formatPrice(price: number): string {
  if (price === undefined || price === null) {
    return 'Valor não informado'
  }
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  })
}
