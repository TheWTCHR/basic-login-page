export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
    tailwindcss: {
        cssPath: "/assets/main.css"
    },
    runtimeConfig: {
        
    },
    nitro: {
    },
    build: {
        transpile: ["@headlessui/vue", "vue-toastification", "@headlessui/tailwindcss"] 
    }
})
