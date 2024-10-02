<template>
    <ConfirmPopup class="max-lg:hidden" group="popup" />
    <ConfirmDialog class="lg:hidden" group="dialog" />
    <Toast class="max-lg:hidden"></Toast>
	<div class="text-[#181818] bg-[#F8F9FA]">
		<RouterView></RouterView>
	</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            default: {
                title: 'ANTEK HUB',
                // img: '@/assets/'
                // img: 'https://ladybird-diverse-pheasant.ngrok-free.app/storage/'
                img: 'https://api.antekhub.com/storage/'
            },
            pageMeta: {
                title: 'ANTEK HUB',
                meta: [
                    { charset: 'utf-8' },
                    { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
                    { name: 'author', content: 'IKATEK UNHAS' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { name: 'description', content: 'Official Website ANTEK HUB' },
                    { name: 'keywords', content: 'alumni, alumni teknik unhas, teknik unhas, ikatan alumni unhas' },
                    
                    // Open Graph meta tags
                    { property: 'og:title', content: `ANTEK HUB` },
                    { property: 'og:type', content: 'article' },
                    { property: 'og:url', content: 'https://antekhub.vercel.app/berita' },
                    { property: 'og:description', content: 'Official Website ANTEK HUB' },
                    { property: 'og:locale', content: 'id_ID' },
                    { property: 'og:site_name', content: 'ANTEK HUB' },
                    { property: 'og:image', content: `https://api.antekhub.com/storage/logo-ikatek.PNG` },
                    { property: 'og:image:alt', content: 'Gambar Preview ANTEK HUB' },  
                ],
            }
        };
    },
    provide() {
        return {
            default: this.default
        };
    },
    mounted() {
        useHead(this.pageMeta)
    },
}
</script>

<style>

</style>