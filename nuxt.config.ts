export default defineNuxtConfig({
 srcDir: "src/",
 css: ["@/assets/styles/main.scss","@/assets/styles/common.scss","@/assets/styles/reset.css"],
 plugins: ['@/plugins/gsap.js'],
 vite: {
   css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/styles/_variables.scss";',
      },
    },
  },
 },
 server: {
   watch: {
       usePolling: true
   }
 },
})