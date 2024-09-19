<template>
    <div class="col-span-12 bg-white shadow-md p-5 rounded-lg flex flex-col items-center gap-6">
        <img :src="this.default.img + konten.gambar" alt="">
        <div v-html="konten.konten" class="flex flex-col gap-3"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>