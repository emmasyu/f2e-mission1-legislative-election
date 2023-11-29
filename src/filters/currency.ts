export const thousandSeparator = (value: string) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
