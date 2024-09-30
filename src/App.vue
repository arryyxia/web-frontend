<template>
    <ConfirmPopup class="max-lg:hidden" group="popup" />
    <ConfirmDialog class="lg:hidden" group="dialog" />
    <Toast class="max-lg:hidden"></Toast>
	<div class="text-[#181818] bg-[#F8F9FA]">
		<RouterView></RouterView>
	</div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
            default: {
                title: 'ANTEK HUB',
                // img: '@/assets/'
                // img: 'https://ladybird-diverse-pheasant.ngrok-free.app/storage/'
                img: 'http://103.245.38.78:8000/storage/'
            }
        };
    },
    provide() {
        return {
            default: this.default
        };
    }
}
</script>

<style>

</style>