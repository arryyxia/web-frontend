<template>
    <Layout>
        <!-- Daftar Berita -->
        <div class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Daftar Berita</h2>
        </div>

        <!-- Content -->
        <div class="col-span-12 grid grid-cols-12 gap-4">

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
            </div>

            <!-- MAIN -->
            <MainCard v-else v-for="item in beritaItems" :key="item.judul"
                :judul          ="item.judul" 
                :deskripsi      ="item.deskripsi" 
                :img            ="this.default.img + item.gambar" 
                :mainLink       ="`berita/${item.slug}`" 
                activityLink    ="/playstore"
                :activityCount  ="item.total_like"
                activityIcon    ="pi pi-heart"
            ></MainCard>
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
            beritaSkeletons : 4,
            beritaIsLoading : true,
        }
    },
    methods: {
        getBerita () {
            axios.get('berita')
                .then(
                    response => {this.beritaItems = (response.data.data.data);
                    this.beritaIsLoading    = false;
                })
        }
    },
    mounted() {
        this.getBerita()
    },
}
</script>

<style>

</style>