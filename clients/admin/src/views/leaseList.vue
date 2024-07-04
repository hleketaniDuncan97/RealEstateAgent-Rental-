<template>
  <div>
    <header>
      <navBar />
    </header>
    <main class="leases-container">
      <h2>Leases</h2>
      
      <section class="leases-list">
        <article v-for="lease in leases" :key="lease.id" class="lease-card">
          <div class="card-content">
            <p><strong>Property ID:</strong> {{ getPropertyId(lease.rentalId) }}</p>
            <p><strong>Rental ID:</strong> {{ lease.rentalId }}</p>
            <p><strong>Start Date:</strong> {{ formatDate(lease.startDate) }}</p>
            <p><strong>End Date:</strong> {{ formatDate(lease.endDate) }}</p>
            <p><strong>Rent Amount:</strong> {{ formatRentAmount(lease.rentAmount) }}</p>
          </div>
        </article>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
  import { ref, onMounted, computed, watch } from 'vue';
  import { Lease, Rental } from '../type';
  import { fetchLeases, fetchRentals } from '../services';
  import navBar from '../components/nav-bar.vue';

  const leases = ref<Lease[]>([])
  const rentals = ref<Rental[]>([])

  const loadData = async () => {
    try {
      rentals.value = await fetchRentals()
      leases.value = await fetchLeases()
    } catch (error) {
      console.error('Error loading data:', error)
    }
  }


  const getPropertyId = (rentalId: number) => {
    const rental = rentals.value.find(rental => rental.id === rentalId);
    return rental ? rental.propertyId : '';
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' }
    return date.toLocaleDateString('en-GB', options)
  }

  const formatRentAmount = (amount: string) => {
  const numericAmount = parseFloat(amount.replace(/[^0-9.-]+/g, ""));
  return (numericAmount / 100).toFixed(0);
};


  onMounted(() => {
    loadData()
  })
</script>


<style scoped>
  @import '../styles/style.css';
  @import '../styles//leaseList.css';
</style>
