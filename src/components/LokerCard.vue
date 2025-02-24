<template>
    <div class="shadow-md col-span-12 lg:col-span-6 rounded-lg bg-white">
        <RouterLink :to="linkLoker" class="h-48">
            <div class="flex flex-col gap-2 p-5">
                <!-- Header -->
                <div class="flex items-center gap-4 pb-3 border-b">
                    <img :src="img" :alt="`Logo ${judul}`" class="w-20 h-20 rounded-md">
                    <div class="flex flex-col justify-center gap-2 border-b-gray-500">
                        <h3 class="font-semibold text-xl line-clamp-2 text-[#181818]">{{ judul }}</h3>
                        <p class="uppercase text-gray-500 font-light">{{ perusahaan }}</p>
                    </div>
                </div>
                <!-- Detail -->
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
                        <!-- <span>{{ `${hitungHari(waktuTampil)} hari lagi` }}</span> -->
                        <span>{{ hitungHari(waktuTampil) === 0 ? 'Tidak Berlaku' : `${hitungHari(waktuTampil)} hari lagi` }}</span>
                    </div>
                </div>
                <!-- Deskripsi -->
                <div class="pt-3 line-clamp-2">
                    <p class="text-[#181818]">{{ deskripsi }}</p>
                </div>
            </div>
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'LokerCard',
    props: {
        linkLoker: {
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
    },
    methods: {
        hitungHari(tgl_selesai) {
            const nowDate = new Date();
            const endDate = new Date(tgl_selesai);

            const timeDiff = endDate - nowDate;
            const dayDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

            return dayDiff > 0 ? dayDiff : 0; 
        },
    },
}
</script>

<style>
</style>
