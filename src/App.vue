<template>
  <AppHeader />
  <HeroSection />
  <router-view/>
</template>

<script>
import AppHeader from '@/components/inc/Header.vue'
import HeroSection from '@/components/inc/Hero.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    HeroSection,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
