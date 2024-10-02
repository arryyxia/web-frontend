<template>
    <ConfirmPopup class="max-lg:hidden" group="popup" />
    <ConfirmDialog class="lg:hidden" group="dialog" />
    <Toast class="max-lg:hidden"></Toast>
	<div class="text-[#181818] bg-[#F8F9FA]">
		<RouterView></RouterView>
	</div>
</template>

<script>
// import { useHead } from '@unhead/vue';

export default {
    name: 'App',
    data() {
        return {
            default: {
                title: 'ANTEK HUB',
                img: 'https://api.antekhub.com/storage/'
                // img: '@/assets/'
                // img: 'https://ladybird-diverse-pheasant.ngrok-free.app/storage/'
            },
            // <meta property="og:site_name" content="Perdi Portfloio - Blog" />
            // <meta property="og:title" content={title} />
            // <meta property="og:url" content={Astro.url} />
            // <meta property="og:image" content={imageUrl || '../assets/img/poto-portfolio.jpeg'} />
            // <meta property="og:image:url" content={imageUrl || '../assets/img/poto-portfolio.jpeg'} />
            // <meta
            //     property="og:image:secure_url"
            //     content={imageUrl || '../assets/img/poto-portfolio.jpeg'}
            // />
            // <meta property="og:image:type" content="image/jpeg" />
            // <meta property="og:image:width" content="1200" />
            // <meta property="og:image:height" content="600" />
            // <meta property="og:image:alt" content="Poto Portfolio" />
            pageMeta: {
                title: 'ANTEK HUB',
                meta: [
                    { name: 'author',       content: 'IKATEK UNHAS' },
                    { name: 'viewport',     content: 'width=device-width, initial-scale=1' },
                    { name: 'description',  content: 'ANTEK HUB Adaptive Colaborative' },
                    { name: 'title',        content: 'ANTEK HUB - Official Website' },
                    { name: 'keywords',     content: 'alumni, alumni teknik unhas, teknik unhas, ikatan alumni unhas' },

                    // Open Graph meta tags
                    { property: 'og:site_name', content: 'ANTEK HUB' },
                    { property: 'og:title', content: 'ANTEK HUB - Official Website' },
                    { property: 'og:url', content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'og:type', content: 'website' },
                    { property: 'og:description', content: 'ANTEK HUB Adaptive Colaborative' },

                    // IMG Open Graph
                    { property: 'og:image', content: 'https://api.antekhub.com/storage/meta-preview.jpg' },
                    { property: 'og:image:url', content: 'https://api.antekhub.com/storage/meta-preview.jpg' },
                    { property: 'og:image:secure_url', content: 'https://api.antekhub.com/storage/meta-preview.jpg' },
                    { property: 'og:image:type', content: 'image/jpeg' },
                    { property: 'og:image:width', content: '1200' },
                    { property: 'og:image:height', content: '600' },
                    { property: 'og:image:alt', content: 'Gambar Preview ANTEK HUB' },

                    // Twitter meta tags
                    { property: 'twitter:card', content: 'summary_large_image' },
                    { property: 'twitter:url', content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'twitter:title', content: 'ANTEK HUB - Official Website' },
                    { property: 'twitter:description', content: 'ANTEK HUB Adaptive Colaborative' },
                    { property: 'twitter:image', content: 'https://api.antekhub.com/storage/meta-preview.jpg' },
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