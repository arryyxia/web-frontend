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

        <div v-else class="col-span-12 text-center">
            <!-- static -->
            <p class="text-lg font-semibold text-red-600">Event</p>
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
    name: 'eventDetail',
    inject: ['default'],
    data() {
        return {
            dataIsLoading: true,
            konten: []
        }
    },
    methods: {
        // ? Fetch data
        getDetail() {
            axios.get('/event/' + this.$route.params.slug).then(response => {
                this.konten = (response.data.data)    
                this.dataIsLoading = false;
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
    },
}
</script>

<style>

</style>