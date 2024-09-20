<template>
    <Layout>
        <!-- Daftar Event -->
        <div to="/event" class="col-span-12 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Daftar Event</h2>
        </div>

        <!-- Content -->
        <div class="col-span-12 grid grid-cols-12 gap-4">
            <!-- SKELETON -->
            <div v-if="eventIsLoading" class="col-span-12 grid grid-cols-12 gap-4">
                <div v-for="item in eventSkeletons" :key="item" 
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
            <div class="col-span-12 grid grid-cols-12 gap-4">
                <MainCard v-for="item in eventItems" :key="item.judul" 
                    :judul          ="item.judul" 
                    :deskripsi      ="item.deskripsi" 
                    :img            ="this.default.img + item.gambar" 
                    :mainLink       ="`event/${item.slug}`" 
                    activityLink   ="/"
                    :activityCount  ="item.peserta"
                    
                    activityIcon   ="pi pi-users"
                >
                </MainCard>
            </div>
        </div>
        
    </Layout>
</template>

<script>
export default {
    name: 'ListEvent',
    inject: ['default'],
    data() {
        return {
            eventItems      : [],
            eventSkeletons  : 6,
            eventIsLoading  : true
        }
    },
    methods: {
        getEvent() {
            axios.get('event').then(response => {
                this.eventItems     = (response.data.data.data);
                this.eventIsLoading = false;
            })
        }
    },
    mounted() {
        this.getEvent()
    },
}
</script>

<style>

</style>