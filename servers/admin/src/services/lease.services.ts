import * as leaseRepository from '../repositories/lease.repositories'

export const fetchLeases = modifier => {
  return leaseRepository.fetchLeases(modifier)
}