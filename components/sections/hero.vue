<template>
    <div class="bg-hero-image h-dvh bg-cover bg-center flex items-center relative px-4">
        <div class="absolute inset-0 bg-black opacity-50"></div>
        <div class="relative container mx-auto py-10">
            <h1 class="text-3xl xs:text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-4 md:mb-8 leading-tight hidden" id="title">Váš osobný poradca<br>pri kúpe bicykla!</h1>
            <h2 class="text-lg xs:text-xl md:text-2xl lg:text-3xl text-green-500 font-bold mb-4 lg:mb-10 min-h-14 xs:min-h-9" id="subTitle"></h2>

            <UiCallNow id="heroBtn" class="invisible"/>
        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';

onMounted(() => {
    const tl = gsap.timeline();

    tl.fromTo('#title', 
        { y: -100, opacity: 0, display: 'none' },
        { 
            y: 0, 
            opacity: 1, 
            display: 'block',
            duration: 1, 
            ease: 'power2.out',
        }
    );
    tl.to('#subTitle', {
        duration: 2.5, 
        text:"Zavolajte a získajte rady od odborníka."
    });
    tl.fromTo('#heroBtn', 
        { y: 20, opacity: 0},
        {
            y: 0,
            opacity: 1,
            visibility: 'visible',
            duration: 1,
            ease: 'power2.out',
        }
    );
})

</script>