<template>
    <div class="bg-green-500">
        <div class="container mx-auto py-10 px-4">

            <UiAnimatedTitle class="text-white">
                <template #before>
                    Cesta k 
                </template>
                <template #inBorder>
                    vysnenému
                </template>
                <template #after>
                    bicyklu.
                </template>
            </UiAnimatedTitle>
        
            <div class="relative process-section">
                <!-- first -->
                <div class="flex items-center justify-between min-h-52 gap-4 relative">
                    <div class="w-2/5 hidden lg:block">
                        <div></div>
                    </div>

                    <div>
                        <div class="absolute top-1/2 flex items-center justify-center h-full w-6">
                            <div class="w-2 absolute top-0 h-full bg-gray-300"></div>
                            <div ref="line1" class="w-2 absolute top-0 h-0 bg-orange-500 duration-300"></div>
                        </div>
                        <div ref="ball1" class="z-10 size-6 bg-gray-300 rounded-full relative"></div>
                    </div>

                    <div class="w-full lg:w-2/5 opacity-0 mr-10 xs:mr-0" id="step1">
                        <div class="shadow-lg rounded-lg p-4 xs:p-10 max-w-96 bg-green-600 ">
                            <span class="block mb-3 text-md font-bold text-orange-500">01</span>
                            <p class="text-xl xs:text-2xl text-white">Zavolajte mi.</p>
                        </div>
                    </div>
                </div>

                <!-- second -->
                <div class="flex items-center justify-between min-h-52 gap-4 relative">

                    <div class="lg:hidden absolute top-[calc(50%-4px)] flex items-center justify-center h-6 ml-[8px] w-[calc(100%-20px)]">
                        <div class="h-2 absolute top-0 w-full bg-gray-300"></div>
                        <div ref="line12" class="h-2 absolute left-0 top-0 w-0 bg-orange-500 duration-300"></div>
                    </div>
                    
                    <div class="w-full lg:w-2/5 justify-items-end opacity-0 ml-10 xs:ml-0" id="step2">
                        <div class="shadow-lg rounded-lg p-4 xs:p-10 max-w-96 bg-green-600">
                            <span class="block mb-3 text-md font-bold text-orange-500">02</span>
                            <p class="text-xl xs:text-2xl text-white">Povedzte mi o vašom budúcom bicykli.</p>
                        </div>
                    </div>

                    <div>
                        <div class="absolute top-1/2 flex items-center justify-center h-full w-6">
                            <div class="w-2 absolute top-0 h-full bg-gray-300"></div>
                            <div ref="line2" class="w-2 absolute top-0 h-0 bg-orange-500 duration-300"></div>
                        </div>
                        <div ref="ball2" class="z-10 size-6 bg-gray-300 rounded-full relative"></div>
                    </div>

                    <div class="w-2/5 hidden lg:block">
                       
                    </div>
                </div>

                <!-- third -->
                <div class="flex items-center justify-between min-h-52 gap-4 relative">
                    <div class="w-2/5 hidden lg:block">
                    </div>

                    <div class="lg:hidden absolute top-[calc(50%-4px)] flex items-center justify-center h-6  w-[calc(100%-20px)]">
                        <div class="h-2 absolute top-0 -right-3 w-full bg-gray-300"></div>
                        <div ref="line22" class="h-2 absolute -right-3 top-0 w-0 bg-orange-500 duration-300"></div>
                    </div>

                    <div>
                        <div class="absolute top-1/2 flex items-center justify-center h-full w-6">
                            <div class="w-2 absolute top-0 h-full bg-gray-300"></div>
                            <div ref="line3" class="w-2 absolute top-0 h-0 bg-orange-500 duration-300"></div>
                        </div>
                        <div ref="ball3" class="z-10 size-6 bg-gray-300 rounded-full relative"></div>
                    </div>

                    <div class="w-full lg:w-2/5 opacity-0 mr-10 xs:mr-0" id="step3">
                        <div class="shadow-lg rounded-lg p-4 xs:p-10 max-w-96 bg-green-600">
                            <span class="block mb-3 text-md font-bold text-orange-500">03</span>
                            <p class="text-xl xs:text-2xl text-white">Poradím Vám, ktorý bicykel je pre Vás najlepší.</p>
                        </div>
                    </div>
                </div>

                <!-- fourth -->
                <div class="flex items-center justify-between min-h-52 gap-4 relative">
                    
                     <div class="lg:hidden absolute top-[calc(50%-4px)] flex items-center justify-center h-6 ml-[8px] w-[calc(100%-20px)]">
                        <div class="h-2 absolute top-0 w-full bg-gray-300"></div>
                        <div ref="line32" class="h-2 absolute left-0 top-0 w-0 bg-orange-500 duration-300"></div>
                    </div>

                    <div class="w-full lg:w-2/5 justify-items-end opacity-0 ml-10 xs:ml-0" id="step4">
                        <div class="shadow-lg rounded-lg p-4 xs:p-10 max-w-96 bg-green-600">
                            <span class="block mb-3 text-md font-bold text-orange-500">04</span>
                            <p class="text-xl xs:text-2xl text-white">Brázdite krajinou na vašom vysnívanom bicykli.</p>
                        </div>
                    </div>

                    <div>
                        <div ref="ball4" class="z-10 size-6 bg-gray-300 rounded-full relative"></div>
                    </div>

                    <div class="w-2/5 hidden lg:block">
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import gsap from '~/plugins/gsap';

