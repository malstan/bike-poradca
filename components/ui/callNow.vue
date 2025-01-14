<template>
    <div @mouseenter="showQRCode" @mouseleave="hideQRCode" class="relative inline-block">
        <a ref="btn" href="tel:0951355464" class="inline-block text-lg xs:text-xl md:text-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-full ">Zavolať teraz</a>
        <div v-if="canDisplayQRCode" class="absolute inset-0 flex items-center justify-center overflow-visible opacity-0" ref="qrcodeContainer">
            <QRCodeVue value="0951355464" :size="222" class="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " />
        </div>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';
import QRCodeVue from 'qrcode.vue'

const btn = ref<null | HTMLElement>(null);
const qrcodeContainer = ref<null | HTMLElement>(null);

const isQrVisible = ref<boolean>(false);
const canDisplayQRCode = ref<boolean>(false);

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
  isQrVisible.value = true
  gsap.to(qrcodeContainer.value, { 
    opacity: 1, 
    duration: 0.4, 
    ease: 'ease-in-out', 
    display: 'block' 
})
}

const hideQRCode = () => {
  gsap.to(qrcodeContainer.value, {
    opacity: 0,
    duration: 0.4,
    ease: 'ease-in-out',
    onComplete: () => {
      isQrVisible.value = false
    }
  })
}
</script>