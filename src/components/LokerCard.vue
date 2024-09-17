<template>
    <div class="shadow-md col-span-12 lg:col-span-6 rounded-lg bg-white">
        <RouterLink :to="mainLink" class="h-48">
            <div class="flex flex-col gap-2 p-5">
                <div class="flex items-center gap-4 pb-3 border-b">
                    <img :src="img" :alt="`Logo ${judul}`" class="w-20 h-20">
                    <div class="flex flex-col justify-center gap-2 border-b-gray-500">
                        <h3 class="font-semibold text-xl line-clamp-2">{{ judul }}</h3>
                        <p class="uppercase text-gray-500 font-light">{{ perusahaan }}</p>
                    </div>
                </div>
                <div class="flex text-gray-500 justify-between lg:justify-left gap-5 flex-wrap">
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-briefcase"></i>
                        <span>{{ role }}</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-map-marker"></i>
                        <span>{{ lokasi }}</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-clock"></i>
                        <span>{{ pengalaman }}</span>
                    </div>
                    <div class="flex gap-2 items-center">
                        <i class="pi pi-calendar"></i>
                        <span>{{ waktuTampil }}</span>
                    </div>
                </div>
                <div class="pt-3 line-clamp-2">
                    <p>{{ deskripsi }}</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'LokerCard',
    props: {
        mainLink: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        judul: {
            type: String,
            required: true,
        },
        perusahaan: {
            type: String,
            required: true,
        },
        role: {
            type: String,
            required: true,
        },
        lokasi: {
            type: String,
            required: true,
        },
        pengalaman: {
            type: String,
            required: true,
        },
        waktuTampil: {
            type: String,
            required: true,
        },
        deskripsi: {
            type: String,
            required: true,
        },
    }
}
</script>

<style>

</style>