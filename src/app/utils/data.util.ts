export function extractDate(data: Date): string {
  let day: string = data.getDate().toString().padStart(2, '0');
  let month: string = (data.getMonth() + 1).toString().padStart(2, '0');
  let year: string = data.getFullYear().toString();
  return `${day}/${month}/${year}`
}

export function extractHours(data: Date): string {
  let hours: string = data.getHours().toString();
  hours = hours.length === 1 ? "0" + hours : hours
  let minutes: string = data.getMinutes().toString();
  minutes = minutes.length === 1 ? "0" + minutes : minutes
  return `${hours}:${minutes}`
}