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
                    { name: 'author', content: 'IKATEK UNHAS' },
                    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                    { name: 'description', content: 'Official Website ANTEK HUB' },
                    { name: 'keywords', content: 'alumni, alumni teknik unhas, teknik unhas, ikatan alumni unhas' },
                    
                    // Open Graph meta tags
                    { property: 'og:site_name',     content: 'ANTEK HUB' },
                    { property: 'og:title',         content: 'ANTEK HUB' },
                    { property: 'og:url',           content: 'https://antekhub.vercel.app/berita' },
                    { property: 'og:type',          content: 'article' },
                    { property: 'og:description',   content: 'Official Website ANTEK HUB' },
                    { property: 'og:locale',        content: 'id_ID' },

                    // IMG
                    { property: 'og:image',     content: 'https://api.antekhub.com/storage/logo-ikatek.PNG' },
                    { property: 'og:image:url', content: 'https://api.antekhub.com/storage/logo-ikatek.PNG' },
                    { 
                        property: 'og:image:secure_url', 
                        content: 'https://api.antekhub.com/storage/logo-ikatek.PNG'
                    },
                    { property: 'og:image:type',    content: 'image/jpeg' },
                    { property: 'og:image:width',   content: '1200' },
                    { property: 'og:image:height',  content: '600' },
                    { property: 'og:image:alt',     content: 'Gambar Preview ANTEK HUB' },  
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