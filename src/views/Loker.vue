<template>
    <Layout>
        <div class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
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
                        <div class="flex items-center gap-4 pb-3 border-b">
                            <Skeleton shape="circle" size="5rem"></Skeleton>
                            <div class="flex flex-col justify-center gap-2">
                                <Skeleton width="25rem" height="1.5rem"></Skeleton>
                                <Skeleton width="20rem" height="1.2rem"></Skeleton>
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
            </div>

            <!-- MAIN -->
            <div v-else class="col-span-12 grid grid-cols-12 gap-4">
                <LokerCard v-for="item in lokerItems.data" :key="item.judul"
                    :judul          ="item.judul"
                    :linkLoker      ="`loker/${item.slug}`"
                    :img            ="this.default.img + item.perusahaan.logo"
                    :perusahaan     ="item.perusahaan.nama_perusahaan"
                    :role           ="item.role"
                    :lokasi         ="item.lokasi"
                    :pengalaman     ="`Tahun ${item.pengalaman_kerja}`"
                    :waktuTampil    ="`Hari ${item.tgl_selesai} Lagi`"
                    :deskripsi      ="item.deskripsi"
                ></LokerCard>

                <div class="col-span-12 bg-white shadow-md rounded-md p-3">
                    <div v-for="item in lokerItems.links" :key="item.label">
                        <RouterLink>{{ item.label }}</RouterLink>
                    </div>
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
            endpointLoker   : 'https://api.antekhub.com/api/public/loker?page=1&limit=4',
            lokerItems      : [],
            pagination      : [],
            lokerSkeletons  : 4,
            lokerIsloading  : true,
        }
    },
    methods: {
        getLoker () {
            axios.get(this.endpointLoker)
                .then(
                    response => { 
                        const lokerData = (response.data.data);
                        this.lokerItems     = lokerData;
                        this.endpointLoker  = lokerData.links + '&limit=4';
                        this.lokerIsloading = false;
                })
        },
    },
    mounted() {
        this.getLoker();
    },
}
</script>

<style>

</style>