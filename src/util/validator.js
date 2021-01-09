export function checkForContent (field) {
  if (field === '' || field === null || field === undefined) {
    return false
  } else {
    return true
  }
}

export function checkForContents (fields) {
  for (let index = 0; index < fields.length; index++) {
    if (checkForContent(fields[index])) {
      return true
    }
  }
  return false
}
