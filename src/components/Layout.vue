<template>
    <Navbar></Navbar>

    <!-- Main Content Area -->
    <div class="my-container pt-20">
        <div class="pb-24 grid grid-cols-12 gap-5 m-5">
            <slot></slot>
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