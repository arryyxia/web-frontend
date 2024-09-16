// TODO Carousel Event

<template>
    <Layout>
        <!-- Carousel Event -->

        <!-- Daftar Berita -->
        <RouterLink to="/berita" class="col-span-12 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Daftar Berita</h2>
            <i class="pi pi-arrow-right text-xl text-[#181818]"></i>
        </RouterLink>
        <div class="col-span-12 grid grid-cols-12 gap-4">
            <MainCard v-for="item in newsItems" :key="item.judul" 
                :judul          ="item.judul" 
                :deskripsi      ="item.deskripsi" 
                :img            ="item.img" 
                :mainLink       ="item.mainLink" 
                :activityLink   ="item.activityLink"
                :activityCount  ="item.activityCount"
                :activityIcon   ="item.activityIcon"
            >
            </MainCard>
        </div>

        <!-- Daftar Loker -->
        <RouterLink to="/loker" class="col-span-12 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Daftar Loker</h2>
            <i class="pi pi-arrow-right text-xl text-[#181818]"></i>
        </RouterLink>
        <div class="col-span-12 grid grid-cols-12 gap-4">
            <MainCard v-for="item in lokerItems" :key="item.judul" 
                :judul          ="item.judul" 
                :deskripsi      ="item.deskripsi" 
                :img            ="item.img" 
                :mainLink       ="item.mainLink" 
                :activityLink   ="item.activityLink"
                :activityCount  ="item.activityCount"
                :activityIcon   ="item.activityIcon"
            >
            </MainCard>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            newsItems : [
                {
                    judul          : "Unhas Sheessshhh ldasjfl lksdaj fadsfj asdfs",
                    deskripsi      : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi provident illo consectetur quidem velit quisquam vitae, voluptas exercitationem? Consequatur autem iure cum, delectus in ex soluta impedit! Quam, vel consectetur.",
                    img            : "https://img.freepik.com/free-vector/line-background-wave-gradient-template-design_483537-5079.jpg?w=1480&t=st=1726493302~exp=1726493902~hmac=94c3cf406a115e740b099714508873d60778fa319355370eaefb391ca827be26",
                    mainLink       : "/loker",
                    activityLink   : "/list-event",
                    activityCount  : "28",
                    activityIcon   : "pi pi-heart",
                },
                {
                    judul          : "Unhas Sheessshhh ldasjfl lksdaj fadsfj asdfs",
                    deskripsi      : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi provident illo consectetur quidem velit quisquam vitae, voluptas exercitationem? Consequatur autem iure cum, delectus in ex soluta impedit! Quam, vel consectetur.",
                    img            : "https://img.freepik.com/free-vector/line-background-wave-gradient-template-design_483537-5079.jpg?w=1480&t=st=1726493302~exp=1726493902~hmac=94c3cf406a115e740b099714508873d60778fa319355370eaefb391ca827be26",
                    mainLink       : "/loker",
                    activityLink   : "/list-event",
                    activityCount  : "28",
                    activityIcon   : "pi pi-heart",
                },
            ],
            lokerItems : [
                {
                    judul          : "Unhas Sheessshhh ldasjfl lksdaj fadsfj asdfs",
                    deskripsi      : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi provident illo consectetur quidem velit quisquam vitae, voluptas exercitationem? Consequatur autem iure cum, delectus in ex soluta impedit! Quam, vel consectetur.",
                    img            : "https://img.freepik.com/free-vector/line-background-wave-gradient-template-design_483537-5079.jpg?w=1480&t=st=1726493302~exp=1726493902~hmac=94c3cf406a115e740b099714508873d60778fa319355370eaefb391ca827be26",
                    mainLink       : "/loker",
                    activityLink   : "/list-event",
                    activityCount  : "28",
                    activityIcon   : "pi pi-heart",
                },
                {
                    judul          : "Unhas Sheessshhh ldasjfl lksdaj fadsfj asdfs",
                    deskripsi      : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi provident illo consectetur quidem velit quisquam vitae, voluptas exercitationem? Consequatur autem iure cum, delectus in ex soluta impedit! Quam, vel consectetur.",
                    img            : "https://img.freepik.com/free-vector/line-background-wave-gradient-template-design_483537-5079.jpg?w=1480&t=st=1726493302~exp=1726493902~hmac=94c3cf406a115e740b099714508873d60778fa319355370eaefb391ca827be26",
                    mainLink       : "/loker",
                    activityLink   : "/list-event",
                    activityCount  : "28",
                    activityIcon   : "pi pi-heart",
                },
            ],
            events  : [],
            news    : [],
            loker   : []
        }
    },
}
</script>

<style>

</style>