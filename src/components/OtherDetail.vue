<template>
	<div class="sticky top-24 bg-white rounded-md p-5 flex flex-col text-left shadow-md">
		<RouterLink :to="link" class="flex items-center justify-between pb-3">
			<p class="text-lg font-semibold">{{ judul }} Lainnya</p>
			<i class="pi pi-angle-right"></i>
		</RouterLink>
		<div v-for="item in otherLinks" :key="item.judul">
			<RouterLink :to="`${link}/${item.slug}`" class="hover:underline">{{ item.judul }}</RouterLink>
			<Divider />
		</div>
	</div>
</template>

<script>
export default {
	name:'OtherDetail',
	props: {
		link: String,
		judul: String,
		otherLinks: Array,
	},
	inject:['default'],
	data() {
		return {
			data: []
		}
	},
	methods: {
	},
	mounted() {
	},
}
</script>