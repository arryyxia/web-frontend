// TODO Carousel Event
// TODO GANTI ACTIVITY LINK

<template>
    <Layout>

        <!-- Carousel Event -->
        <div v-if="eventIsLoading" class="col-span-12">
            <div class="hidden md:block">
                <Skeleton width="100%" height="43.5rem"></Skeleton>
            </div>
            <div class="md:hidden">
                <Skeleton width="100%" height="13.5rem"></Skeleton>
            </div>
        </div>

        <div v-else class="col-span-12">
            <VueFlux
                :options="options"
                :rscs="rscs"
                :transitions="transitions"
                ref="vueFlux"
            >
                <template #controls="controlsProps">
                    <FluxControls v-bind="controlsProps" />
                </template>

                <template #caption="captionProps">
                    <FluxCaption v-bind="captionProps">
                        <template v-slot="customCaptionProps">
                            <RouterLink :to="`event/${customCaptionProps.caption}`" 
                                class="h-full flex justify-between"
                            >
                                <div class="bg-gray-900/70 md:text-xl mb-2 font-bold md:h-36 h-24 p-5 flex flex-col gap-2 justify-center items-center rounded-md text-white">
                                    <div class="bg-red-600 md:min-w-20 md:min-h-20 min-h-12 min-w-12 rounded-full flex items-center justify-center z-10">
                                        <p class="text-lg md:text-xl">{{ hitungHari(getEventBySlug(customCaptionProps.caption).tgl_event) }}</p>
                                    </div>
                                    <p>Hari Lagi</p>
                                </div>
                                <div class="md:text-xl mb-2 font-bold bg-red-600 md:h-14 h-10 p-5 flex flex-col justify-center items-center rounded-md">
                                    <h3 class="">{{`${getEventBySlug(customCaptionProps.caption).peserta} / ${getEventBySlug(customCaptionProps.caption).kuota} Peserta`}}</h3>
                                </div>
                            </RouterLink>
                        </template>
                    </FluxCaption>
                </template>

                <template #pagination="paginationProps">
                    <FluxPagination v-bind="paginationProps" />
                </template>

                <template #index="indexProps">
                    <FluxIndex v-bind="indexProps" />
                </template>
            </VueFlux>
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
				v-for           ="kategori in kategoriItems" 
				:key            ="kategori.slug"
				:namaKategori   ="kategori.kategori"
				:endpointBerita ="kategori.slug"
				:urlKategori    ="`berita?kategori=${kategori.slug}`"
				:isSelected     ="selectedCategory === kategori.slug"
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
import { VueFlux, FluxCaption, FluxControls, FluxIndex, FluxPagination, Img, Slide, } from 'vue-flux';
import { useHead } from "@vueuse/head";