const ball1 = ref<null | HTMLElement>(null);
const ball2 = ref<null | HTMLElement>(null);
const ball3 = ref<null | HTMLElement>(null);
const ball4 = ref<null | HTMLElement>(null);

const line1 = ref<null | HTMLElement>(null);
const line12 = ref<null | HTMLElement>(null);
const line2 = ref<null | HTMLElement>(null);
const line22 = ref<null | HTMLElement>(null);
const line3 = ref<null | HTMLElement>(null);    
const line32 = ref<null | HTMLElement>(null);    

onMounted(() => {
    gsap.to(ball1.value, 
        { 
            duration: 1, 
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: ball1.value,
                start: 'top 75%',
                end: 'bottom 75%',
                once: true,
                onEnter: () => {
                    ball1.value?.classList.add('bg-orange-500');
                    gsap.fromTo('#step1', { x: 25, scale: 0.9, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1, ease: 'power2.out' });
                }
            }
        }
    );

    gsap.fromTo(line1.value, 
        { height: 0 },
        { 
            height: '100%',
            duration: 0.3, 
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: line1.value,
                start: 'top 50%',
                end: 'bottom 50%',
            },
            onComplete: () => {
                gsap.fromTo(line12.value, 
                    { width: 0 },
                    { width: '100%', delay: 0.3, duration: 0.5, ease: 'power2.out',
                        onComplete: () =>  ball2.value?.classList.add('bg-orange-500')
                    }
                );
                gsap.fromTo('#step2', 
                    { x: -25, scale: 0.9, opacity: 0 }, 
                    { x: 0, scale: 1, opacity: 1, delay: 0.7, duration: 0.4, ease: 'power2.out' }
                );
            }
        }
    );


     gsap.fromTo(line2.value, 
        { height: 0 },
        { 
            height: '100%',
            duration: 0.3, 
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: line2.value,
                start: 'top 50%',
                end: 'bottom 50%',
            },
            onComplete: () => {
                gsap.fromTo(line22.value, 
                    { width: 0 },
                    { width: '100%', delay: 0.3, duration: 0.5, ease: 'power2.out',
                        onComplete: () =>  ball3.value?.classList.add('bg-orange-500')
                    }
                );
                gsap.fromTo('#step3', 
                    { x: -25, scale: 0.9, opacity: 0 }, 
                    { x: 0, scale: 1, opacity: 1, delay: 0.7, duration: 0.4, ease: 'power2.out' }
                );
            }
        }
    );

     gsap.fromTo(line3.value, 
        { height: 0 },
        { 
            height: '100%',
            duration: 0.3, 
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: line3.value,
                start: 'top 50%',
                end: 'bottom 50%',
            },
            onComplete: () => {
                gsap.fromTo(line32.value, 
                    { width: 0 },
                    { width: '100%', delay: 0.3, duration: 0.5, ease: 'power2.out',
                        onComplete: () =>  ball4.value?.classList.add('bg-orange-500')
                    }
                );
                gsap.fromTo('#step4', 
                    { x: -25, scale: 0.9, opacity: 0 }, 
                    { x: 0, scale: 1, opacity: 1, delay: 0.7, duration: 0.4, ease: 'power2.out' }
                );
            }
        }
    );
});
</script>