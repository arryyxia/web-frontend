<template>
    <Layout>
        <div class="col-span-12">
            <Card class="shadow-md">
                <template #title>Testing</template>
            </Card>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'Home',
    data() {
        return {
            images: null,
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        }
    },
    mounted() {
        PhotoService.getImages().then((data) => (this.images = data));
    },
}
</script>

<style>

</style>