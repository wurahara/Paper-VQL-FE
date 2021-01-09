import { checkForContent } from './validator'

function pad (number) {
  if (number < 10) {
    return '0' + number
  }
  return number
}

export function transformDateFormat (date) {
  if (checkForContent(date)) {
    return date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
  } else {
    return date
  }
}
