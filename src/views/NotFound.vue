<template>
	<Layout>
		<div class="col-span-12 flex flex-col gap-5 justify-center items-center h-[780px] w-full">
			<h1 class="text-3xl">
				Halaman Tidak di temukan
			</h1>
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
		}
	},
	methods: {
		title() {
			document.title = 'ANTEK HUB | 404 Page Not Found';
		},
	},
	mounted() {
		this.title()
	},
}
</script>