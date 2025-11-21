<template>
    <section id="hero" class="bg-forestGreen">
        <div class="relative flex flex-col min-h-screen">
            <div
                class="container relative flex flex-col mx-auto px-5 space-y-10 mt-10 md:flex-row md:space-y-0 md:space-x-40 md:mt-28 md:px-16 justify-center">
                <div class="flex flex-col space-y-6 items-center pt-16 md:w-1/2 md:pt-20 md:items-start">
                    <h1 class="text-4xl lg:text-6xl font-extrabold text-center md:text-left text-cotton">
                        Cześć, jestem Marcin
                    </h1>

                    <p class="text-xl font-semibold text-lightMint text-center md:text-left md:max-w-md">
                        Jestem studentem informatyki. Tworzę nowoczesne i responsywne aplikacje webowe.
                    </p>

                    <div class="flex w-full md:w-auto gap-4 md:gap-12 my-8">

                        <a href="#about-me"
                            class="flex-1 md:flex-none md:w-40 bg-lightMint px-2 py-3 rounded-lg text-center font-medium transition-all duration-150 hover:bg-mediumGreen hover:text-offWhite hover:-translate-y-0.5 hover:shadow-md">
                            O mnie
                        </a>

                        <a href="#"
                            class="flex-1 md:flex-none md:w-40 bg-lightMint px-2 py-3 rounded-lg text-center font-medium transition-all duration-150 hover:bg-mediumGreen hover:text-offWhite hover:-translate-y-0.5 hover:shadow-md">
                            Projekty
                        </a>

                        <a href="#"
                            class="flex-1 md:flex-none md:w-40 bg-lightMint px-2 py-3 rounded-lg text-center font-medium transition-all duration-150 hover:bg-mediumGreen hover:text-offWhite hover:-translate-y-0.5 hover:shadow-md">
                            Tech stack
                        </a>
                    </div>
                </div>

                <div class="flex justify-center items-center md:pt-14">
                    <img src="../components/papuzka.png" alt="parrot" class="w-60 h-auto md:w-80">
                </div>
            </div>
            <svg class="absolute bottom-0 left-0 w-full h-auto" width="1920" height="230" viewBox="0 0 1920 230"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M0 69.7185L80 48.4185C160 26.7185 320 -15.2815 480 5.71853C640 26.7185 800 112.719 960 133.719C1120 154.719 1280 112.719 1440 91.0185C1600 69.7185 1760 69.7185 1840 69.7185H1920V229.719H1840C1760 229.719 1600 229.719 1440 229.719C1280 229.719 1120 229.719 960 229.719C800 229.719 640 229.719 480 229.719C320 229.719 160 229.719 80 229.719H0V69.7185Z"
                    fill="#fdfdf5" />
            </svg>
        </div>
    </section>
</template>

<script setup></script>

<style scoped></style>