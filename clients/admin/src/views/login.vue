<template>
  <div class="full">
    <div class="login-page">
      <div class="login-container">
        <header>Welcome to property rental admin portal</header>
        <h1>Effortlessly Manage Your Rental Properties</h1>
        <p>Access and oversee all your properties and leases in one convenient location, ensuring seamless and efficient property management.</p>
        <div v-if="unauthorizedMessage" class="unauthorized-message">{{ unauthorizedMessage }}</div>
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

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import {gapi} from "gapi-script";
import authService from '../services/authService';
import authStore from "../store/authStore";

export default defineComponent({
  name: 'Login',
  setup() {
    const router = useRouter();

    onMounted(() => {
      // Initialize the Google API client
      gapi.load('auth2', () => {
        gapi.auth2.init({
          client_id: '11695021444-gb72qvk190v3bda0gunhqpg4sn3sueaq.apps.googleusercontent.com',
        });
      });
    });

    const loginButton = () => {
      const auth2 = gapi.auth2.getAuthInstance();
      auth2.signIn().then(googleUser => {
        const profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId());
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail());

        // You can also get the token if needed
        const id_token = googleUser.getAuthResponse().id_token;
        console.log('ID Token: ' + id_token);
        authService.setToken(id_token);
        authStore.clearUnauthorizedMessage();

        // Navigate to the home page after successful login
        router.push('/home');
      }).catch(error => {
        console.error('Error signing in', error);
      });
    };

    return {
      loginButton,
      unauthorizedMessage: authStore.unauthorizedMessage,
    };
  },
});
</script>

  <style scoped>
  .login-page {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('../assets/trees.jpg');
    background-size: cover;
    background-position: center;
  }

  .login-container {
    height: 30rem;
    background: rgba(255, 255, 255, 0.048);
    padding: 1.25rem;
    border-radius: 0.5rem;
    text-align: center;
    width: 30rem;
    backdrop-filter: blur(3rem);
    border: 0.2rem solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  header {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: white;
  }

  h1 {
    font-size: 1.4rem;
    color: white;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    color: white;
  }

  .unauthorized-message {
    color: red;
    font-size: 1rem;
    margin-bottom: 1rem;
  }

  .login-actions {
    margin-top: auto;
    display: flex;
  flex-direction: column;
  align-items: center;
  }

  .line-under-p {
    width: 100%;
    border-top: 0.0625rem solid white;
    margin: 1.25rem 0;
  }

  button {
  background-color: white;
  color: black;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  font-size: 1em;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

button:hover {
  background-color: #c5a560;
}

button img {
  width: 2rem;
}
  </style>
