<template>
    <Button @click="visible = true" class="flex justify-end" unstyled>
        <div class="flex justify-end gap-2 text-black border-none max-w-32 ">
            <i class="text-2xl text-black" :class="activityIcon"></i>
            <p class="text-black">
                {{activityCount}}
            </p>
        </div>
    </Button>
    <Dialog v-model:visible="visible" modal header="Install Di Google Play Store" :style="{ width: '50vw' }" :breakpoints="{ '1199px': '75vw', '575px': '90vw' }">
        <p class="m-0">
            Untuk Melakukan full aktifitas install full aplikasi di google playstore
        </p>
    </Dialog>
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
    },
    data() {
        return {
            visible: false
        }
    },
}
</script>

<style>

</style>