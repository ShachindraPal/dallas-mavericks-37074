export const passwordRegex =
  /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/
///(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/

export const nameRegex = /^[a-zA-Z ]*$/
export const validateEmail = email => {
  const emailRegex = /('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')/
  if (emailRegex.test(email)) {
    return true
  } else {
    return false
  }
}
