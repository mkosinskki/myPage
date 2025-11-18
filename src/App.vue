<script setup>
import Navbar from '@/components/Navbar.vue';
import HeroPage from './pages/HeroPage.vue';
import AboutMe from './pages/AboutMe.vue';
import { RouterView } from 'vue-router'
</script>

<template>
  <Navbar />

  <HeroPage />

  <AboutMe />

  <RouterView />
</template>

<style scoped></style>
