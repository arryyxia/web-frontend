<template>
    <Navbar></Navbar>

    <!-- Main Content Area -->
    <div class="my-container h-full pt-20">
        <div class="grid grid-cols-12 gap-5 m-5">
            <div class="pb-24 col-span-12 grid grid-cols-12 gap-5 m-5">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .my-container {
        @apply max-w-7xl mx-auto 
    }
</style>