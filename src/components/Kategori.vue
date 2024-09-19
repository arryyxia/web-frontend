<template>
    <div class="col-span-12 flex overflow-y-auto wrapper-kategori gap-3">
        <button v-for="item in kategori" :key="item.slug" to="/test" 
            class="bg-white border-2 border-red-600 shadow-md p-2 rounded-md item-kategori"
        >
            <div>
                {{ item.kategori }}
            </div>
        </button>
    </div>
</template>

<script>
export default {
    name: 'Kategori',
    data() {
        return {
            kategori: '',
        }
    },
    methods: {
        getKategori () {
            axios.get('kategori').then(response => {
                this.lokerItems = this.kategori = (response.data.data);
                this.lokerIsloading = false;
            })
        },
    },
    mounted() {
        this.getKategori();
    },
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