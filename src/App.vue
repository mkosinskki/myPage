<script setup>
import Navbar from '@/components/Navbar.vue';
import HeroPage from './pages/HeroPage.vue';
import AboutMe from './pages/AboutMe.vue';
import Technologies from './pages/Technologies.vue';
import Education from './pages/Education.vue';
import Contact from './pages/Contact.vue';
import Footer from './components/Footer.vue';
import Projects from './pages/Projects.vue';
import { RouterView } from 'vue-router'

</script>

<template>
  <Navbar />

  <HeroPage />

  <AboutMe />

  <Technologies />

  <Projects />

  <Education />

  <Contact />

  <Footer />

  <RouterView />
</template>

<style scoped></style>
