<template>
    <nav class="shadow-md h-20">
        <div class="flex justify-between px-5 items-center h-full">
            <div class="flex items-center gap-4">
                <!-- Logo -->
                <RouterLink to="/" class="bg-color-none">
                    <img src="../assets/logo-ikatek.png" alt="logo Ikatek" class="w-14">
                </RouterLink>

                <div class="hidden sm:block border-2 h-14 px-3 rounded-full">
                    <form action="" method="POST" class="flex justify-center h-full">
                        <div class="relative flex items-center">
                            <button class="flex">
                                <i class="pi pi-search text-lg"></i>
                            </button>

                            <input type="text" placeholder="Search "
                                class="w-full bg-transparent pl-4 pr-8 focus:outline-none xl:w-[500px]" />
                        </div>
                    </form>
                </div>
            </div>

            <!-- Menus -->
            <div class="flex gap-4 items-center">
                <div class="" v-for="item in menuItems" :key="item.label">
                    <RouterLink :to="item.route" class="flex gap-2 items-center p-2 px-4 border-t-4 border-t-white transition-all font-medium text-lg rounded-sm hover:border-t-4 hover:border-t-[#DC2626] hover:text-[#DC2626]">
                        <i :class="item.icon"></i>
                        <h3 class="">{{item.label}}</h3>
                    </RouterLink>
                </div>
                <!-- <RouterLink to="/googleplay" class="flex items-center border-white border-2 gap-2 transition-all hover:border-[#DC2626] hover:border-2 p-2 px-5 rounded-md">
                    <img src="../assets/google-play-logo-png.webp" alt="google play" class="w-7">
                    <div class="flex flex-col gap-0">
                        <p class="text-xs">Download it from</p>
                        <p class="font-semibold">Google Play</p>
                    </div>
                </RouterLink> -->
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { label: 'Berita', icon: 'pi pi-briefcase', route: '/berita' },
                { label: 'Loker', icon: 'pi pi-envelope', route: '/loker' },
                { label: 'List Event', icon: 'pi pi-calendar-clock', route: '/list-event' },
                // { label: 'Mentoring', icon: 'pi pi-graduation-cap', route: '/coming-soon' },
                // { label: 'Kemitraan', icon: 'pi pi-', route: '/event' },
            ]
        }
    }
}
</script>

<style>

</style>