export const thrower = handler => async (request, response, next) => {
  try {
    await handler(request, response, next)
  } catch (error) {
    next(error)
  }
}