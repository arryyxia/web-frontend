<template>
    <Layout>
        <div class="col-span-6 xl:col-span-3 flex items-center gap-3 border-none">
            <h2 class="text-2xl font-medium text-[#181818]">Lowongan Kerja</h2>
        </div>
        <div class="col-span-12 grid grid-cols-12 gap-4">
            <LokerCard v-for="item in items" :key="item.judul"
                :linkLoker      ="item.linkLoker"
                :img            ="item.img"
                :judul          ="item.perusahaan"
                :perusahaan     ="item.perusahaan"
                :role           ="item.role"
                :lokasi         ="item.lokasi"
                :pengalaman     ="item.pengalaman"
                :waktuTampil    ="item.waktuTampil"
                :deskripsi      ="item.deskripsi"
            ></LokerCard>
        </div>
    </Layout>
</template>

<script>
export default {
    name: 'Loker',
    data() {
        return {
            items: [
                {
                    linkLoker   : "/dfsoajgioadjf",
                    img         : "https://antekhub.com/assets/logo-ikatek.PNG",
                    judul       : "Lorem ipsum dolor amet",
                    perusahaan  : "Fakultas Teknik Unhas",
                    role        : "Purna Waktu",
                    lokasi      : "Makassar",
                    pengalaman  : "7 tahun",
                    waktuTampil : "30 hari",
                    deskripsi   : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rem adipisci, tenetur odit, assumenda molestias voluptas cumque vitae quia, accusantium eligendi aliquid! Nostrum quis illo harum recusandae aliquid, soluta reprehenderit corrupti quae blanditiis quos provident facere sit repellat minima porro!",
                }
            ]
        }
    },
}
</script>

<style>

</style>