import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

export default defineNuxtPlugin(() => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger, TextPlugin);
  }
})