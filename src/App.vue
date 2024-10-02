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
            }
        };
    },
    setup() {
        const { title, meta } = useHead({
            title: 'ANTEK HUB',
            meta: [
                { name: 'description', content: 'Default description for the website.' },
                { name: 'keywords', content: 'keyword1, keyword2, keyword3' },
                { property: 'og:title', content: 'Default Title' },
                { property: 'og:description', content: 'Default description for the website.' },
                { property: 'og:image', content: 'https://api.antekhub.com/storage/logo-ikatek.PNG' }, // Gambar Open Graph
                { name: 'twitter:image', content: 'https://api.antekhub.com/storage/logo-ikatek.PNG' }, // Gambar Twitter Card
            ],
        });

        return { title, meta };
    },
    provide() {
        return {
            default: this.default
        };
    }
}
</script>

<style>

</style>