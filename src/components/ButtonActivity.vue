<template>
    <RouterLink :to="activityLink" class="flex justify-end">
        <div class="flex justify-end gap-2 text-black border-none max-w-32 ">
            <i class="text-2xl text-black" :class="activityIcon"></i>
            <p class="text-black">
                {{activityCount}}
            </p>
        </div>
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