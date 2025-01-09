<template>
    <div class="bg-green-500">
        <div class="container mx-auto py-10 px-4">
            
            <div class="relative process-section">
                <!-- first -->
                <div class="flex items-center justify-between min-h-52 gap-4 relative">
                    <div class="w-2/5 hidden lg:block">
                        <div class=""></div>
                    </div>

                    <div class="">
                        <div class="absolute top-1/2 flex items-center justify-center h-full w-6">
                            <div class="w-2 absolute top-0 h-full bg-gray-300"></div>
                            <div ref="line1" class="w-2 absolute top-0 h-0 transition-all duration-500 ease-in-out"></div>
                        </div>
                        <div ref="ball1" class="z-10 size-6 bg-gray-300 rounded-full transition-all duration-500 ease-in-out relative"></div>
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
                        <div ref="line12" class="h-2 absolute left-0 top-0 w-0 transition-all duration-500 ease-in-out"></div>
                    </div>
                    
                    <div class="w-full lg:w-2/5 justify-items-end opacity-0 ml-10 xs:ml-0" id="step2">
                        <div class="shadow-lg rounded-lg p-4 xs:p-10 max-w-96 bg-green-600">
                            <span class="block mb-3 text-md font-bold text-orange-500">02</span>
                            <p class="text-xl xs:text-2xl text-white">Poradím Vám, ktorý bicykel je pre Vás najlepší.</p>
                        </div>
                    </div>

                    <div class="">
                        <div class="absolute top-1/2 flex items-center justify-center h-full w-6">
                            <div class="w-2 absolute top-0 h-full bg-gray-300"></div>
                            <div ref="line2" class="w-2 absolute top-0 h-0 transition-all duration-500 ease-in-out"></div>
                        </div>
                        <div ref="ball2" class="z-10 size-6 bg-gray-300 rounded-full transition-all duration-500 ease-in-out relative"></div>
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
                        <div ref="line22" class="h-2 absolute -right-3 top-0 w-0 transition-all duration-500 ease-in-out"></div>
                    </div>

                    <div class="">
                        <div class="absolute top-1/2 flex items-center justify-center h-full w-6">
                            <div class="w-2 absolute top-0 h-full bg-gray-300"></div>
                            <div ref="line3" class="w-2 absolute top-0 h-0 transition-all duration-500 ease-in-out"></div>
                        </div>
                        <div ref="ball3" class="z-10 size-6 bg-gray-300 rounded-full transition-all duration-500 ease-in-out relative"></div>
                    </div>

                    <div class="w-full lg:w-2/5 opacity-0 mr-10 xs:mr-0" id="step3">
                        <div class="shadow-lg rounded-lg p-4 xs:p-10 max-w-96 bg-green-600">
                            <span class="block mb-3 text-md font-bold text-orange-500">03</span>
                            <p class="text-xl xs:text-2xl text-white">Odporúčim Vám najbližšiu predajňu.</p>
                        </div>
                    </div>
                </div>

                <!-- fourth -->
                <div class="flex items-center justify-between min-h-52 gap-4 relative">
                    
                     <div class="lg:hidden absolute top-[calc(50%-4px)] flex items-center justify-center h-6 ml-[8px] w-[calc(100%-20px)]">
                        <div class="h-2 absolute top-0 w-full bg-gray-300"></div>
                        <div ref="line32" class="h-2 absolute left-0 top-0 w-0 transition-all duration-500 ease-in-out"></div>
                    </div>

                    <div class="w-full lg:w-2/5 justify-items-end opacity-0 ml-10 xs:ml-0" id="step4">
                        <div class="shadow-lg rounded-lg p-4 xs:p-10 max-w-96 bg-green-600">
                            <span class="block mb-3 text-md font-bold text-orange-500">04</span>
                            <p class="text-xl xs:text-2xl text-white">Brázdite krajinou na vašom vysnívanom bicykli.</p>
                        </div>
                    </div>

                    <div class="">
                        <div ref="ball4" class="z-10 size-6 bg-gray-300 rounded-full transition-all duration-500 ease-in-out relative"></div>
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

const ball1 = ref(null);
const ball2 = ref(null);
const ball3 = ref(null);
const ball4 = ref(null);

const line1 = ref(null);
const line12 = ref(null);
const line2 = ref(null);
const line22 = ref(null);
const line3 = ref(null);    
const line32 = ref(null);    

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
                    ball1.value.classList.add('bg-orange-500');
                    gsap.fromTo('#step1', { x: 25, scale: 0.9, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1, ease: 'power2.out' });
                }
            }
        }
    );

    gsap.to(line1.value, 
        { 
            duration: 1, 
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: line1.value,
                start: 'top 50%',
                end: 'bottom 50%',
                onEnter: () => line1.value.classList.add('bg-orange-500', 'h-full'),
            },
            onComplete: () => {
                line12.value.classList.add('bg-orange-500', 'w-full'),
                ball2.value.classList.add('bg-orange-500');
                gsap.fromTo('#step2', { x: -25, scale: 0.9, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1, ease: 'power2.out' });
            }
        }
    );

    gsap.to(line2.value, 
        { 
            duration: 1, 
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: line2.value,
                start: 'top 50%',
                end: 'bottom 50%',      
                onEnter: () => line2.value.classList.add('bg-orange-500', 'h-full'),
                },
            onComplete: () => {
                line22.value.classList.add('bg-orange-500', 'w-full'),
                ball3.value.classList.add('bg-orange-500');
                gsap.fromTo('#step3', { x: 25, scale: 0.9, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1, ease: 'power2.out' });
            }
        }
    );

    gsap.to(line3.value, 
        { 
            duration: 1, 
            ease: 'power2.out', 
            scrollTrigger: {
                trigger: line3.value,
                start: 'top 50%',
                end: 'bottom 50%',               
                onEnter: () => line3.value.classList.add('bg-orange-500', 'h-full'),
            },
            onComplete: () => {
                line32.value.classList.add('bg-orange-500', 'w-full'),
                ball4.value.classList.add('bg-orange-500');
                gsap.fromTo('#step4', { x: -25, scale: 0.9, opacity: 0 }, { x: 0, scale: 1, opacity: 1, duration: 1, ease: 'power2.out' });
            }
                
        }
    );

});
</script>