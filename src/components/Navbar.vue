<template>
    <nav class="shadow-md h-20 fixed bg-white w-full top-0 z-50">
        <div class="flex justify-between px-5 items-center h-full">
            <div class="flex items-center gap-4 justify-between w-full lg:justify-normal lg:w-fit">
                <!-- Logo -->
                <RouterLink to="/" class="bg-color-none border-none">
                    <img src="https://api.antekhub.com/storage/logo-ikatek.PNG" alt="logo Ikatek" class="max-w-14" />
                </RouterLink>

                <div class="block border-2 h-14 px-3 rounded-full focus-within:ring-1 w-[270px] lg:w-full">
                    <div class="flex flex-col justify-center h-full">
                        <div class="relative flex items-center">
                            <i class="pi pi-search text-lg"></i>
                            <input
                                type="text"
                                placeholder="Search"
                                v-model="searchQuery"
                                @input="fetchSuggestions"
                                @focus="showSuggestions = true"
                                @blur="hideSuggestions"
                                class="bg-transparent pl-4 pr-8 focus:outline-none w-[270px] lg:w-full"
                            />
                        </div>

                        <!-- Search Dropdown -->
                        <div v-if="showSuggestions" class="absolute top-[70px] xl:w-[360px] w-[250px] bg-white border shadow-lg rounded-md z-50">
                            <!-- Loading State -->
                            <div v-if="loading" class="px-4 py-3 text-center text-gray-500">
                                <span class="animate-pulse">Loading...</span>
                            </div>

                            <!-- No Data State -->
                            <div v-else-if="!suggestions.berita && !suggestions.loker" class="px-4 py-3 text-center text-gray-500">
                                Tidak ada data ditemukan
                            </div>

                            <!-- Suggestions -->
                            <div v-else class="divide-y divide-gray-200">
                                <!-- Berita Section -->
                                <RouterLink
                                    :to="beritaRoute"
                                    v-if="suggestions.berita"
                                    class="block px-4 py-3 hover:bg-blue-50 transition duration-200 ease-in-out search"
                                >
                                    <div class="flex justify-between items-center">
                                        <span class="text-gray-800 font-medium">Berita</span>
                                        <span class="text-gray-500 text-sm">({{ suggestions.berita }})</span>
                                    </div>
                                </RouterLink>

                                <!-- Loker Section -->
                                <RouterLink
                                    :to="lokerRoute"
                                    v-if="suggestions.loker"
                                    class="block px-4 py-3 hover:bg-blue-50 transition duration-200 ease-in-out search"
                                >
                                    <div class="flex justify-between items-center">
                                        <span class="text-gray-800 font-medium">Loker</span>
                                        <span class="text-gray-500 text-sm">({{ suggestions.loker }})</span>
                                    </div>
                                </RouterLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <!-- Menu Items -->
            <div class="lg:flex gap-4 items-center hidden">
                <div v-for="item in menuItems" :key="item.label">
                    <RouterLink
                        :to="item.route"
                        exactActiveClass="color-primary rounded-sm border-b-4 border-b-[#DC2626] text-[#DC2626]"
                        class="flex gap-2 items-center p-2 px-4 border-b-4 border-b-white transition-all font-medium text-lg rounded-sm hover:border-b-4 hover:border-b-[#DC2626] hover:text-[#DC2626]"
                    >
                        <i :class="item.icon"></i>
                        <h3>{{ item.label }}</h3>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>

    <!-- Mobile -->
    <nav class="shadow-md h-20 block lg:hidden fixed bg-white w-full bottom-0 z-50">
        <!-- Menus -->
        <div class="flex items-center justify-around">
            <div v-for="item in menuItems" :key="item.label">
                <RouterLink :to="item.route" class="mobile w-24 flex flex-col gap-2 items-center pt-3 border-t-4 border-t-white transition-all font-medium text-lg rounded-sm hover:border-t-4 hover:border-t-[#DC2626] hover:text-[#DC2626]">
                    <i :class="item.icon" class="text-2xl font-medium"></i>
                    <h3 class="font-medium">{{ item.label }}</h3>
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { label: 'Beranda', icon: 'pi pi-home', route: '/' },
                { label: 'Berita', icon: 'pi pi-briefcase', route: '/berita' },
                { label: 'Loker', icon: 'pi pi-envelope', route: '/loker' },
                { label: 'Event', icon: 'pi pi-calendar-clock', route: '/event' },
                // { label: 'Privacy Policy', icon: 'pi pi-shield', route: '/privacy-policy' },
            ],
            searchQuery: '',
            showSuggestions: false,
            suggestions: { berita: 0, loker: 0 },
            loading: false,
        };
    },
    computed: {
        beritaRoute() {
            return this.searchQuery ? `/pencarian/berita?search=${this.searchQuery}` : '/berita';
        },
        lokerRoute() {
            return this.searchQuery ? `/pencarian/loker?search=${this.searchQuery}` : '/loker';
        },
    },
    // methods: {
    //     async fetchSuggestions() {
    //         this.loading = true;

    //         try {
    //             const response = await fetch(`https://api.antekhub.com/api/public/search/${this.searchQuery}`);
    //             const data = await response.json();

    //             if (data.success) {
    //                 this.suggestions = {
    //                     berita: data.data.berita,
    //                     loker: data.data.loker,
    //                 };
    //             }
    //         } catch (error) {
    //             console.error('Error fetching suggestions:', error);
    //         } finally {
    //             this.loading = false;
    //             this.showSuggestions = true;
    //         }
    //     },
    //     hideSuggestions() {
    //         setTimeout(() => {
    //             this.showSuggestions = false;
    //         }, 200);
    //     },
    // },
    methods: {
        async fetchSuggestions() {
            if (this.searchQuery.length > 2) {
                this.loading = true;

                await axios.get(`https://api.antekhub.com/api/public/search/${this.searchQuery}`).then((res) => {
                    this.loading = false;
                    this.suggestions = {
                        berita: res.data.data.berita,
                        loker: res.data.data.loker,
                    };
                }).catch((err) => {
                    console.log(err);
                });
            } else {
                this.suggestions = { berita: 0, loker: 0 };
            }
        },
        hideSuggestions() {
            setTimeout(() => {
                this.showSuggestions = false;
            }, 200);
        },
    }
}
</script>

<style scoped>
    .search.router-link-active {
        @apply text-gray-800 rounded-sm border-none;
    }
</style>