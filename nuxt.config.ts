export default defineNuxtConfig({
 srcDir: "src/",
 css: ["@/assets/styles/main.scss","@/assets/styles/reset.css"],
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