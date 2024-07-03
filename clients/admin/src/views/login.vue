<template>
    <div class="full">
      <div class="login-page">
        <div class="login-container">
          <header>Welcome to property rental admin portal</header>
          <h1>Effortlessly Manage Your Rental Properties</h1>
          <p>Access and oversee all your properties and leases in one convenient location, ensuring seamless and efficient property management.</p>
          <div class="login-actions">
            <hr class="line-under-p">
            <button @click="loginButton">Login with Google
                <img src="../assets/google.png" alt="">
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRouter } from 'vue-router'
  
  const router = useRouter();
  
  const loginButton = () => {
    router.push('/home');
  };
  </script>
  
  <style scoped>

  @import '../styles/login.css';
  </style>
  