<template>
  <navBar />
  <div class="rentals-container">
    <h2>Rentals</h2>
    <div class="filter-add-container">
      <div class="filter-container">
        <label for="statusFilter">Filter by Status:</label>
        <select v-model="statusFilter" id="statusFilter" @change="applyStatusFilter">
          <option value="all">All</option>
          <option value="occupied">Occupied</option>
          <option value="vacant">Vacant</option>
        </select>
      </div>
      <button @click="toggleAddRentalForm" class="add-rental-button">Add Rental +</button>
    </div>

    <div v-if="showAddRentalForm" class="overlay">
      <form @submit.prevent="addRental" class="add-rental-form">
        <h3>Add New rental</h3>
        <label for="rentalId">Rental property:</label>
        <input type="text" id="rentalId" required>
        
        <label for="rentAmount">Rent Amount:</label>
        <input type="number" id="rentAmount" required>
        
        <div class="button-group">
          <button type="button" @click="cancelRentalForm" class="cancel-button">Cancel</button>
          <button type="submit" class="add-rental-button">Add rental</button>
        </div>
      </form>
    </div>

    <div class="rental-list">
      <div v-for="rents in filteredRentals" :key="rents.id" class="rental-card">
        <div class="card-content">
          <p><strong>Rental ID:</strong> {{ rents.id }}</p>
          <p><strong>Property ID:</strong> {{ rents.propertyId }}</p>
          <p><strong>Status:</strong> {{ rents.status }}</p>
          <p><strong>Cost:</strong> {{ rents.cost }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import navBar from '../components/nav-bar.vue';
import { Rental } from '../type';
import { fetchRentals } from '../services';

const rentals = ref<Rental[]>([]);
const showAddRentalForm = ref(false);
const statusFilter = ref<string>('all');

const loadRentals = async () => {
  try {
    rentals.value = await fetchRentals();
  } catch (error) {
    console.error('Error loading rentals:', error);
  }
};

const toggleAddRentalForm = () => {
  showAddRentalForm.value = !showAddRentalForm.value;
};

const addRental = async () => {
  try {
    // Implement add rental logic
  } catch (error) {
    console.error('Error adding rental:', error);
  }
};

const cancelRentalForm = () => {
  showAddRentalForm.value = false;
};

const applyStatusFilter = () => {
  if (statusFilter.value === 'all') {
    return rentals.value;
  } else {
    return rentals.value.filter(rental => rental.status.toLowerCase() === statusFilter.value);
  }
};

const filteredRentals = computed(() => {
  return applyStatusFilter();
});

onMounted(() => {
  loadRentals();
});
</script>

<style scoped>
.rentals-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  position: relative;
  height: 100vh;
}

.add-rental-button {
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

.add-rental-form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
}

.add-rental-form h3 {
  margin-top: 0;
  margin-bottom: 20px;
  text-align: center;
}

.add-rental-form label {
  display: block;
  margin-bottom: 8px;
}

.add-rental-form input {
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

.rental-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

.rental-card {
  background-color: #f0f0f0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-content {
}

.filter-add-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-bottom: 10px;
}

.filter-container {
  display: flex;
  align-items: center;
}

.filter-container label {
  margin-right: 10px;
  font-weight: bold;
}

.filter-container select {
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  cursor: pointer;
}

body.dark-mode .rental-card {
  background-color: grey;
  color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

body.dark-mode .add-rental-form {
  background-color: #514f4f;
  padding: 20px;
  color: white;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  width: 80%;
  max-width: 600px;
}
</style>
