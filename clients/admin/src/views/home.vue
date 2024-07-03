<template>
  <div>
    <header>
      <NavBar />
    </header>
    <main class="container">
      <section class="lease-management">
        <button @click="handleRentalManagement" class="rental-management-btn">Rental management</button>
        <button @click="handleLeaseManagement" class="lease-management-btn">Lease management</button>
      </section>
      <section class="summary-flex">
        <article class="summary-item">
          <h3>Total number of properties listed</h3>
          <p>{{ totalProperties }}</p>
        </article>
        <article class="summary-item">
          <h3>Total number of active leases</h3>
          <p>{{ totalActiveLeases }}</p>
        </article>
      </section>
    </main>
  </div>
</template>


<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import NavBar from '../components/nav-bar.vue';
import { fetchRentals, fetchLeases } from '../services';
import { Rental, Lease } from '../type';
import { useRouter } from 'vue-router'


const router = useRouter();

const rentals = ref<Rental[]>([]);
const leases = ref<Lease[]>([]);

const handleLeaseManagement = () => {
  router.push('/lease');
};

const handleRentalManagement = () => {
  router.push('/rental')
}

const loadRentals = async () => {
  try {
    rentals.value = await fetchRentals();
  } catch (error) {
    console.error('Error loading rentals:', error);
  }
};

const loadLeases = async () => {
  try {
    leases.value = await fetchLeases();
  } catch (error) {
    console.error('Error loading leases:', error);
  }
};

const totalActiveLeases = computed(() => {
   return rentals.value.filter(rental => rental.status === 'VACANT').length;
});

const totalProperties = computed(() => rentals.value.length);

onMounted(() => {
  loadRentals();
  loadLeases();
});
</script>

<style scoped>
@import '../styles/style.css';
@import '../styles/home.css';
</style>
