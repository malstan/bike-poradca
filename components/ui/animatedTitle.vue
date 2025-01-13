<template>
    <h2 class="text-3xl xs:text-4xl lg:text-5xl font-bold mb-10 sm:mb-24 text-center w-full inline-block">
        <slot name="before" />
        <span class="relative inline-block">
            <svg class="absolute top-0 left-0 w-full h-full fill-none stroke-orange-500 hidden"  ref="titleBorder" style="stroke-width: 6; stroke-dasharray: 520; stroke-dashoffset: 500;" viewBox="0 0 200 60" preserveAspectRatio="none">
                <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            <span class="relative block p-3">
                <slot name="inBorder" />
            </span>
        </span>
        <slot name="after" />
    </h2>
</template>
<script lang="ts" setup>
import gsap from '~/plugins/gsap';

const titleBorder = ref<null | HTMLElement>(null);

onMounted(() => {
    gsap.to(titleBorder.value, {
        strokeDashoffset: 0,
        display: 'block',
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: titleBorder.value,
            start: 'top 80%',
            end: 'top 50%',
            scrub: false,
            markers: false
        },
        
    });
})
</script>