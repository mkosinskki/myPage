<template>
    <section id="technologies" class="relative bg-mediumGreen">

        <svg class="absolute top-0 right-0 w-full h-auto" width="1920" height="160" viewBox="0 0 1920 160" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 64L80 69.3C160 75 320 85 480 80C640 75 800 53 960 74.7C1120 96 1280 160 1440 160C1600 160 1760 96 1840 64L1920 32V0H1840C1760 0 1600 0 1440 0C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V64Z"
                fill="#FDFDF5" />
        </svg>

        <div class="relative container mx-auto flex flex-col py-30 space-y-20 md:space-y-30">
            <div class="flex flex-col space-y-6 text-center md:text-left px-5 md:px-0">
                <h2 class="text-4xl md:text-5xl font-extrabold text-center md:text-left text-cotton">Tech stack
                </h2>
                <p class="text-2xl md:text-3xl font-bold text-graphite">Języki programowania i technologie z których
                    korzystam.</p>
            </div>

            <div
                class="flex flex-col mx-auto space-y-8 md:flex-row md:space-y-0 md:space-x-16 w-full items-center md:justify-start">

                <div v-for="(tech, index) in technologies" :key="index"
                    class="flex flex-col w-72 h-[400px] rounded-xl shadow-lg bg-lightMint/95 text-graphite text-2xl font-bold text-center">

                    <div class="h-3/4 w-full flex items-center justify-center">
                        <div v-html="tech.icon"></div>
                    </div>

                    <div
                        class="h-1/4 w-full flex items-center justify-center px-4 bg-graphite text-cotton rounded-b-xl">
                        <h2>{{ tech.name }}</h2>
                    </div>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
const technologies = [
    {
        name: 'Vue.js',
        icon: `
      <svg class="w-30 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
        <path d="M0 8.934l49.854.158 14.167 24.47 14.432-24.47L128 8.935l-63.834 110.14zm126.98.637l-24.36.02-38.476 66.053L25.691 9.592.942 9.572l63.211 107.89zm-25.149-.008l-22.745.168-15.053 24.647L49.216 9.73l-22.794-.168 37.731 64.476zm-75.834-.17l23.002.009m-23.002-.01l23.002.01" fill="none" />
        <path d="M25.997 9.393l23.002.009L64.035 34.36 79.018 9.404 102 9.398 64.15 75.053z" fill="#35495e" />
        <path d="M.91 9.569l25.067-.172 38.15 65.659L101.98 9.401l25.11.026-62.966 108.06z" fill="#41b883" />
      </svg>
    `
    },
    {
        name: 'Tailwindcss',
        icon: `
      <svg class="w-30 h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0" fill="#38bdf8"/></svg>

    `
    }
]
</script>

<style scoped></style>