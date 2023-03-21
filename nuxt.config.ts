export default defineNuxtConfig({
 srcDir: "src/",
 vite: { 
   server: {
       watch: {
           usePolling: true
       }
   },
 }
})