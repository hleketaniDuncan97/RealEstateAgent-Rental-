<template>
  <navBar />
  <section class="rentals-container">
    <header>
      <h2>Rentals</h2>
    </header>
    <div class="filter-add-container">
      <div class="filter-container">
        <label for="statusFilter">Filter by Status:</label>
        <select v-model="statusFilter" id="statusFilter" @change="applyStatusFilter">
          <option value="all">All</option>
          <option value="occupied">Occupied</option>
          <option value="vacant">Vacant</option>
        </select>
      </div>
      <button @click="toggleAddRentalForm" class="add-rental-button">Add Rental</button>
    </div>

    <div v-if="showAddRentalForm" class="overlay">
      <form @submit.prevent="addRental" class="add-rental-form">
        <h3>Add New Rental</h3>
        <label for="rentalId">Rental Property:</label>
        <input type="text" id="rentalId" required>
        
        <label for="rentAmount">Rent Amount:</label>
        <input type="number" id="rentAmount" required>
        
        <div class="button-group">
          <button type="button" @click="cancelRentalForm" class="form-button cancel-button">Cancel</button>
          <button type="submit" class="form-button add-rental-button">Add Rental</button>
        </div>
      </form>
    </div>

    <section class="rental-list">
      <article v-for="rents in filteredRentals" :key="rents.id" class="rental-card">
        <div class="card-content">
          <p><strong>Rental ID:</strong> {{ rents.id }}</p>
          <p><strong>Property ID:</strong> {{ rents.propertyId }}</p>
          <p><strong>Status:</strong> {{ rents.status }}</p>
          <p><strong>Cost:</strong> {{ rents.cost }}</p>
        </div>
      </article>
    </section>
  </section>
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
@import '../styles/style';
@import '../styles/rentals';
</style>
