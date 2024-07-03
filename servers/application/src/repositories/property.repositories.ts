import { Agent } from 'https'

console.log('ENV', process.env.MTLS_CERT)

export const fetchProperty = capacity => fetch(
  '',
  {
    // agent: new Agent({
    //   key: process.env.,
    //   cert: ,
    //   rejectUnauthorized: true,
    //   requestCert: true,
    // }),
    method: 'PUT',
    body: JSON.stringify({
      size: capacity,
      toRent: true,
    }),
  }
)