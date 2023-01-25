export const sliceEmail = (email) => {
  const sliceIndex = email.indexOf('@')

  return '@' + email.slice(0, sliceIndex)
}
