import gsap from 'gsap';
import { ScrollTrigger, TextPlugin } from 'gsap/all';

// Registrovanie pluginov
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Zabezpečenie, že kód sa vykoná iba na klientovi
if (process.client) {
  console.log("GSAP, ScrollTrigger, and TextPlugin loaded on client-side.");
}