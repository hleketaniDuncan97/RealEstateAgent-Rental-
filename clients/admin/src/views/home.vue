<template>
  <div>
    <NavBar />
    <div class="container">
      <div class="lease-management">
        <button @click="handleLeaseManagement" class="lease-management-btn">Lease management</button>
      </div>
      <div class="summary-flex">
        <div class="summary-item">
          <h3>Total number of properties listed</h3>
          <p>{{ totalProperties }}</p>
        </div>
        <div class="summary-item">
          <h3>Total number of active leases</h3>
          <p>{{ totalActiveLeases }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import NavBar from '../components/nav-bar.vue'

const totalProperties = ref(4);
const totalActiveLeases = ref(6);

const handleLeaseManagement = () => {
  console.log('Lease management button clicked');
};
</script>

<style scoped>
@import '../styles/style.css';
@import '../styles/home.css';
</style>