export default {
    name: 'Home',
    inject: ['default'],
    components: {
        VueFlux,
        FluxCaption,
        FluxControls,
        FluxIndex,
        FluxPagination,
    },
    data() {
        return {
            // Flux slide
            $vueFlux: null,
            options: {
                autoplay: true,
            },
            rscs: [],
            transitions: [Slide],

            // ? Event
            eventItems  : [],
            eventItemsMap: {},
            eventIsLoading: true,
            
            // ? Berita
            beritaItems     : [],
            beritaSkeletons : 4,
            beritaIsLoading : true,
            endpointBerita  : 'berita',

            // ? Kategori
            kategoriItems       : [],
            kategoriSkeletons   : 6,
            kategoriIsLoading   : true,
            isSelected          : null,
            selectedCategory    : null,

            // ? Loker
            lokerItems      : [],
            lokerSkeletons  : 4,
            lokerIsloading  : true,
        }
    },
    setup() {
        useHead({
            title: 'PT. GLOBAL TEKNOLOGI INDOSERV',
            meta: [
                { charset: 'utf-8' },
                { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
                { name: 'author', content: 'PT. GLOBAL TEKNOLOGI INDOSERV' },
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: 'Official Website PT. GLOBAL TEKNOLOGI INDOSERV' },
                { name: 'keywords', content: 'Global Teknologi Indoserv, tambang soroako, PT. Global Teknologi Indoserv, GlobalTekindo' },
                
                // Open Graph meta tags
                { property: 'og:title', content: 'PT. GLOBAL TEKNOLOGI INDOSERV' },
                { property: 'og:type', content: 'article' },
                { property: 'og:url', content: 'https://globaltekindo.com/' },
                { property: 'og:description', content: 'Official Website PT. GLOBAL TEKNOLOGI INDOSERV' },
                { property: 'og:locale', content: 'id_ID' },
                { property: 'og:site_name', content: 'PT. GLOBAL TEKNOLOGI INDOSERV' },
                { property: 'og:image', content: 'https://globaltekindo.com/_frontend/images/hero/hero.png' },
                { property: 'og:image:alt', content: 'Gambar Preview PT. GLOBAL TEKNOLOGI INDOSERV' },
                
                // Twitter meta tags
                { property: 'twitter:image', content: 'https://api.antekhub.com/storage/logo-ikatek.PNG' },
            ],
        });
    },
    methods: {
        // title() {
        //     document.title = 'ANTEK HUB | Beranda';
        // },
        getLoker() {
            axios.get('loker?limit=4').then(response => {
                this.lokerItems = (response.data.data.data);
                this.lokerIsloading = false;
            }).catch(err => {
                console.log(err)
            });
        },
        getBerita() {
            axios.get(`${this.endpointBerita}`).then(response => {
                this.beritaItems = (response.data.data.data);
                this.beritaIsLoading = false;
                // console.log(response);
            }).catch(err => {
                console.log(err)
            });
        },
        getEvent() { 
            axios.get('event').then((response) => {
                const today = new Date();

                this.eventItems = response.data.data.data.filter((event) => {
                    const eventEndDate = new Date(event.tgl_event);
                    return eventEndDate >= today;
                });

                this.eventIsLoading = false;

                this.eventItemsMap = this.eventItems.reduce((acc, event) => {
                    acc[event.slug] = event;
                    return acc;
                }, {});

                this.rscs = this.eventItems.map((item) =>
                    markRaw(new Img(this.default.img + item.gambar, item.slug))
                );
                // console.log(this.eventItems);
            }).catch((err) => {
                console.log(err);
            });
        },
        getEventBySlug(slug) {
            const event = this.eventItems.find((event) => event.slug === slug);
            if (!event) {
                return {};
            }
            return event;
        },
        getKategori() {
            axios.get('kategori').then(response => {
                if (response.data.data) {
                    this.kategoriItems = (response.data.data);
                    this.kategoriIsLoading = false;
                }
            }).catch(err => {
                console.log(err)
            });
        },
		pilihKategori(slug) {
			this.selectedCategory   = this.selectedCategory === slug ? null : slug;
			this.endpointBerita     = this.selectedCategory ? 'berita?kategori=' + slug : 'berita';
			this.getBerita();
		},
        hitungHari(tgl) {
            const nowDate = new Date();
            const endDate = new Date(tgl);

            const timeDiff = endDate - nowDate;
            const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            return dayDiff > 0 ? dayDiff : 0; 
        },
    },
    mounted() {
        this.getLoker();
        this.getBerita();
        this.getKategori();
        this.getEvent();
        // this.title();
    },
}
</script>

<style>
    .p-galleria-caption {
        background: none;
        top: 0;
        height: 100%;
    }
    circle{
        display: none;
    }
    .pause{
        display: none;
    }
    polygon{
        display: none;
    }
    rect {
        display: none;
    }
    .vue-flux .flux-image {
        @apply rounded-md
    }
    .vue-flux .flux-caption {
        background: none;
        @apply h-full absolute
    }
    .flux-controls {
        @apply z-50
    }
</style>
