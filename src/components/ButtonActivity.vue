<template>
    <RouterLink :to="activityLink" class="flex justify-end gap-2 text-black border-none">
        <i class="text-2xl text-black" :class="activityIcon"></i>
        <p class="text-black">
            {{activityCount}}
        </p>
    </RouterLink>
</template>

<script>
export default {
    props: {
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