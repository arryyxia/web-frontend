<template>
    <div class="shadow-md col-span-12 lg:col-span-6 rounded-lg bg-white">
        <RouterLink :to="mainLink" class="flex h-48">
            <Image :src="img" :alt="`Gambar dari berita ${judul}`" width="400" preview class="rounded-l-lg max-w-48 z-10" />
            <div class="p-5 min-w-0 grid grid-cols-1 content-between">
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
    }
}
</script>

<style>

</style>