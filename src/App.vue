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
                // title: 'ANTEK HUB',
                // img: '@/assets/'
                // img: 'https://ladybird-diverse-pheasant.ngrok-free.app/storage/'
                img: 'https://api.antekhub.com/storage/'
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
                title: 'ANTEK HUB test',
                meta: [
                    { name: 'author',       content: 'IKATEK UNHAS' },
                    { name: 'viewport',     content: 'width=device-width, initial-scale=1' },
                    { name: 'description',  content: 'ANTEK HUB Adaptive Colaborative' },
                    { name: 'title',        content: 'ANTEKHUB - Official Website' },
                    { name: 'keywords',     content: 'alumni, alumni teknik unhas, teknik unhas, ikatan alumni unhas' },

                    // Open Graph meta tags
                    { property: 'og:site_name', content: 'ANTEK HUB' },
                    { property: 'og:title', content: 'ANTEKHUB - Official Website' },
                    { property: 'og:url', content: 'https://antekhub.vercel.app/' },
                    { property: 'og:type', content: 'website' },
                    { property: 'og:description', content: 'ANTEK HUB Adaptive Colaborative' },

                    // IMG Open Graph
                    { property: 'og:image', content: 'https://metatags.io/images/meta-tags.png' },
                    { property: 'og:image:url', content: 'https://metatags.io/images/meta-tags.png' },
                    { property: 'og:image:secure_url', content: 'https://metatags.io/images/meta-tags.png' },
                    { property: 'og:image:type', content: 'image/jpeg' },
                    { property: 'og:image:width', content: '1200' },
                    { property: 'og:image:height', content: '600' },
                    { property: 'og:image:alt', content: 'Gambar Preview ANTEK HUB' },

                    // Twitter meta tags
                    { property: 'twitter:card', content: 'summary_large_image' },
                    { property: 'twitter:url', content: 'https://antekhub.vercel.app/' },
                    { property: 'twitter:title', content: 'ANTEKHUB - Official Website' },
                    { property: 'twitter:description', content: 'ANTEK HUB Adaptive Colaborative' },
                    { property: 'twitter:image', content: 'https://metatags.io/images/meta-tags.png' },
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