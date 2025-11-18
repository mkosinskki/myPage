<template>
    <div
        class="relative flex flex-col bg-forestGreen text-offWhite justify-center md:justify-start items-center min-h-[calc(100vh-72px)] px-5 space-y-10 md:px-15 md:flex-row md:space-y-0 md:space-x-6 md:pb-46">

        <div class=" w-full items-center justify-center space-y-8 py-5">
            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-center md:text-left 3xl:text-center!">
                Cześć, jestem Marcin
            </h1>

            <p class="text-lg text-lightMint text-center md:text-left 3xl:text-center!">
                Jestem studentem informatyki. Tworzę nowoczesne i responsywne aplikacje webowe.
            </p>

            <div
                class=" grid grid-cols-3 gap-3 md:gap-15 items-center py-3 md:px-0 text-graphite font-medium md:w-fit 3xl:mx-auto">

                <div
                    class="md:min-w-40 bg-lightMint px-3 py-2 rounded-lg text-center hover:bg-mediumGreen hover:text-offWhite hover:translate-y-0.5 hover:shadow-md duration-150">
                    <a href="#">O mnie</a>
                </div>
                <div
                    class="md:min-w-40 bg-lightMint px-3 py-2 rounded-lg text-center hover:bg-mediumGreen hover:text-offWhite hover:translate-y-0.5 hover:shadow-md duration-150">
                    <a href="#">Kontakt</a>
                </div>
                <div
                    class="md:min-w-40 bg-lightMint px-3 py-2 rounded-lg text-center hover:bg-mediumGreen hover:text-offWhite hover:translate-y-0.5 hover:shadow-md duration-150">
                    <a href="#">Tech stack</a>
                </div>
            </div>

        </div>

        <div class=" w-full flex justify-center md:justify-end 3xl:justify-center!">
            <img src="../components/papuzka.png" alt="logo" class="w-56 h-auto md:w-80 hover:scale-110 duration-200">
        </div>

        <svg class="absolute bottom-0 left-0 w-full h-auto" width="1920" height="230" viewBox="0 0 1920 230" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M0 69.7185L80 48.4185C160 26.7185 320 -15.2815 480 5.71853C640 26.7185 800 112.719 960 133.719C1120 154.719 1280 112.719 1440 91.0185C1600 69.7185 1760 69.7185 1840 69.7185H1920V229.719H1840C1760 229.719 1600 229.719 1440 229.719C1280 229.719 1120 229.719 960 229.719C800 229.719 640 229.719 480 229.719C320 229.719 160 229.719 80 229.719H0V69.7185Z"
                fill="#fdfdf5" />
        </svg>
    </div>
</template>

<script setup></script>

<style scoped></style>