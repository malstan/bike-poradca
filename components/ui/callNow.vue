<template>
    <div @mouseenter="showQRCode" @mouseleave="hideQRCode" class="relative inline-block">
        <a ref="btn" :href="`tel:${phoneNumber}`" class="inline-block text-lg xs:text-xl md:text-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full ">Zavolať teraz</a>
        <div v-if="canDisplayQRCode" class="absolute inset-0 flex items-center justify-center overflow-visible opacity-0" ref="qrcodeContainer">
          <div class="bg-green-500 text-center rounded-lg">
            <span class="text-lg font-semibold">Oskenujte.</span>
            <QRCodeVue :value="phoneNumber" :size="222" class="" />
            <span class="text-lg font-semibold">{{phoneNumber}}</span>
          </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';
import QRCodeVue from 'qrcode.vue'

const btn = ref<null | HTMLElement>(null);
const qrcodeContainer = ref<null | HTMLElement>(null);

const canDisplayQRCode = ref<boolean>(false);

const phoneNumber = "+421 952 395 013";

onBeforeMount(() => {
     canDisplayQRCode.value = !/Mobi|Android|iPhone/i.test(navigator.userAgent)
})

onMounted(() => {
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

const showQRCode = () => {
  gsap.to(qrcodeContainer.value, { 
    opacity: 1, 
    duration: 0.4, 
    ease: 'ease-in-out', 
})
}

const hideQRCode = () => {
  gsap.to(qrcodeContainer.value, {
    opacity: 0,
    duration: 0.4,
    ease: 'ease-in-out',
  })
}
</script>