<template>
    <ConfirmPopup class="max-lg:hidden" group="popup" />
    <ConfirmDialog class="lg:hidden" group="dialog" />
    <Toast class="max-lg:hidden"></Toast>
	<div class="h-dvh text-[#181818] bg-[#F8F9FA]">
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
                image: 'http://127.0.0.1:8000/storage/'
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