export default function (inputDate: string) {
  const d = new Date(inputDate)

  return new Intl.DateTimeFormat('fa-IR').format(d)
}
