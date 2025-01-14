<template>
     <div class="bg-gray-100">
        <div class="container mx-auto py-24 px-4">
   
            <UiAnimatedTitle>
                <template #inBorder>
                    Čo hovoria
                </template>
                <template #after>
                    zákazníci?
                </template>
            </UiAnimatedTitle>

            <div ref="reviewsRef" class="columns-1 sm:columns-2 lg:columns-3 gap-12">
                <div v-for="(review, index) in reviews" :key="index" class="w-full border rounded-lg shadow-lg p-6 mb-12 inline-block bg-white duration-500 ease-in-out hover:scale-105">
                    <p class="mb-6">{{ review.text }}</p>
                    <p ref="nameRefs" class="font-bold text-lg border-b-2 border-green-500 inline pr-6" :data-name="review.name"></p>
                </div>
            </div>

            <div class="flex justify-center mt-8">   
                <UiCallNow/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';

const reviewsRef = ref<null | HTMLElement>(null)
const nameRefs = ref<Array<HTMLElement>>([]);

onMounted(() => {
    gsap.fromTo(reviewsRef.value, 
        { y: 20, opacity: 0},
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power2.out',
             scrollTrigger: {
                trigger: reviewsRef.value,
                start: 'top 70%',
                end: 'top 70%',
                scrub: false,
                markers: false
            },
            onComplete: () => {
                nameRefs.value.forEach((title, index) => {
                    gsap.to(title, {
                        duration: 1.5, 
                        text: title.dataset.name,
                    });
                });
            }
        }
    );
})

const reviews = [
    {
        name: 'Janko',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum.',
        image: null
    },
     {
        name: 'Peter',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: null
    },
     {
        name: 'Vincko',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ',
        image: null
    },
     {
        name: 'Ivan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ',
        image: null
    },
     {
        name: 'Milan',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: null
    },
]
</script>