export const parseId = (id) => {
  const parsedId = Number(id)

  if (isNaN(parsedId)) {
    return {
      type: 'invalid',
      result: {
        error: 'the id must be a number!'
      }
    }
  }

  return {
    type: 'valid',
    result: parsedId
  }
}
