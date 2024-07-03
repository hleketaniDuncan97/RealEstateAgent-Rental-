import { Lease } from "../type/lease";
import axios from 'axios';

const API_URL = 'http://localhost:3000/api/leases';

export const fetchLeases = async (): Promise<Lease[]> => {
  try {
    const response = await axios.get(API_URL);
    const leases = response.data.map((l: any) => ({
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