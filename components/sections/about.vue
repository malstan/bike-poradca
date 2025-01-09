<template>
    <div class="container mx-auto my-20 px-4">
        <h2 class="text-3xl xs:text-4xl lg:text-5xl font-bold mb-10 sm:mb-24 text-center w-full inline-block">
            
            <span class="relative inline-block">
                <svg class="absolute top-0 left-0 w-full h-full fill-none stroke-orange-500" id="border-svg" style="stroke-width: 6; stroke-dasharray: 520; stroke-dashoffset: 500;" viewBox="0 0 200 60" preserveAspectRatio="none">
                    <rect x="0" y="0" width="100%" height="100%" />
                </svg>
                <span class="relative block p-3">
                    Správny bicykel
                </span>
            </span>
            pre&nbsp;Vás!
        </h2>
        <div class=" flex flex-col lg:flex-row gap-3 lg:gap-8 overflow-hidden">
            <img src="~/assets/images/person.png" alt="predávajúci" class="max-w-96 w-full mx-auto" id="profilePhoto">

            <div class="pt-10 lg:pt-20 relative" id="quotation">
                <p class="text-2xl flex-1 pl-8 pt-8 relative quotation pointer-events-none">
                Ponúkam odborné telefonické poradenstvo, ktoré Vám pomôže vybrať bicykel presne podľa Vašich potrieb. Mojim cieľom je, aby ste našli ten pravý a mali z neho radosť.</p>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';

onMounted(() => {

    gsap.to('#border-svg rect', {
        strokeDashoffset: 0,
        duration: 2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '#border-svg rect',
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            markers: false
        }
    });

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