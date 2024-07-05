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
    </div>

    <section class="rental-list">
      <article v-for="rents in filteredRentals" :key="rents.id" class="rental-card">
        <div class="card-content">
          <p><strong>Property ID:</strong> {{ rents.propertyId }}</p>
          <p><strong>Rental ID:</strong> {{ rents.id }}</p>
          <p><strong>Status:</strong> {{ rents.status }}</p>
          <p><strong>Cost:</strong> {{  formatRentAmount(rents.cost) }}</p>
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

  const rentals = ref<Rental[]>([])
  const statusFilter = ref<string>('all')

  const loadRentals = async () => {
    try {
      rentals.value = await fetchRentals()
    } catch (error) {
      console.error('Error loading rentals:', error)
    }
  }

  const applyStatusFilter = () => {
    if (statusFilter.value === 'all') {
      return rentals.value
    } else {
      return rentals.value.filter(rental => rental.status.toLowerCase() === statusFilter.value)
    }
  }

  const filteredRentals = computed(() => {
    return applyStatusFilter()
  })

  const formatRentAmount = (amount: string) => {
  const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
  return (numericAmount / 100).toFixed(0);
  }

  onMounted(() => {
    loadRentals()
  })
</script>

<style scoped>
  @import '../styles/style';
  @import '../styles/rentals';
</style>
