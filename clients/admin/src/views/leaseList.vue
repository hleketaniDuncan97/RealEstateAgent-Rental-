<template>
  <navBar></navBar>
  <div class="leases-container">
    <h2>Leases</h2>
    <button @click="toggleAddLeaseForm" class="add-lease-button">Add Lease +</button>

    <div v-if="showAddLeaseForm" class="overlay">
      <form @submit.prevent="addLease" class="add-lease-form">
        <h3>Add New Lease</h3>

        <label for="propertyId">Vacant Property:</label>
        <select v-model="newLease.rentalId" id="propertyId" required>
          <option v-for="property in vacantProperties" :key="property.id" :value="property.id">
            {{ property.propertyId }}
          </option>
        </select>
        <label for="rentalId">Rental property??:</label>
        <input type="text" id="rentalId" required>
        
        <label for="tenantId">Tenant person??:</label>
        <input type="text" id="tenantId" required>
        
        <label for="startDate">Start Date:</label>
        <input type="date" id="startDate" required>
        
        <label for="endDate">End Date:</label>
        <input type="date" id="endDate" required>

        <label for="cost">Cost:</label>
        <input type="number" :value="selectedCost" id="cost" required readonly>
        
        <div class="button-group">
          <button type="button" @click="cancelAddLease" class="cancel-button">Cancel</button>
          <button type="submit" class="add-lease-button">Add Lease</button>
        </div>
      </form>
    </div>
    
    <div class="leases-list">
      <div v-for="lease in leases" :key="lease.id" class="lease-card">
        <div class="card-content">
          <p><strong>Rental ID:</strong> {{ lease.rentalId }}</p>
          <p><strong>Tenant ID:</strong> {{ lease.tenantId }}</p>
          <p><strong>Start Date:</strong> {{ formatDate(lease.startDate) }}</p>
          <p><strong>End Date:</strong> {{ formatDate(lease.endDate) }}</p>
          <p><strong>Rent Amount:</strong> {{ lease.rentAmount }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from 'vue';
import { Lease , Rental} from '../type';
import { fetchLeases , fetchRentals } from '../services';
import navBar from '../components/nav-bar.vue';

const leases = ref<Lease[]>([]);
const showAddLeaseForm = ref(false);
const rentals = ref<Rental[]>([]);

const loadLeases = async () => {
  try {
    leases.value = await fetchLeases();
  } catch (error) {
    console.error('Error loading leases:', error);
  }
};

const loadRentals = async () => {
    try {
      rentals.value = await fetchRentals();
    } catch (error) {
      console.error('Error loading rentals:', error);
    }
  };

const toggleAddLeaseForm = () => {
  showAddLeaseForm.value = !showAddLeaseForm.value;
};

const addLease = async () => {
  try {
  console.log('Adding lease...');
  } catch (error) {
    console.error('Error adding lease:', error);
  }
};

const cancelAddLease = () => {
  showAddLeaseForm.value = false;
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-GB', options);
};

const vacantProperties = computed(() => {
    return rentals.value.filter(rental => rental.status === 'VACANT') })

    const newLease = ref<Partial<Lease>>({ rentalId: 0, tenantId: 0, startDate: '', endDate: '', rentAmount: '0' });
    const selectedCost = ref<number | null>(null);


watch(
  () => newLease.value.rentalId,
  (newVal) => {
    const selectedProperty = rentals.value.find(rental => rental.id === newVal);
    if (selectedProperty) {
       selectedCost.value = parseFloat(selectedProperty.cost.toString().replace(/[^0-9.-]+/g, "")) / 100;
    } else {
      selectedCost.value = null;
    }
  }
);

onMounted(() => {
  loadLeases();
  loadRentals();
});

</script>

<style scoped>
@import '../styles/style.css';

.leases-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;
  height: 100vh;
}

.add-lease-button {
  margin-bottom: 10px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  z-index: 1;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
}

.add-lease-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
}

.add-lease-form h3 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
}

.add-lease-form label {
  display: block;
  margin-bottom: 8px;
}

.add-lease-form input {
  width: calc(100% - 16px);
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.cancel-button {
  padding: 8px 16px;
  background-color: #700700;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.add-lease-form button.add-lease-button {
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.leases-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.lease-card {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

body.dark-mode .lease-card{
  background-color: grey;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
body.dark-mode .add-lease-form {
  background-color: #514f4f;
  padding: 20px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
}
</style>
