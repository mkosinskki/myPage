<template>
    <nav
        class="w-full px-5 xl:px-40 2xl:px-80 py-5 flex items-center justify-between sticky top-0 bg-offWhite shadow-md">
        <div>
            <RouterLink to="/" class="text-2xl font-bold text-mediumGreen"> Marcin Kosiński </RouterLink>
        </div>

        <button @click="toggleMenu" ref="burgerButtonRef" class="md:hidden text-graphite focus:outline-none z-50">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        <div class="hidden md:flex items-center gap-5 lg:gap-8 2xl:gap-12">
            <RouterLink v-for="item in menuItems" :key="item.name" :to="item.path"
                class="group relative text-graphite hover:text-mediumGreen hover:bg-lightMint hover:rounded-md font-medium px-1 py-1 flex justify-center items-center">
                <span class="relative z-10 bg-offWhite px-2.5 rounded-sm">{{ item.name }}</span>
                <LeafPair side="right" />
                <LeafPair side="left" />
            </RouterLink>
        </div>

        <Transition name="fade">
            <div v-if="isMenuOpen" ref="mobileMenuRef"
                class="absolute top-full left-0 w-full bg-lightMint shadow-md flex flex-col items-center gap-4 py-5 md:hidden">
                <RouterLink v-for="item in menuItems" :key="item.name" :to="item.path" @click="toggleMenu"
                    class="group relative text-graphite font-medium px-4 py-2 flex justify-center items-center text-xl">
                    <span class="relative z-10 px-2.5">{{ item.name }}</span>
                    <LeafPair side="right" />
                    <LeafPair side="left" />
                </RouterLink>
            </div>
        </Transition>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core'
import LeafPair from './LeafPair.vue';

const isMenuOpen = ref(false);
const mobileMenuRef = ref(null);
const burgerButtonRef = ref(null);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

onClickOutside(
    mobileMenuRef,
    () => { isMenuOpen.value = false; },
    { ignore: [burgerButtonRef] }
);

const menuItems = [
    { name: 'O mnie', path: '/o-mnie' },
    { name: 'Projekty', path: '/projekty' },
    { name: 'Tech Stack', path: '/tech-stack' },
    { name: 'Edukacja', path: '/edukacja' },
    { name: 'Kontakt', path: '/kontakt' },
];

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
