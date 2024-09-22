<template>
    <Layout>
        <div v-if="dataIsLoading" class="col-span-12 flex flex-col items-center gap-2">
            <!-- static -->
            <Skeleton width="7rem" height="1.5rem"></Skeleton>
            <Skeleton width="100%" height="2.5rem"></Skeleton>
            <Skeleton width="50%" height="2.5rem"></Skeleton>
            <Skeleton width="7rem" height="1.5rem"></Skeleton>
            <Skeleton width="7rem" height="1.5rem"></Skeleton>

            <div class="bg-white shadow-md p-5 rounded-lg flex flex-col items-center gap-6 w-full">
                <Skeleton width="50%" height="25rem"></Skeleton>
                <img :src="this.default.img + konten.gambar" alt="">
                <div v-html="konten.konten" class="flex flex-col gap-3"></div>
            </div>
        </div>

        <div v-else class="col-span-12 text-center flex flex-col gap-2">
            <!-- title -->
            <p class="text-lg font-semibold text-red-600">Lowongan Kerja</p>
            <h2 class="text-3xl font-semibold">{{ konten.judul }}</h2>
            <p class="text-lg font-normal">{{ konten.perusahaan.nama_perusahaan }}</p>
            <p class="text-lg font-normal">{{ convertDate(konten.created_at) }}</p> <!-- Format the date here -->

            <!-- Detail -->
            <div class="flex text-gray-500 justify-around lg:justify-left gap-5 flex-wrap">
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
            konten: {}
        }
    },
    methods: {
        title() {
            document.title = "ANTEK HUB | "
        },
        // Fetch data
        getDetail() {
            axios.get('/loker/' + this.$route.params.slug).then(response => {
                this.konten = response.data.data;
                document.title = "ANTEK HUB | " + this.konten.judul
                this.dataIsLoading = false;
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
        this.title()
    }
}
</script>

<style>
</style>
