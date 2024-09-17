<template>
    <Layout>
        <div class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Lowongan Kerja</h2>
        </div>
        <div class="col-span-12 grid grid-cols-12 gap-4">
            <LokerCard></LokerCard>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'Loker',
}
</script>

<style>

</style>