import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import TextPlugin from 'gsap/TextPlugin';

// Registrovanie pluginov
gsap.registerPlugin(ScrollTrigger, TextPlugin);

// Zabezpečenie, že kód sa vykoná iba na klientovi
if (process.client) {
  console.log("GSAP, ScrollTrigger, and TextPlugin loaded on client-side.");
}