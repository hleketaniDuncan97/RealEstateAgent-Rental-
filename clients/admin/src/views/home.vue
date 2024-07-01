<template>
  <div>
    <NavBar />
    <main>
      <h1>{{ title }}</h1>
    </main>
  </div>
</template>


<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavBar from '../components/nav-bar.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    NavBar,
  },
  setup() {
    const title = ref('test');

    return {
      title,
    };
  },
});
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  transition: background-color 0.3s, color 0.3s;
}

body.dark-mode {
  background-color: #1a1a1a;
  color: #f0f0f0;
}

.app-container {
  min-height: 100vh;
}

nav {
  background-color: #f8f8f8;
  color: #333;
}

body.dark-mode nav {
  background-color: #333;
  color: #f8f8f8;
}

main {
  padding: 2rem;
}
</style>