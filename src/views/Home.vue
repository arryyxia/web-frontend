// TODO Carousel Event

<template>
    <Layout>
        <!-- Carousel Event -->

        <!-- Daftar Berita -->
        <RouterLink to="/berita" class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Berita Terkini</h2>
            <i class="pi pi-arrow-right text-xl text-[#181818]"></i>
        </RouterLink>
        <div class="col-span-12 grid grid-cols-12 gap-4">
            <!-- SKELETON -->
            <div v-if="isLoading" class="col-span-12 grid grid-cols-12 gap-4">
                <div v-for="item in newsSkeleton" :key="item" 
                    class="shadow-md col-span-12 lg:col-span-6 grid grid-cols-12 rounded-lg bg-white">
                    <div class="col-span-3 rounded-l-lg z-10">
                        <Skeleton width="100%" height="12rem"></Skeleton>
                    </div>
                    <div class="col-span-9 h-48">
                        <div class="p-5 min-w-0 h-full flex flex-col justify-between">
                            <div class="flex flex-col gap-3">
                                <div class="flex flex-col gap-2">
                                    <Skeleton width="100%" height="1.5rem"></Skeleton>
                                    <Skeleton width="100%" height="1.5rem"></Skeleton>
                                </div>
                                <Skeleton width="100%" height="5.5rem"></Skeleton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- BODY -->
            <MainCard v-else v-for="item in newsItems" :key="item.judul"
                :judul          ="item.judul" 
                :deskripsi      ="item.deskripsi" 
                :img            ="this.default.img + item.gambar" 
                :mainLink       ="`berita/${item.slug}`" 
                activityLink    ="/playstore"
                :activityCount  ="item.total_like"
                activityIcon    ="pi pi-heart"
            ></MainCard>
        </div>

        <!-- Daftar Loker -->
        <RouterLink to="/loker" class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Daftar Loker</h2>
            <i class="pi pi-arrow-right text-xl text-[#181818]"></i>
        </RouterLink>
        <div class="col-span-12 grid grid-cols-12 gap-4">
            <LokerCard v-for="item in lokerItems" :key="item.judul"
                :linkLoker      ="item.linkLoker"
                :img            ="this.default.iamge + item.img"
                :judul          ="item.perusahaan"
                :perusahaan     ="item.perusahaan"
                :role           ="item.role"
                :lokasi         ="item.lokasi"
                :pengalaman     ="item.pengalaman"
                :waktuTampil    ="item.waktuTampil"
                :deskripsi      ="item.deskripsi"
            ></LokerCard>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'Home',
    inject: ['default'],
    data() {
        return {
            isLoading: true,
            newsItems: [],
            newsSkeleton: 3, // ? defaultnya 4
            lokerItems: [
                {
                    linkLoker    : "/sadfja",
                    img         : "https://antekhub.com/assets/logo-ikatek.PNG",
                    judul       : "Lorem ipsum dolor amet",
                    perusahaan  : "Fakultas Teknik Unhas",
                    role        : "Purna Waktu",
                    lokasi      : "Makassar",
                    pengalaman  : "7 tahun",
                    waktuTampil : "30 hari",
                    deskripsi   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem adipisci, tenetur odit, assumenda molestias voluptas cumque vitae quia, accusantium eligendi aliquid! Nostrum quis illo harum recusandae aliquid, soluta reprehenderit corrupti quae blanditiis quos provident facere sit repellat minima porro!",
                }
            ],
            events  : [],
            news    : [],
            loker   : []
        }
    },
    methods: {
        getNews () {
            axios.get('/public/berita')
                .then(
                    data => {this.newsItems = (data.data.data.data);
                    this.newsSkeleton   = this.newsItems.length;
                    this.isLoading      = false;
            })
        }
    },
    mounted() {
        this.getNews()
    },
}
</script>

<style>

</style>