<template>
    <Layout>
        <!-- Loker -->
        <div class="col-span-12 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Lowongan Kerja</h2>
        </div>

        <!-- Content -->
        <div class="col-span-12 grid grid-cols-12 gap-4">

            <!-- SKELETON -->
            <div v-if="lokerIsloading" class="col-span-12 grid grid-cols-12 gap-4">
                <div v-for="item in lokerSkeletons" :key="item" 
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

            <!-- MAIN -->
            <div v-else class="col-span-12 grid grid-cols-12 gap-4">
                <div class="col-span-12 gap-4 text-center" v-if="lokerIsEmpty">
                    <p> - Tidak ada loker yang berlaku - </p>
                </div>

                <div class="col-span-12 grid grid-cols-12 gap-4" v-else>
                    <LokerCard v-for="item in lokerItems" :key="item.id_loker"
                        :judul          ="item.judul"
                        :linkLoker      ="`loker/${item.slug}`"
                        :img            ="this.default.img + item.perusahaan.logo"
                        :perusahaan     ="item.perusahaan.nama_perusahaan"
                        :role           ="item.role"
                        :lokasi         ="item.lokasi"
                        :pengalaman     ="`Tahun ${item.pengalaman_kerja}`"
                        :waktuTampil    ="item.tgl_selesai"
                        :deskripsi      ="item.deskripsi"
                    ></LokerCard>
                </div>

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
    name: 'Loker',
    inject: ['default'],
    data() {
        return {
            // ? Loker
            lokerItems      : [],
            endpointLoker   : 'https://api.antekhub.com/api/public/loker?limit=6',
            lokerSkeletons  : 6,
            lokerIsloading  : true,
            lokerIsEmpty    : false,

            // Pagination
            pagination      : [],
            totalRecords    : 0,
            first           : 1,
            rows            : 10,
            pageLinks       : 2,
            pageMeta: {
                title: 'ANTEK HUB | Loker',
                meta: [
                    { property: 'og:url',       content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'twitter:url',  content: `${window.location.origin}${this.$route.fullPath}` },
                ]
            }
        }
    },
    methods: {
        // title() {
        //     document.title = 'ANTEK HUB | Loker';
        // },
        async getLoker() {
            const today = new Date();
            await axios.get('loker?limit=6').then(response => {
                this.lokerItems     = response.data.data.data.filter((loker) => {
                    const lokerEndDate = new Date(loker.tgl_selesai);
                    return lokerEndDate >= today;
                });
                if (this.lokerItems.length == 0) {
                    this.lokerIsEmpty = true
                }
                this.totalRecords   = this.lokerItems.total
                this.lokerIsloading = false;
            }).catch(err => {
                console.log(err)
            });
        },
        changePage (page) {
            const newPage = page + 1;
            this.endpointLoker = `https://api.antekhub.com/api/public/loker?page=${newPage}&limit=${this.rows}`;
            this.getLoker();
        },
        onPageChange(event) {
            this.first  = event.first;
            this.rows   = event.rows;
            this.changePage(event.page);
        }
    },
    mounted() {
        this.getLoker();
        // this.title();
        useHead(this.pageMeta)
    },
}
</script>
