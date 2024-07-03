import { Rental } from "../type/rental";

const API_URL = 'http://localhost:3000/api/rentals';


export const fetchRentals = async (): Promise<Rental[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const rentals = data.map((r: any) => ({
      id: r.id,
      propertyId: r.propertyid,
      cost: r.cost,
      status: r.status
    })) as Rental[];
    return rentals;
  } catch (error) {
    console.error('Error fetching rentals:', error);
    throw error;
  }
};
