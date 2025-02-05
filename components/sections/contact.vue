<template>
    <div class="contaner mx-auto py-20 px-4" id="contact">
        <h2 class="text-center text-2xl xs:text-3xl lg:text-4xl md:text-5xl mb-10 px-10  font-bold">Kontaktujte ma <span class="whitespace-nowrap">e-mailom</span></h2>
        <form ref="formRef" class="max-w-md mx-auto" @submit.prevent="sendEmail">
            
            <div class="relative my-5 bg-white text-base rounded-md h-10">
                <input type="name" id="name" name="name" v-model="name" placeholder=" " class="peer" />
                <label for="name" class="floating">Meno</label>
            </div>

            <div class="relative my-5 bg-white text-base rounded-md h-10">
                <input type="email" id="email" name="email" v-model="email" placeholder=" " class="peer"/>
                <label for="email" class="floating">E-mail</label>
            </div>
            
            <div class="relative my-5 bg-white text-base rounded-md h-10">
                <input type="phone" id="phone" name="phone" v-model="phone" placeholder=" " class="peer"/>
                <label for="phone" class="floating">Telefónne číslo</label>
            </div>

             <div class="relative my-5 bg-white text-base rounded-md">
                <textarea id="message" name="message" v-model="message" placeholder=" " class=" peer min-h-16 h-auto "></textarea>
                <label for="message" class="floating">Správa</label>
             </div>

             <div class="flex justify-start items-center gap-3">
                <input type="checkbox" name="gdpr" id="gdpr" v-model="gdpr" class="w-4 h-4">
                <label for="gdpr" class="flex-1">Súhlasim so <a href="documents/gdpr.pdf" target="_blank" class="text-orange-500 hover:text-orange-700">spracovaním osobných údajov.</a></label>
             </div>

            <UiButton type="submit" class="mt-4 w-full text-lg sm:text-xl disabled:pointer-events-none" :disabled="loading">
                <span v-if="loading" class="flex justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-dasharray="15" stroke-dashoffset="15" stroke-linecap="round" stroke-width="2" d="M12 3C16.9706 3 21 7.02944 21 12"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="15;0"/><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
                </span>
                <span v-else>
                    Odoslať
                </span>
            </UiButton>

            <div class="mt-6">
                <p class="text-red-500">{{ error }}</p>
                <p v-if="success" class="text-green-500">Vaša správa bola úspešne odoslaná. Ozveme sa Vám v čo najkratšom čase.</p>
            </div>
        </form>
    </div>
</template>
<script setup lang="ts">
import gsap from '~/plugins/gsap';

const formRef = ref<HTMLFormElement | null>(null);

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

const error = ref('')
const success = ref(false)
const loading = ref(false)

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const gdpr = ref(false)

const validate = () => {
    if (!name.value) {
        error.value = 'Meno a priezvisko je povinné.'
        return false
    }
    if (!email.value || !/\S+@\S+\.\S+/.test(email.value)) {
        error.value = 'Platný email je povinný.'
        return false
    }
    if (!phone.value || !/^\+?\d{10,15}$/.test(phone.value)) {
        error.value = 'Platné telefónne číslo je povinné.'
        return false
    }
    if (!message.value) {
        error.value = 'Správa je povinná.'
        return false
    }
    if (!gdpr.value) {
        error.value = 'Musíte súhlasiť s podmienkami používania a spracúvaním osobných údajov.'
        return false
    }
    return true
}

const sendEmail = async (event: SubmitEvent) => {
    event.preventDefault();

    error.value = ''
    loading.value = true

    if(validate()) {
        const response = await fetch("https://bikeporadca.sk/server/send_email.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                phone: phone.value,
                message: message.value,
                gdpr: gdpr.value
            })
        });
        
        const data = await response.text();

        loading.value = false
        if(data == 'success') {
            success.value = true
            setTimeout(() => {
                success.value = false
            }, 5000)   
        } else
            error.value = 'Niekde nastala chyba, skúste to znova neskôr.'
    }
};



</script>

<style scoped>
    input:not([type="checkbox"]), textarea {
        @apply  px-3 py-2 w-full h-full border shadow-sm focus:border-orange-500 focus:outline-none focus:ring-orange-500 rounded-md focus:ring-1
    }
    label.floating {
        @apply absolute px-1 rounded-lg z-10 text-sm text-gray-400 cursor-text bg-white -top-3 left-2 duration-300 ease-in-out peer-placeholder-shown:top-2 peer-focus:-top-3 peer-placeholder-shown:text-base peer-focus:text-sm
    }
    textarea {
        field-sizing: content
    }
</style>

