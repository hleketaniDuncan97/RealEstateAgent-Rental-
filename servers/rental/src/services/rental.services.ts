import * as rentalRepository from '../repositories/rental.repository'

export const fetchRentals = modifier => rentalRepository.fetchRentals(modifier)