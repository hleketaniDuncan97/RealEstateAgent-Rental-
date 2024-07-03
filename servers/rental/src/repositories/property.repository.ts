export const fetchProperty = capacity => fetch(
  '',
  {
    method: 'PUT',
    body: JSON.stringify({
      size: capacity,
      toRent: true,
    }),
  }
)