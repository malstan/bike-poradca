<template>
    <div class="container mx-auto my-20 flex flex-col lg:flex-row gap-3 lg:gap-8 overflow-hidden px-4">
        <img src="~/assets/images/person.png" alt="predávajúci" class="max-w-96 w-full mx-auto" id="profilePhoto">

        <div class="pt-10 lg:pt-20 relative" id="quotation">
            <p class="text-2xl flex-1 pl-8 pt-8 relative quotation pointer-events-none">
            Ponúkam telefonické poradenstvo pre výber ideálneho bicykla. Spolupracujem s najlepšími predajňami, ktoré Vám ponúknu tie najlepšie ceny.</p>
        </div>

    </div>
</template>
<script setup lang="ts">
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
    gsap.fromTo('#profilePhoto',
        { opacity: 0, x: -50 }, 
        { 
        opacity: 1, 
        x: 0, 
        duration: 1.5, 
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#profilePhoto',
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            markers: false
        }
        }
    );
    gsap.fromTo('#quotation', 
    { opacity: 0, x: 50 }, 
    { 
      opacity: 1, 
      x: 0, 
      duration: 1.5, 
      ease: 'power2.out',
      scrollTrigger: {
        trigger: '#quotation',
        start: 'top 80%',
        end: 'top 50%',
        scrub: false,
        markers: false
      }
    }
  );
});
</script>

<style>
.quotation::before {
    font-family:Arial;
    content: "\201C";
    position: absolute;
    top: 100px;
    left:0;
    font-size: 300px;
    @apply text-green-500;
    z-index: -1;
    opacity: 0.5;
}
</style>