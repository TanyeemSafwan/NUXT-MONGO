// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ["@nuxtjs/tailwindcss", "nuxt-icon", "@pinia/nuxt"],
    // custom tailwindcss path
    tailwindcss: {
        cssPath: "~/assets/main.css",
    },
    // server config variable
    runtimeConfig: {
        MONGO_URI: process.env.MONGO_URI,
    },
    // register nitro plugin
    nitro: {
        plugins: ["@/server/db/index.ts"],
    },
    /// transpile a few packages
    build: {
        transpile: ["@headlessui/vue", "vue-toastification", "@headlessui/tailwindcss"],
    },
});
