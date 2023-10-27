export const validate = fields => {
  const { firstName, lastName, email } = fields

  let errors = {}

  if (!firstName.trim()) {
    errors.firstName = "Ce champs est obligatoire"
  }
  if (!lastName.trim()) {
    errors.lastName = "Ce champs est obligatoire"
  }
  if (!email.trim()) {
    errors.email = "Ce champs est obligatoire"
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    errors.email = "Entrez une adresse courriel valide"
  }
  return errors
}
