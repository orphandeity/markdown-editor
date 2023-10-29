export function formatDate(date: string): string {
  const parts = date.split('-')

  const inputDate = new Date(
    Number(parts[2]),
    Number(parts[0]) - 1,
    Number(parts[1])
  )

  const formattedDate = new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(inputDate)

  return formattedDate
}
