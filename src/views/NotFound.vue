<template>
	<Layout>
		<div class="col-span-12 flex flex-col gap-5 justify-center items-center h-[780px] w-full">
			<h1 class="text-3xl">
				Halaman Tidak di temukan :(
			</h1>
			<p>Tidak ada halaman atau halaman telah dipindahkan ke route lain</p>
			<RouterLink to="/">
				<Button label="Kembali ke Beranda" />
			</RouterLink>
		</div>
	</Layout>
</template>

<script>
export default {
	name:'NotFound',
	inject:['default'],
	data() {
		return {
			pageMeta: {
                title: `404 Page Not Found`,
                meta: [
                    { property: 'og:url',               content: `${window.location.origin}${this.$route.fullPath}` },
                    { property: 'twitter:url',          content: `${window.location.origin}${this.$route.fullPath}` },
                ]
            }
		}
	},
	mounted() {
		useHead(this.pageMeta)
	},
}
</script>