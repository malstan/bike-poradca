<template>
  <div>
    <SectionsHero />
    <SectionsAbout />
    <SectionsWhyMe />

    <div class="w-full text-center mb-14 px-4">
      <UiCallNow/>
    </div>

    <SectionsHowItWorks />
    
    <SectionsPartners />
    <SectionsReviews />
    <SectionsContact />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'BikePoradca'
})
</script>
