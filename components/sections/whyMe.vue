<template>
  <div class="container mx-auto px-4 py-16 my-20">

    <h2 class="text-3xl xs:text-4xl lg:text-5xl font-bold mb-10 sm:mb-28 text-center w-full inline-block">
      Čo
        <span class="relative inline-block">
          <svg class="absolute top-0 left-0 w-full h-full fill-none stroke-orange-500" id="border-svg-benefits" style="stroke-width: 6; stroke-dasharray: 520; stroke-dashoffset: 500;" viewBox="0 0 200 60" preserveAspectRatio="none">
              <rect x="0" y="0" width="100%" height="100%" />
          </svg>
          <span class="relative block p-3">
              dostanete
          </span>
        </span>
      ?
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
        <div v-for="benefit in benefits" :key="benefit.title" class="flex flex-col items-center gap-2">
            <img ref="iconRefs" :src="benefit.icon" alt="check" class="" />
            <h3 ref="titleRefs" class="text-2xl font-semibold mt-1 text-center">{{ benefit.title }}</h3>
            <p ref="descRefs" class="text-center text-lg ">{{ benefit.description }}</p>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import saveTime from '~/assets/icons/save-time.png'
import independant from '~/assets/icons/independant.png'
import personalCare from '~/assets/icons/personal-care.png'
import free from '~/assets/icons/no-money.png'

import gsap from '~/plugins/gsap';

const iconRefs = ref([]);
const titleRefs = ref([]);
const descRefs = ref([]);

onMounted(() => {
  gsap.to('#border-svg-benefits rect', {
      strokeDashoffset: 0,
      duration: 2,
      ease: 'power2.out',
      scrollTrigger: {
          trigger: '#border-svg-benefits rect',
          start: 'top 80%',
          end: 'top 50%',
          scrub: false,
          markers: false
      }
  });

  iconRefs.value.forEach((icon, index) => {
    gsap.fromTo(icon, 
      { y: -20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: icon,
          start: 'top 85%',
          end: 'top 60%',
          scrub: false
        }
      }
    );
  });

  titleRefs.value.forEach((title, index) => {
    gsap.fromTo(title, 
      { x: -50, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: title,
          start: 'top 85%',
          end: 'top 60%',
          scrub: false
        }
      }
    );
  });

  descRefs.value.forEach((desc, index) => {
    gsap.fromTo(desc, 
      { opacity: 0 },
      { 
        opacity: 1, 
        duration: 1, 
        delay: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: desc,
          start: 'top 85%',
          end: 'top 60%',
          scrub: false
        }
      }
    );
  });
});

const benefits = [
    {
        title: 'Šetrenie Času a Energie',
        description: 'Rýchle a presné rady bez zdĺhavého hľadania informácií.',
        icon: saveTime
    },
    {
        title: 'Nezávislé Poradenstvo',
        description: 'Objektívne odporúčania bez viazanosti na konkrétnu značku.',
        icon: independant
    },
    {
        title: 'Osobný Prístup',
        description: 'Poradenstvo prispôsobené vašim individuálnym potrebám.',
        icon: personalCare
    },
    {
        title: 'Bezplatná Služba',
        description: 'Získate cenné rady úplne zadarmo.',
        icon: free
    }
]
</script>