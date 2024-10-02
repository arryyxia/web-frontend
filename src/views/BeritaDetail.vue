<template>
    <Layout>
        <div v-if="dataIsLoading" class="col-span-12 flex flex-col items-center gap-2">
            <!-- static -->
            <Skeleton width="7rem" height="1.5rem"></Skeleton>
            <Skeleton width="100%" height="2.5rem"></Skeleton>
            <Skeleton width="50%" height="2.5rem"></Skeleton>
            <Skeleton width="7rem" height="1.5rem"></Skeleton>
            <Skeleton width="15rem" height="1.5rem"></Skeleton>

            <div class="bg-white shadow-md p-5 rounded-lg flex flex-col items-center gap-6 w-full">
                <Skeleton width="50%" height="25rem"></Skeleton>
                <Skeleton width="100%" height="50rem"></Skeleton>
            </div>
        </div>

        <div v-else class="col-span-12 text-center flex flex-col gap-2">
            <!-- static -->
            <p class="text-lg font-semibold text-red-600">Berita</p>
            <h2 class="text-3xl font-semibold">{{konten.judul}}</h2>
            <p class="text-lg font-normal">{{ konten.penulis }}</p>
            <p class="text-lg font-normal">{{ hitungHari(konten.created_at) }}</p>

            <div class="bg-white shadow-md p-5 rounded-lg flex flex-col items-center gap-6">
                <img :src="this.default.img + konten.gambar" alt="">
                <div v-html="konten.konten" class="flex flex-col gap-3"></div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'BeritaDetail',
    inject: ['default'],
    data() {
        return {
            dataIsLoading: true,
            konten: [],
            pageMeta: {
                title: `ANTEK HUB |`,
                meta: [
                    { property: 'og:url',               content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'twitter:url',          content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'og:image',             content: `https://api.antekhub.com/storage/meta-preview.jpg` },
                    { property: 'og:image:url',         content: `https://api.antekhub.com/storage/meta-preview.jpg` },
                    { property: 'og:image:secure_url',  content: `https://api.antekhub.com/storage/meta-preview.jpg` },
                    { property: 'twitter:image',        content: 'https://api.antekhub.com/storage/meta-preview.jpg' },
                    { property: 'og:image:alt',         content: 'Gambar Preview ANTEK HUB' },
                ]
            }
        }
    },
    methods: {
        // ? Fetch data
        getDetail() {
            axios.get('/berita/' + this.$route.params.slug).then(response => {
                this.konten = (response.data.data)
                this.dataIsLoading = false;
                this.pageMeta.title = 'ANTEK HUB | ' + this.konten.judul; 
                const imageUrl = `${this.default.img}${this.konten.gambar}`;

                // Update image meta tags dynamically
                this.pageMeta.meta = [
                    { property: 'og:url',               content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'twitter:url',          content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'og:image',             content: imageUrl },
                    { property: 'og:image:url',         content: imageUrl },
                    { property: 'og:image:secure_url',  content: imageUrl },
                    { property: 'twitter:image',        content: imageUrl },
                    { property: 'og:image:alt',         content: `${this.konten.judul}` },
                ];
            }).catch(err => {
                console.log(err)
            });
        },
        hitungHari(dateStr) {
            const date = new Date(dateStr);
            const options = { day: 'numeric', month: 'short', year: 'numeric' };
            return date.toLocaleDateString('en-GB', options);
        }
    },
    mounted() {
        this.getDetail()
        useHead(this.pageMeta)
    },
}
</script>

<style>

</style>