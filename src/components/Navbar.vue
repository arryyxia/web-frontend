<template>
    <nav class="shadow-md h-20 fixed bg-white w-full top-0 z-50">
        <div class="flex justify-between px-5 items-center h-full">
            <div class="flex items-center gap-4">
                <!-- Logo -->
                <RouterLink to="/" class="bg-color-none border-none">
                    <img src="../assets/logo-ikatek.png" alt="logo Ikatek" class="w-14">
                </RouterLink>

                <div class="hidden sm:block border-2 h-14 px-3 rounded-full">
                    <form action="" method="POST" class="flex justify-center h-full">
                        <div class="relative flex items-center">
                            <button class="flex">
                                <i class="pi pi-search text-lg"></i>
                            </button>

                            <input type="text" placeholder="Search "
                                class="bg-transparent pl-4 pr-8 focus:outline-none xl:w-[500px]" />
                        </div>
                    </form>
                </div>
            </div>

            <!-- Menus -->
            <div class="lg:flex gap-4 items-center hidden">
                <div class="" v-for="item in menuItems" :key="item.label">
                    <RouterLink :to="item.route" class="flex gap-2 items-center p-2 px-4 border-b-4 border-b-white transition-all font-medium text-lg rounded-sm hover:border-b-4 hover:border-b-[#DC2626] hover:text-[#DC2626]">
                        <i :class="item.icon"></i>
                        <h3 class="">{{item.label}}</h3>

                    </RouterLink>
                </div>
            </div>
            <RouterLink to="/berita" class="flex items-center border-2 gap-2 transition-all border-[#333] lg:hidden hover:border-2 p-2 px-5 rounded-md">
                <img src="../assets/google-play-logo-png.webp" alt="google play" class="w-7">
                <div class="flex flex-col gap-0">
                    <p class="text-xs">Download it from</p>
                    <p class="font-semibold">Google Play</p>
                </div>
            </RouterLink>
        </div>
    </nav>

    <nav class="shadow-md h-20 block lg:hidden fixed bg-white w-full bottom-0 z-50">
        <!-- Menus -->
        <div class="flex gap-4 items-center justify-around">
            <div class="" v-for="item in menuItems" :key="item.label">
                <RouterLink :to="item.route" class="mobile w-24 flex flex-col gap-2 items-center pt-3 px-4 border-t-4 border-t-white transition-all font-medium text-lg rounded-sm hover:border-t-4 hover:border-t-[#DC2626] hover:text-[#DC2626]">
                    <i :class="item.icon" class="text-2xl font-medium"></i>
                    <h3 class="font-medium">{{item.label}}</h3>
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
            ]
        }
    }
}
</script>

<style>

</style>