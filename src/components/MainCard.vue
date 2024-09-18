<template>
    <div class="shadow-md col-span-12 lg:col-span-6 grid grid-cols-12 rounded-lg bg-white">
        <Image :src="img" :alt="`Gambar dari berita ${judul}`" width="400" preview 
            class="col-span-3 rounded-l-lg z-10" 
        />
        <RouterLink :to="mainLink" class="h-48 col-span-9">
            <div class="p-5 min-w-0 h-full flex flex-col justify-between">
                <div class="flex flex-col gap-3">
                    <h3 class="text-lg font-semibold truncate">{{ judul }}</h3>
                    <p class="line-clamp-2">{{ deskripsi }}</p>
                </div>
                <ButtonActivity :activityLink="activityLink" :activityCount="activityCount" :activityIcon="activityIcon"></ButtonActivity>
            </div>
        </RouterLink>
    </div>
</template>

<script>
export default {
    name: 'MainCard',
    props: {
        judul: {
            type: String,
            required: true,
        },
        deskripsi: {
            type: String,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
        mainLink: {
            type: String,
            required: true,
        },
        activityLink: {
            type: String,
            required: true,
        },
        activityCount: {
            type: [String, Number],
            required: true,
        },
        activityIcon: {
            type: String,
            required: true,
        },
    },
    mounted() {
        console.log(this.isLoading)
    },
}
</script>

<style>
    .p-image img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 6px 0 0 6px ;
    }
    .p-image button:hover {
        border-radius: 6px 0 0 6px ;
    }
</style>