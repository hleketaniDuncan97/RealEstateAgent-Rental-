import { Lease } from "../type/lease";

const API_URL = 'http://localhost:3000/api/leases';

export const fetchLeases = async (): Promise<Lease[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const leases = data.map((l: any) => ({
      id: l.id,
      rentalId: l.rentalid,
      tenantId: l.tenantid,
      startDate: l.startdate,
      endDate: l.enddate,
      rentAmount: l.rentamount
    })) as Lease[];
    return leases;
  } catch (error) {
    console.error('Error fetching leases:', error);
    throw error;
  }
};