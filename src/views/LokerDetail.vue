<template>
    <Layout>
        <div v-if="dataIsLoading" class="col-span-12 grid grid-cols-12 gap-6">
            <!-- static -->
            <div class="col-span-12 lg:col-span-8 flex flex-col gap-2">
                <Skeleton width="20%" height="2rem"></Skeleton>
                <Skeleton width="100%" height="4rem"></Skeleton>
                <Skeleton width="40%" height="2rem"></Skeleton>
                <Skeleton width="100%" height="25rem"></Skeleton>
                <Skeleton width="100%" height="30rem"></Skeleton>
            </div>

            <div class="col-span-12 lg:col-span-4 flex flex-col gap-2">
                <Skeleton width="100%" height="20rem"></Skeleton>
            </div>
        </div>

        <div v-else class="col-span-12 grid grid-cols-12 gap-6">
            <!-- title -->
            <!-- <p class="text-lg font-semibold text-red-600">Lowongan Kerja</p>
            <h2 class="text-3xl font-semibold">{{ konten.judul }}</h2>
            <p class="text-lg font-normal">{{ konten.perusahaan.nama_perusahaan }}</p>
            <p class="text-lg font-normal">{{ convertDate(konten.created_at) }}</p> -->
            <!-- Format the date here -->

            <!-- Detail -->
            <!-- <div class="flex text-gray-500 justify-around lg:justify-left gap-5 flex-wrap">
                <div class="flex gap-2 items-center">
                    <i class="pi pi-briefcase"></i>
                    <span>{{ konten.role }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="pi pi-map-marker"></i>
                    <span>{{ konten.lokasi }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="pi pi-clock"></i>
                    <span>{{ `${konten.pengalaman_kerja} Tahun` }}</span>
                </div>
                <div class="flex gap-2 items-center">
                    <i class="pi pi-calendar"></i>
                    <span>{{ `${hitungHari(konten.tgl_selesai)} hari lagi` }}</span>
                </div>
            </div>

            <div class="bg-white shadow-md p-5 rounded-lg flex flex-col items-center gap-6">
                <img :src="this.default.img + konten.gambar" alt="">
                <div v-html="konten.konten" class="text-left w-full flex flex-col gap-3"></div>
            </div> -->
            <div class="col-span-12 lg:col-span-8 flex flex-col gap-2">
                <p class="text-lg font-semibold text-red-600">Loker</p>
                <h2 class="text-3xl font-semibold">{{konten.judul}}</h2>

                <div class="flex gap-5">
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-briefcase"></i>
                        <span>{{ konten.role }}</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-map-marker"></i>
                        <span>{{ konten.lokasi }}</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-clock"></i>
                        <span>{{ `${konten.pengalaman_kerja} Tahun` }}</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-calendar"></i>
                        <span>{{ `${hitungHari(konten.tgl_selesai)} hari lagi` }}</span>
                    </div>
                </div>

                <div class="flex flex-col">
                    <img class="w-full pb-3" :src="this.default.img + konten.gambar" alt="">
                    <div v-html="konten.konten" class="flex flex-col gap-3 pb-3"></div>
                </div>
            </div>

            <div class="col-span-12 lg:col-span-4">
                <div v-if="otherLinksLoading" class="bg-white rounded-md p-5 flex flex-col text-left shadow-md gap-2">
                    <Skeleton width="100%" height="4rem"></Skeleton>
                    <Skeleton width="100%" height="4rem"></Skeleton>
                    <Skeleton width="100%" height="4rem"></Skeleton>
                    <Skeleton width="100%" height="4rem"></Skeleton>
                </div>
                <OtherDetail v-else :otherLinks="otherLinks" judul="Loker" link="/loker"></OtherDetail>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'LokerDetail',
    inject: ['default'],
    data() {
        return {
            dataIsLoading: true,
            konten: [],
            otherLinksLoading: true,
            otherLinks: [],
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
        // Fetch data
        getDetail() {
            axios.get('/loker/' + this.$route.params.slug).then(response => {
                this.konten = response.data.data;
                this.dataIsLoading = false;
                this.pageMeta.title = 'ANTEK HUB | ' + this.konten.judul; 
                const imageUrl = `${this.default.img}${this.konten.gambar}`;

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
        async getLoker () {
            const today = new Date();
            await axios.get('loker').then(response => {
                this.otherLinks     = response.data.data.data.filter((loker) => {
                    const lokerEndDate = new Date(loker.tgl_selesai);
                    return lokerEndDate >= today;
                });
                if (this.otherLinks.length == 0) {
                    this.lokerIsEmpty = true
                }
                this.totalRecords   = this.otherLinks.total
                this.otherLinksLoading = false;
            }).catch(err => {
                console.log(err)
            });
        },
        hitungHari(tgl_selesai) {
            const nowDate = new Date();
            const endDate = new Date(tgl_selesai);

            const timeDiff = endDate - nowDate;
            const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            return dayDiff > 0 ? dayDiff : 0; 
        },
        convertDate(dateStr) {
            const options = { day: '2-digit', month: 'short', year: 'numeric' };
            const date = new Date(dateStr);
            return date.toLocaleDateString('en-GB', options).replace(',', '');
        }
    },
    mounted() {
        this.getDetail()
        this.getLoker()
        useHead(this.pageMeta)
    },
    watch: {
        $route(to, from) {
            this.dataIsLoading = true;
            this.getDetail();
        },
    }
}
</script>

<style>
</style>
