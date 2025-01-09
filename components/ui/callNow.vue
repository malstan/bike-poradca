<template>
    <a ref="btn" href="tel:0951355464" class="inline-block text-lg xs:text-xl md:text-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full duration-200 ease-in-out">Zavolať teraz</a>
</template>
<script setup lang="ts">
import gsap from 'gsap';

const btn = ref(null);

onMounted(() => {
    gsap.fromTo(btn.value,
        { y: 50, opacity: 0 },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: btn.value,
                start: 'top 85%',
                end: 'top 60%',
                scrub: false
            }
        },
        
    );
    gsap.to(btn.value, 
        {
            scale: 1.1,
            duration: 0.8,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut'
        }
    );
})
</script>