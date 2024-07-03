import axios from 'axios';
import { Rental } from "../type/rental";

const API_URL = 'http://localhost:3000/api/rentals';

export const fetchRentals = async (): Promise<Rental[]> => {
  try {
    const response = await axios.get(API_URL);
    console.log("res ", response)
    const rentals = response.data.map((r: any) => ({
      id: r.id,
      propertyId: r.propertyid,
      cost: r.cost,
      status: r.status
    })) as Rental[];
    console.log(rentals)
    return rentals;
  } catch (error) {
    console.error('Error fetching rentals:', error);
    throw error;
  }
};