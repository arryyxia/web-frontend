<template>
    <nav class="shadow-md h-20 fixed bg-white w-full top-0 z-50">
        <div class="flex justify-between px-5 items-center h-full">
            <div class="flex items-center gap-4">
                <!-- Logo -->
                <RouterLink to="/" class="bg-color-none border-none">
                    <img src="@/assets/logo-ikatek.png" alt="logo Ikatek" class="w-14" />
                </RouterLink>

                <div class="block border-2 h-14 px-3 rounded-full focus-within:ring-1">
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
                                class="bg-transparent pl-4 pr-8 focus:outline-none xl:w-[500px]"
                            />
                        </div>

                        <!-- Suggestions Dropdown -->
                        <ul
                            v-if="showSuggestions"
                            class="absolute top-16 left-30 xl:w-[500px] md:w-[270px] sm:w-[270px] bg-white border shadow-md rounded-md"
                        >
                            <li v-if="loading" class="px-4 py-2">Loading...</li>
                            <li v-else-if="!suggestions.berita && !suggestions.loker" class="px-4 py-2">
                                Tidak ada data di temukan
                            </li>
                            <li
                                v-else
                                class="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            >
								<RouterLink :to="search">
                                	Berita ({{ suggestions.berita }})
								</RouterLink>
                            </li>
                            <li
                                v-if="suggestions.loker"
                                class="px-4 py-2 cursor-pointer hover:bg-gray-200"
                            >
                                Loker ({{ suggestions.loker }})
                            </li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- Menu Items -->
            <div class="lg:flex gap-4 items-center hidden">
                <div v-for="item in menuItems" :key="item.label">
                    <RouterLink
                        :to="item.route"
                        class="flex gap-2 items-center p-2 px-4 border-b-4 border-b-white transition-all font-medium text-lg rounded-sm hover:border-b-4 hover:border-b-[#DC2626] hover:text-[#DC2626]"
                    >
                        <i :class="item.icon"></i>
                        <h3>{{ item.label }}</h3>
                    </RouterLink>
                </div>
            </div>
        </div>
    </nav>
	<nav class="shadow-md h-20 block lg:hidden fixed bg-white w-full bottom-0 z-50">
        <!-- Menus -->
        <div class="flex gap-4 items-center justify-around">
            <div v-for="item in menuItems" :key="item.label">
                <RouterLink :to="item.route" class="mobile w-24 flex flex-col gap-2 items-center pt-3 px-4 border-t-4 border-t-white transition-all font-medium text-lg rounded-sm hover:border-t-4 hover:border-t-[#DC2626] hover:text-[#DC2626]">
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
            ],
            searchQuery: '',
            showSuggestions: false,
            suggestions: { berita: 0, loker: 0 },
            loading: false,
        };
    },
    methods: {
        async fetchSuggestions() {
            this.loading = true;

            try {
                const response = await fetch(`https://api.antekhub.com/api/public/search/${this.searchQuery}`);
                const data = await response.json();

                if (data.success) {
                    this.suggestions = {
                        berita: data.data.berita,
                        loker: data.data.loker,
                    };
                }
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            } finally {
                this.loading = false;
                this.showSuggestions = true; // Always show suggestions when input is clicked
            }
        },
        hideSuggestions() {
            setTimeout(() => {
                this.showSuggestions = false;
            }, 200);
        },
        // goToBerita() {
        //     window.location.href = `https://api.antekhub.com/api/public/berita?search=${this.searchQuery}`;
        // },
        // goToLoker() {
        //     window.location.href = `https://api.antekhub.com/api/public/loker?search=${this.searchQuery}`;
        // },
    },
};
</script>

<style scoped>
/* Add any necessary styling */
</style>
