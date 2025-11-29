<template>
    <section id="projects" class="bg-cotton">
        <div class="flex flex-col px-5 container mx-auto max-w-6xl items-center justify-center space-y-18 pt-20 pb-52">

            <div class="flex flex-col items-center justify-center md:items-end w-full">
                <h2 class="text-4xl md:text-5xl font-extrabold text-forestGreen">Moje projekty</h2>
                <p class="text-xl text-forestGreen/80 font-medium mt-2">Wybrane zrealizowane projekty.</p>
            </div>

            <div class="flex flex-col space-y-24">
                <div v-for="(project, index) in projects" :key="index"
                    class="flex flex-col items-center justify-center gap-8 md:gap-20 w-full"
                    :class="index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'">

                    <div class="flex flex-col justify-center md:w-1/2 space-y-6 text-center"
                        :class="index % 2 === 0 ? 'md:text-right md:items-end' : 'md:text-left md:items-start'">

                        <h3 class="text-2xl md:text-3xl font-extrabold text-forestGreen">
                            {{ project.name }}
                        </h3>

                        <p class="text-lg text-graphite font-medium md:max-w-md">
                            {{ project.description }}
                        </p>

                        <a class="text-forestGreen font-bold hover:scale-105 duration-150 hover:text-mediumGreen"
                            :href="project.link">Zobacz
                            projekt
                        </a>

                        <div class="flex flex-wrap gap-3 items-center justify-center pt-2"
                            :class="index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'">

                            <div v-for="tech in project.technologies" :key="tech"
                                class="bg-lightMint px-4 py-2 rounded-lg text-sm font-semibold text-graphite shadow-sm">
                                {{ tech }}
                            </div>
                        </div>
                    </div>

                    <div
                        class="flex items-center justify-center relative w-full md:w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-lg aspect-video">

                        <img v-if="project.photo" :src="project.photo" :alt="project.name"
                            class="w-full h-full object-cover transform hover:scale-105 transition duration-200 ease-in-out" />

                        <div v-else class="flex flex-col items-center text-gray-400 p-4">
                            <span>Brak zdjęcia</span>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

import project1Image from '../components/test.png';

const projects = [
    {
        name: 'Projekt 1',
        photo: project1Image,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe doloribus distinctio pariatur vel inventore culpa illo, totam nesciunt cum!',
        technologies: ['Vue 3', 'Tailwind', 'Node.js'],
        link: '',
    },
    {
        name: 'Projekt 2',
        photo: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe doloribus distinctio pariatur vel inventore culpa illo, totam nesciunt cum!',
        technologies: ['Vue 3', 'Tailwind', 'Node.js'],
        link: '',
    },
    {
        name: 'Projekt 3',
        photo: '',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam saepe doloribus distinctio pariatur vel inventore culpa illo, totam nesciunt cum!',
        technologies: ['Vue 3', 'Tailwind', 'Node.js'],
        link: '',
    },
]
</script>