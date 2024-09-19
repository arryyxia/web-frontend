<template>
    <button :to="urlKategori"  @click="$emit('pilihKategori')"
        class="bg-white text-black border-2 border-red-600 shadow-md p-2 rounded-md item-kategori"
    >
        <p>
            {{ namaKategori }}
        </p>
    </button>
</template>

<script>
export default {
    name: 'Kategori',
    props: ['namaKategori', 'slugKategori', 'urlKategori'],
    emits: ['pilihKategori']
}
</script>

<style>
    /* .item-kategori:nth-child(odd) {
        background-color: #A7A7A7;
        color: white;
    }
    .item-kategori:nth-child(even) {
        background-color: blue;
        color: white;
    } */
</style>