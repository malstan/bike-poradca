<template>
    <div class="contaner mx-auto py-20 px-4" id="contact">
        <h2 class="text-center text-2xl xs:text-3xl lg:text-4xl md:text-5xl mb-10 px-10  font-bold">Kontaktujte ma <span class="whitespace-nowrap">e-mailom</span></h2>
        <form class="max-w-lg mx-auto">
            <div class="flex flex-col xs:flex-row gap-4 mb-4">
                <input type="text" id="name" name="name" placeholder="Meno" class="flex-1" />
                <input type="email" id="email" name="email" placeholder="E-mail" class="flex-1" />
            </div>

            <textarea id="message" name="message" placeholder="Správa" class="block w-full min-h-16 h-auto"></textarea>

            <UiButton type="submit" class="mt-4 w-full text-lg sm:text-xl ">Odoslať</UiButton>
        </form>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';

onMounted(() => {
    gsap.fromTo('#contact',
        { opacity: 0, y: 50 },
        {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: 'power2.out',
            scrollTrigger: {
                trigger: '#contact',
                start: 'top 80%',
                end: 'top 50%',
                scrub: false,
                markers: false
            }
        }
    );
})

</script>

<style scoped>
    input, textarea {
        @apply px-3 py-2 bg-white text-base border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none focus:border-orange-500 focus:ring-orange-500 block w-full rounded-md focus:ring-1
    }
    textarea {
        field-sizing: content
    }
</style>

