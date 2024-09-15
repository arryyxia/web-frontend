<template>
    <nav class="shadow-md w-full h-20">
        <div class="my-container flex justify-between px-5 items-center h-full">
            <!-- Logo -->
            <RouterLink to="/" class="bg-color-none">
                <img src="../assets/logo-ikatek.png" alt="logo Ikatek" class="w-16">
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

            <!-- Menus -->
            <div class="">
                <div class="" v-for="item in menuItems" :key="item.label">
                    <RouterLink :to="item.route">{{ item.label }}</RouterLink>
                </div>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            menuItems: [
                { label: 'Login', route: '/' },
                { label: 'Register', route: '/' }
            ]
        }
    }
}
</script>

<style>

</style>