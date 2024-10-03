<template>
    <Layout>
        <!-- Pencarian -->
        <div class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818] capitalize">Mencari {{ beritaORloker }} : {{ yangDicari }}</h2>
        </div>

        <!-- Berita -->
        <div v-if="beritaORloker == 'berita'" class="col-span-12 grid grid-cols-12">
            <!-- Loading State -->
            <div v-if="isLoading" class="col-span-12 grid grid-cols-12 gap-4">
                <div v-for="item in skeletonItems" :key="item" 
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
    
            <!-- Main Content -->
            <div v-else class="col-span-12 grid grid-cols-12 gap-4">
                <MainCard v-for="item in searchItems" :key="item.judul"
                    :judul          ="item.judul" 
                    :deskripsi      ="item.deskripsi" 
                    :img            ="this.default.img + item.gambar" 
                    :mainLink       ="generateMainLink(item.slug)"
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

        <!-- Loker -->
        <div v-if="beritaORloker == 'loker'" class="col-span-12 grid grid-cols-12">
            <!-- Loading State -->
            <div v-if="isLoading" class="col-span-12 grid grid-cols-12 gap-4">
                <div v-for="item in skeletonItems" :key="item" 
                    class="shadow-md col-span-12 lg:col-span-6 rounded-lg bg-white">
                    <div class="p-5 flex flex-col gap-2">
                        <!-- Header -->
                        <div class="grid grid-cols-12 items-center gap-4 pb-3 border-b">
                            <Skeleton class="col-span-3 md:col-span-2" shape="circle" width="5rem" height="5rem"></Skeleton>
                            <div class="col-span-9 md:col-span-10 flex gap-4 flex-col">
                                <Skeleton width="90%" height="1.5rem"></Skeleton>
                                <Skeleton width="60%" height="1.2rem"></Skeleton>
                            </div>
                        </div>
                        <div class="flex justify-between lg:justify-left gap-5 flex-wrap">
                            <Skeleton width="5rem" height="1.5rem"></Skeleton>
                            <Skeleton width="5rem" height="1.5rem"></Skeleton>
                            <Skeleton width="5rem" height="1.5rem"></Skeleton>
                            <Skeleton width="5rem" height="1.5rem"></Skeleton>
                        </div>
                        <div>
                            <Skeleton width="100%" height="3rem"></Skeleton>
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
    
            <!-- Main Content -->
            <div class="col-span-12 grid grid-cols-12 gap-4" v-else>
                <LokerCard v-for="item in searchItems" :key="item.id_loker"
                    :judul          ="item.judul"
                    :linkLoker      ="generateMainLink(item.slug)"
                    :img            ="this.default.img + item.perusahaan.logo"
                    :perusahaan     ="item.perusahaan.nama_perusahaan"
                    :role           ="item.role"
                    :lokasi         ="item.lokasi"
                    :pengalaman     ="`Tahun ${item.pengalaman_kerja}`"
                    :waktuTampil    ="item.tgl_selesai"
                    :deskripsi      ="item.deskripsi"
                ></LokerCard>
    
                <!-- Pagination -->
                <div class="col-span-12 bg-white shadow-md rounded-md p-3 flex justify-center">
                    <Paginator
                        :first="first"
                        :rows="rows"
                        :totalRecords="totalRecords"
                        :rowsPerPageOptions="[10, 20]"
                        @page="onPageChange"
                    />
                </div>
            </div>
        </div>
    </Layout>
</template>

<script>
export default {
    inject: ['default'],
    data() {
        return {
            beritaORloker: '',
            yangDicari: '',
            isLoading: true,
            searchItems: [],
            skeletonItems: 2,
            // Pagination
            pagination      : [],
            totalRecords    : 0,
            first           : 1,
            rows            : 6,
            pageLinks       : 2,

            pageMeta: {
                title: 'ANTEK HUB | Pencarian',
                meta: [
                    { property: 'og:url',       content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'twitter:url',  content: `${window.location.origin}${this.$route.fullPath}` },
                ]
            }
        }
    },
    methods: {
        async mencari() {
            if (this.$route.params.slug == 'berita') {
                
            }
            await axios.get(`${this.$route.params.slug}?search=${this.$route.query.search}`).then((res) => {
                this.beritaORloker = this.$route.params.slug  
                this.yangDicari = this.$route.query.search
                this.searchItems = (res.data.data.data)
                console.log(this.searchItems)
                this.isLoading = false
            })
        },
        onPageChange(event) {
            this.first  = event.first;
            this.rows   = event.rows;
            this.changePage(event.page);
        },
        generateMainLink(slug) {
        if (this.$route.name === 'pencarian') {
            if (this.beritaORloker === 'berita') {
                return `/berita/${slug}`; 
            } else if (this.beritaORloker === 'loker') {
                return `/loker/${slug}`; 
            }
        }
        
        return `/${this.beritaORloker}/${slug}`;
    },
    },
    watch: {
        '$route.query.search': 'mencari', 
        '$route.params.slug': 'mencari' 
    },
    mounted() {
        this.mencari()
        useHead(this.pageMeta)
    },
}
</script>

