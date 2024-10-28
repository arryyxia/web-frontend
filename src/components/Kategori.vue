<template>
    <button :to="urlKategori"  @click="$emit('pilihKategori')"
        class="text-black border-2 border-red-600 p-3 whitespace-nowrap rounded-md item-kategori transition-all hover:bg-red-600 hover:text-white"
        :class="{ 'bg-red-600 text-white': isSelected }"
    >
        <p>
            {{ namaKategori }}
        </p>
    </button>
</template>

<script>
export default {
    name: 'Kategori',
    props: ['namaKategori', 'endpointBerita', 'urlKategori', 'isSelected'],
    emits: ['pilihKategori']
}
</script>

<style>
</style>