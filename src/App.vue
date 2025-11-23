<script setup>
import Navbar from '@/components/Navbar.vue';
import HeroPage from './pages/HeroPage.vue';
import AboutMe from './pages/AboutMe.vue';
import Technologies from './pages/Technologies.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <HeroPage />

  <AboutMe />

  <Technologies />

  <RouterView />
</template>

<style scoped></style>
