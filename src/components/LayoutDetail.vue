<template>
    <Navbar></Navbar>

    <!-- Main Content Area -->
    <div class="detail-container pt-20">
        <div class="pb-24 grid grid-cols-12 gap-5 m-5">
            <slot></slot>

            <Footer></Footer>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .detail-container {
        @apply max-w-4xl mx-auto 
    }
</style>