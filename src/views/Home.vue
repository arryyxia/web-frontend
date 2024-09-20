// TODO Carousel Event
// TODO GANTI ACTIVITY LINK

<template>
    <Layout>

        <!-- Carousel Event -->
        <div class="col-span-12">
            <Galleria :value="eventItems" :showIndicators="true" containerStyle="max-width: 100%" :showThumbnails="false">
                <template #item="slotProps">
                    <img :src="this.default.img + slotProps.item.gambar" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                </template>
                <template #caption="slotProps">
                    <div class="text-xl mb-2 font-bold">{{ slotProps.item.peserta }}</div>
                    <p class="text-white">{{ slotProps.item.alt }}</p>
                </template>
            </Galleria>
        </div>

        <div v-if="eventIsLoading" class="col-span-12">
            <Skeleton width="100%" height="35rem"></Skeleton>
        </div>

        <!-- Daftar Berita -->        
        <!-- Title -->
        <div class="col-span-12">
            <RouterLink to="/berita" class="w-full lg:w-52 flex items-center gap-3 border-none">
                <h2 class="text-2xl font-medium text-[#181818]">Berita Terkini</h2>
                <i class="pi pi-arrow-right text-xl text-[#181818]"></i>
            </RouterLink>
        </div>

        <!-- Berita Kategori -->

        <div class="col-span-12 flex overflow-y-auto wrapper-kategori gap-3">
            <div v-if="kategoriIsLoading" class="col-span-12 flex gap-4">
                <Skeleton v-for="item in kategoriSkeletons" :key="item" width="10rem" height="3rem"></Skeleton>
            </div>
			<Kategori 
				v-for="kategori in kategoriItems" 
				:key="kategori.slug"
				:namaKategori="kategori.kategori"
				:endpointBerita="kategori.slug"
				:urlKategori="`berita?kategori=${kategori.slug}`"
				:isSelected="selectedCategory === kategori.slug"
				@pilihKategori	=	"() => pilihKategori(kategori.slug)"
			></Kategori>
        </div>

        <!-- Content -->

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
            :judul			="item.judul" 
            :deskripsi		="item.deskripsi" 
            :img			="this.default.img + item.gambar" 
            :mainLink		="`berita/${item.slug}`" 
            activityLink	="/loker"
            :activityCount	="item.total_like"
            activityIcon	="pi pi-heart"
        ></MainCard>

        <!-- Daftar Loker -->
        <!-- Title -->
        <div class="col-span-12">
            <RouterLink to="/loker" class="w-full lg:w-52 flex items-center gap-3 border-none">
                <h2 class="text-2xl font-medium text-[#181818]">Daftar Loker</h2>
                <i class="pi pi-arrow-right text-xl text-[#181818]"></i>
            </RouterLink>
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
            <LokerCard v-for="item in lokerItems" :key="item.judul"
                :judul			="item.judul"
                :linkLoker		="`loker/${item.slug}`"
                :img			="this.default.img + item.perusahaan.logo"
                :perusahaan		="item.perusahaan.nama_perusahaan"
                :role			="item.role"
                :lokasi			="item.lokasi"
                :pengalaman		="`Tahun ${item.pengalaman_kerja}`"
                :waktuTampil	="item.tgl_selesai"
                :deskripsi		="item.deskripsi"
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
            // ? Event
            eventItems  : [],
            eventIsLoading: true,
            
            // ? Berita
            beritaItems     : [],
            beritaSkeletons : 4,
            beritaIsLoading : true,
            endpointBerita  : 'berita',
            endDef			: 'berita',

            // ? Kategori
            kategoriItems       : [],
            kategoriSkeletons   : 6,
            kategoriIsLoading   : true,
            isSelected          : null,
            selectedCategory          : null,

            // ? Loker
            lokerItems      : [],
            lokerSkeletons  : 4,
            lokerIsloading  : true,
        }
    },
    methods: {
        title() {
            let targetTitle = document.querySelector('title');
            let changeTo    = targetTitle.text + 'Home'; 
            targetTitle     = changeTo;
        },
        getLoker() {
            axios.get('loker?limit=4').then(response => {
                this.lokerItems = (response.data.data.data);
                this.lokerIsloading = false;
            })
        },
        getBerita() {
            axios.get(`${this.endpointBerita}`).then(response => {
                this.beritaItems = (response.data.data.data);
                this.beritaIsLoading = false;
            })
        },
        getKategori() {
            axios.get('kategori').then(response => {
                this.kategoriItems = (response.data.data);
                this.kategoriIsLoading = false;
            })
        },
        getEvent() {
            axios.get('event').then(response => {
                this.eventItems = (response.data.data.data);
                this.eventIsLoading = false;
            })
        },
		pilihKategori(slug) {
			this.selectedCategory = this.selectedCategory === slug ? null : slug; // Toggle selection
			this.endpointBerita = this.selectedCategory ? 'berita?kategori=' + slug : this.endDef; // Update endpoint based on selection
			this.getBerita(); // Fetch berita based on selected category
		},
    },
    mounted() {
        this.getLoker();
        this.getBerita();
        this.getKategori();
        this.getEvent();
        this.title();
    },
}
</script>
