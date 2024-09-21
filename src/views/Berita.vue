<template>
    <Layout>
        <!-- Daftar Berita -->
        <div class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Daftar Berita</h2>
        </div>

        <!-- Content -->
        <div class="col-span-12 grid grid-cols-12">

            <!-- SKELETON -->
            <div v-if="beritaIsLoading" class="col-span-12 grid grid-cols-12 gap-4">
                <div v-for="item in beritaSkeletons" :key="item" 
                    class="shadow-md col-span-12 lg:col-span-6 grid grid-cols-12 rounded-lg bg-white">
                    <div class="col-span-3 rounded-l-lg z-10">
                        <Skeleton width="100%" height="12rem"></Skeleton>
                    </div>
                    <div class="col-span-9 h-48">
                        <div class="p-5 min-w-0 h-full flex flex-col justify-between">
                            <div class="flex flex-col gap-3">
                                <div class="flex flex-col gap-2">
                                    <Skeleton width="100%" height="3rem"></Skeleton>
                                </div>
                                <Skeleton width="100%" height="5.5rem"></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-span-12 bg-white shadow-md rounded-md p-3 flex justify-center gap-4">
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                    <Skeleton width="2rem" height="2rem"></Skeleton>
                    <Skeleton width="2rem" height="2rem"></Skeleton>
                    <Skeleton width="2rem" height="2rem"></Skeleton>
                    <Skeleton width="4rem" height="2rem"></Skeleton>
                </div>
            </div>

            <!-- MAIN -->
            <div v-else class="col-span-12 grid grid-cols-12 gap-4">
                <MainCard v-for="item in beritaItems" :key="item.judul"
                    :judul          ="item.judul" 
                    :deskripsi      ="item.deskripsi" 
                    :img            ="this.default.img + item.gambar" 
                    :mainLink       ="`berita/${item.slug}`" 
                    activityLink    ="/"
                    :activityCount  ="item.total_like"
                    activityIcon    ="pi pi-heart"
                ></MainCard>

                <!-- Pagination -->
                <div class="col-span-12 bg-white shadow-md rounded-md p-3 flex justify-center">
                    <Paginator
                        :first="first"
                        :rows="rows"
                        :totalRecords="totalRecords"
                        :rowsPerPageOptions="[6, 10, 20]"
                        @page="onPageChange"
                    />
                </div>
            </div>

        </div>
    </Layout>
</template>

<script>
export default {
    name: 'Berita',
    inject: ['default'],
    data() {
        return {
            // ? News
            beritaItems     : [],
            endpointBerita  : 'https://api.antekhub.com/api/public/berita?limit=6',
            beritaSkeletons : 6,
            beritaIsLoading : true,

            // Pagination
            pagination      : [],
            totalRecords    : 0,
            first           : 1,
            rows            : 6,
            pageLinks       : 2,
        }
    },
    methods: {
        getBerita () {
            axios.get(this.endpointBerita).then(response => {
                this.beritaItems        = (response.data.data.data);
                this.totalRecords       = response.data.data.total
                this.beritaIsLoading    = false;
            }).catch(err => {
                console.log(err)
            });
        },
        changePage (page) {
            const newPage = page + 1;
            this.endpointBerita = `https://api.antekhub.com/api/public/berita?page=${newPage}&limit=${this.rows}`;
            this.getBerita();
        },
        onPageChange(event) {
            this.first  = event.first;
            this.rows   = event.rows;
            this.changePage(event.page);
        }
    },
    mounted() {
        this.getBerita()
    },
}
</script>

<style>

</style>