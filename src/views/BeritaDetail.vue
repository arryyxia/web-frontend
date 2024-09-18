<template>
    <Layout>
        <div class="col-span-12">
            {{$route.params.slug}}
        </div>
    </Layout>
</template>

<script>
export default {
    data() {
        return {
            path: ''
        }
    },
    methods: {
        // ? Fetch data
        getDetail() {
            axios.get('/')
        }
    },
}
</script>

<style>

</style>