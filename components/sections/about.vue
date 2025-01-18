<template>
    <div class="bg-gray-100">
        <div class="container mx-auto py-24 px-4">
       
            <UiAnimatedTitle>
                <template #inBorder>
                    Správny bicykel
                </template>
                <template #after>
                    pre&nbsp;Vás!
                </template>
            </UiAnimatedTitle>
        
            <div class=" flex flex-col lg:flex-row justify-center gap-3 lg:gap-8 overflow-hidden">
      

                <div class=" relative" id="quotation">
                    <p class="text-2xl pl-8 pt-8 relative quotation pointer-events-none max-w-4xl">
                        Ponúkam odborné telefonické poradenstvo, ktoré Vám pomôže vybrať ten správny bicykel – <strong> či už klasický, alebo moderný elektrobicykel </strong>– presne podľa Vašich potrieb. Mojim cieľom je, aby ste našli bicykel, ktorý Vám bude dokonale vyhovovať a prinesie Vám radosť z každej jazdy.
                    </p>
                </div>

            </div> 
        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';

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