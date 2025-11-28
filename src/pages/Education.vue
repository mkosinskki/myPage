<template>
    <section id="education" class="relative pt-10 pb-28 md:pt-8 bg-cotton overflow-hidden text-graphite">
        <div class="relative container max-w-6xl mx-auto px-5">

            <div class="flex flex-col space-y-4 mb-24 text-center md:text-left">
                <h2 class="text-4xl md:text-5xl font-extrabold text-forestGreen">Edukacja</h2>
                <p class="text-xl text-forestGreen/80 font-medium">Moja ścieżka naukowa i zdobyte certyfikaty.</p>
            </div>

            <div class="relative space-y-24 md:space-y-12">

                <div
                    class="absolute w-0.5 left-1/2 -translate-x-1/2 top-0 bottom-0 z-0 bg-linear-to-b from-transparent via-forestGreen/30 to-transparent">
                </div>

                <div v-for="(edu, index) in educationList" :key="index"
                    class="relative flex flex-col md:flex-row-reverse md:even:flex-row items-center md:justify-between group z-10">

                    <div
                        class="mb-6 md:mb-0 w-full md:w-5/12 flex flex-col items-center 
                                md:items-start md:text-left md:pl-6
                                md:group-even:items-end md:group-even:text-right md:group-even:pr-6 md:group-even:pl-0">
                        <div
                            class="bg-cotton px-4 py-1 z-20 relative inline-flex flex-col gap-1 text-center md:px-0 md:text-inherit">
                            <span class="text-3xl font-black text-forestGreen leading-none">{{ edu.year }}</span>
                            <span class="text-sm text-graphite/70 font-bold uppercase tracking-widest">{{ edu.type
                            }}</span>
                        </div>
                    </div>

                    <div
                        class="hidden md:block absolute left-1/2 w-5 h-5 rounded-full border-3 border-mediumGreen bg-offWhite z-20 -translate-x-1/2 group-hover:scale-125 group-hover:bg-lightMint transition-all duration-300 shadow-md">
                    </div>

                    <div class="w-full md:w-5/12 md:pr-4 md:group-even:pl-4 md:group-even:pr-0">

                        <div class="p-8 rounded-2xl bg-white shadow-lg group-hover:-translate-y-2 group-hover:shadow-2xl transition-all duration-300 relative overflow-hidden
                                    md:text-right md:group-even:text-left">

                            <div class="absolute top-0 h-full w-1.5 bg-mediumGreen group-hover:w-3 transition-all duration-300 
                                        right-0 md:group-even:right-auto md:group-even:left-0">
                            </div>

                            <h3
                                class="text-xl font-bold text-forestGreen/90 mb-2 group-hover:text-forestGreen transition-colors">
                                {{ edu.title }}
                            </h3>

                            <div class="flex items-center gap-2 mb-4 text-forestGreen font-semibold text-sm
                                        md:justify-end md:group-even:justify-start">
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4">
                                    </path>
                                </svg>
                                {{ edu.school }}
                            </div>

                            <p class="text-graphite/90 leading-relaxed text-sm">{{ edu.description }}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const educationList = [
    {
        year: '2022 - Obecnie',
        type: 'Uczelnia Wyższa',
        title: 'Informatyka',
        school: 'Politechnika Białostocka',
        description: 'Aktualnie jestem w trakcie studiów inżynierskich na Politechnice Białostockiej.'
    },
    {
        year: '2025',
        type: 'Kurs',
        title: 'Vue.js',
        school: 'Udemy',
        description: 'Ukończenie kursu z Vue.js, autor - Maximilian Schwarzmüller.'
    },
    {
        year: '2025',
        type: 'Kurs',
        title: 'Tailwind',
        school: 'Udemy',
        description: 'Ukończenie kursu z Tailwindcss, autor - Brad Traversy.'
    },
]
</script>

<style scoped></style>