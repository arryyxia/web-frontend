<template>
	<Layout>
		<div class="col-span-12 flex flex-col gap-2">
			<!-- static -->
			<div class="flex justify-between items-center mb-10">
				<p class="text-3xl font-semibold">Privacy Policy</p>
				<div class="flex items-center gap-2">
					<p>Ganti Bahasa</p>
					<ToggleButton v-model="checked" class="w-24 h-12" onLabel="EN" offLabel="ID" />
				</div>
			</div>

			<div class="bg-white shadow-md p-5 rounded-lg flex flex-col gap-6" v-html="privacyPolicy.konten" v-if="!checked"></div>
			<div class="bg-white shadow-md p-5 rounded-lg flex flex-col gap-6" v-html="privacyPolicyEN.konten" v-else"></div>
		</div>
	</Layout>
</template>

<script>
export default {
	name:'PrivacyPolicy',
	inject:['default'],
	data() {
		return {
			checked: false,
			privacyPolicy: {
				bahasa: 'ID',
				konten: `
					<strong>Kebijakan Privasi</strong>
					<p>Kebijakan privasi ini berlaku untuk aplikasi ANTEK HUB (selanjutnya disebut sebagai "Aplikasi") untuk
						perangkat seluler yang dibuat oleh ASRIYATI NUR HILAL (selanjutnya disebut sebagai "Penyedia Layanan")
						sebagai layanan gratis. Layanan ini dimaksudkan untuk digunakan "SEBAGAIMANA ADANYA".</p><br>
					<strong>Pengumpulan dan Penggunaan Informasi</strong>
					<p>Aplikasi mengumpulkan informasi ketika Anda mengunduh dan menggunakannya. Informasi ini mungkin termasuk
						informasi seperti:</p>
					<ul>
						<li>Alamat Internet Protocol perangkat Anda (misalnya alamat IP)</li>
						<li>Halaman dari Aplikasi yang Anda kunjungi, waktu dan tanggal kunjungan Anda, waktu yang dihabiskan di
							halaman-halaman tersebut</li>
						<li>Waktu yang dihabiskan di Aplikasi</li>
						<li>Sistem operasi yang Anda gunakan pada perangkat seluler Anda</li>
					</ul>
					<p></p><br>
					<p>Aplikasi ini tidak mengumpulkan informasi lokasi yang tepat dari perangkat seluler Anda.</p>
					<div style="display: none;">
						<p>Aplikasi ini mengumpulkan lokasi perangkat Anda, yang membantu Penyedia Layanan menentukan perkiraan
							lokasi geografis Anda dan memanfaatkannya dengan cara-cara berikut:</p>
						<ul>
							<li>Layanan Geolokasi: Penyedia Layanan memanfaatkan data lokasi untuk menyediakan fitur seperti konten
								yang dipersonalisasi, rekomendasi yang relevan, dan layanan berbasis lokasi.</li>
							<li>Analitik dan Peningkatan: Data lokasi yang diagregasi dan dianonimkan membantu Penyedia Layanan
								menganalisis perilaku pengguna, mengidentifikasi tren, dan meningkatkan kinerja dan fungsi Aplikasi
								secara keseluruhan.</li>
							<li>Layanan Pihak Ketiga: Secara berkala, Penyedia Layanan dapat mentransmisikan data lokasi yang
								dianonimkan ke layanan eksternal. Layanan ini membantu mereka dalam meningkatkan Aplikasi dan
								mengoptimalkan penawaran mereka.</li>
						</ul>
					</div><br>
					<p>Penyedia Layanan dapat menggunakan informasi yang Anda berikan untuk menghubungi Anda dari waktu ke waktu
						guna memberikan informasi penting, pemberitahuan yang diperlukan, dan promosi pemasaran.</p><br>
					<p>Untuk pengalaman yang lebih baik, saat menggunakan Aplikasi, Penyedia Layanan mungkin memerlukan Anda untuk
						memberikan informasi pribadi tertentu, termasuk tetapi tidak terbatas pada email, nama lengkap, nomor
						telepon, agama, golongan darah, tanggal lahir, jenis kelamin, Nomor Induk Mahasiswa, jurusan, tahun masuk.
						Informasi yang diminta oleh Penyedia Layanan akan disimpan oleh mereka dan digunakan sebagaimana dijelaskan
						dalam kebijakan privasi ini.</p><br><strong>Akses Pihak Ketiga</strong>
					<p>Hanya data yang diagregasi dan dianonimkan yang secara berkala dikirimkan ke layanan eksternal untuk membantu
						Penyedia Layanan meningkatkan Aplikasi dan layanan mereka. Penyedia Layanan dapat membagikan informasi Anda
						dengan pihak ketiga dengan cara yang dijelaskan dalam pernyataan privasi ini.</p>
					<div><br>
						<p>Harap diperhatikan bahwa Aplikasi menggunakan layanan pihak ketiga yang memiliki Kebijakan Privasi
							sendiri tentang penanganan data. Di bawah ini adalah tautan ke Kebijakan Privasi penyedia layanan pihak
							ketiga yang digunakan oleh Aplikasi:</p>
						<ul>
							<li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google
									Play Services</a></li>
						</ul>
					</div><br>
					<p>Penyedia Layanan dapat mengungkapkan Informasi yang Diberikan Pengguna dan Informasi yang Dikumpulkan Secara
						Otomatis:</p>
					<ul>
						<li>sebagaimana diwajibkan oleh hukum, seperti untuk mematuhi panggilan pengadilan, atau proses hukum
							serupa;</li>
						<li>saat mereka percaya dengan itikad baik bahwa pengungkapan diperlukan untuk melindungi hak mereka,
							melindungi keselamatan Anda atau keselamatan orang lain, menyelidiki penipuan, atau menanggapi
							permintaan pemerintah;</li>
						<li>dengan penyedia layanan tepercaya mereka yang bekerja atas nama mereka, tidak memiliki penggunaan
							independen atas informasi yang kami ungkapkan kepada mereka, dan telah setuju untuk mematuhi aturan yang
							ditetapkan dalam pernyataan privasi ini.</li>
					</ul>
					<p></p><br><strong>Hak Untuk Berhenti</strong>
					<p>Anda dapat menghentikan semua pengumpulan informasi oleh Aplikasi dengan mudah dengan menghapus instalannya.
						Anda dapat menggunakan proses penghapusan standar yang mungkin tersedia sebagai bagian dari perangkat
						seluler Anda atau melalui marketplace aplikasi seluler atau jaringan.</p><br><strong>Kebijakan Retensi
						Data</strong>
					<p>Penyedia Layanan akan menyimpan data yang Diberikan Pengguna selama Anda menggunakan Aplikasi dan untuk waktu
						yang wajar setelahnya. Jika Anda ingin mereka menghapus Data yang Diberikan Pengguna yang telah Anda
						sediakan melalui Aplikasi, silakan hubungi mereka di ikatekhub@gmail.com dan mereka akan merespons dalam
						waktu yang wajar.</p><br><strong>Anak-anak</strong>
					<p>Penyedia Layanan tidak menggunakan Aplikasi untuk secara sadar meminta data dari atau memasarkan kepada
						anak-anak di bawah usia 13 tahun.</p><div><br>
							<p>Aplikasi ini tidak ditujukan untuk siapa pun yang berusia di bawah 13 tahun. Penyedia Layanan tidak secara sadar
								mengumpulkan informasi pribadi dari anak-anak di bawah usia 13 tahun. Jika Penyedia Layanan mengetahui bahwa
								seorang anak di bawah usia 13 tahun telah memberikan informasi pribadi, Penyedia Layanan akan segera
								menghapusnya dari server mereka. Jika Anda adalah orang tua atau wali dan menyadari bahwa anak Anda telah
								memberikan kami informasi pribadi, silakan hubungi Penyedia Layanan (ikatekhub@gmail.com) agar mereka dapat
								mengambil tindakan yang diperlukan.</p>
						</div><br><strong>Keamanan</strong>
						<p>Penyedia Layanan peduli dengan menjaga kerahasiaan informasi Anda. Penyedia Layanan menyediakan langkah-langkah
							perlindungan fisik, elektronik, dan prosedural untuk melindungi informasi yang diproses dan disimpan oleh Penyedia
							Layanan.</p><br><strong>Perubahan</strong>
						<p>Kebijakan Privasi ini dapat diperbarui dari waktu ke waktu untuk alasan apa pun. Penyedia Layanan akan memberi tahu
							Anda tentang setiap perubahan pada Kebijakan Privasi dengan memperbarui halaman ini dengan Kebijakan Privasi yang
							baru. Anda disarankan untuk secara berkala memeriksa Kebijakan Privasi ini untuk melihat adanya perubahan, karena
							penggunaan yang terus berlanjut dianggap sebagai persetujuan atas semua perubahan.</p><br>
						<p>Kebijakan privasi ini berlaku sejak 2024-09-08</p><br><strong>Persetujuan Anda</strong>
						<p>Dengan menggunakan Aplikasi, Anda memberikan persetujuan atas pemrosesan informasi Anda seperti yang diatur dalam
							Kebijakan Privasi ini sekarang dan sebagaimana telah diubah oleh kami.</p><br><strong>Hubungi Kami</strong>
						<p>Jika Anda memiliki pertanyaan terkait privasi saat menggunakan Aplikasi, atau memiliki pertanyaan tentang praktik
							ini, silakan hubungi Penyedia Layanan melalui email di ikatekhub@gmail.com.</p>
						<hr>
						<p>Halaman kebijakan privasi ini dibuat oleh <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank"
								rel="noopener noreferrer">App Privacy Policy Generator</a></p>
				`
			},
			privacyPolicyEN: {
				bahasa: 'EN',
				konten: `
					<strong>Privacy Policy</strong><p>This privacy policy applies to the ANTEK HUB app (hereby referred to as "Application") for mobile devices that was created by ASRIYATI NUR HILAL (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p><br><strong>Information Collection and Use</strong><p>The Application collects information when you download and use it. This information may include information such as </p><ul><li>Your device's Internet Protocol address (e.g. IP address)</li><li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li><li>The time spent on the Application</li><li>The operating system you use on your mobile device</li></ul><p></p><br><p>The Application does not gather precise information about the location of your mobile device.</p><div style="display: none;"><p>The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:</p><ul><li>Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services.</li><li>Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application.</li><li>Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings.</li></ul></div><br><p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p><br><p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to Email, Full name, Phone number, Religion, Blood type, Date of birth, Gender, Student Identification Number, Major, Year of entry. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p><br><strong>Third Party Access</strong><p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p><div><br><p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p><ul><li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google Play Services</a></li><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----></ul></div><br><p>The Service Provider may disclose User Provided and Automatically Collected Information:</p><ul><li>as required by law, such as to comply with a subpoena, or similar legal process;</li><li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li><li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li></ul><p></p><br><strong>Opt-Out Rights</strong><p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p><br><strong>Data Retention Policy</strong><p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at ikatekhub@gmail.com and they will respond in a reasonable time.</p><br><strong>Children</strong><p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p><div><br><p>The Application does not address anyone under the age of 13.
					The Service Provider does not knowingly collect personally
					identifiable information from children under 13 years of age. In the case
					the Service Provider discover that a child under 13 has provided
					personal information, the Service Provider will immediately
					delete this from their servers. If you are a parent or guardian
					and you are aware that your child has provided us with
					personal information, please contact the Service Provider (ikatekhub@gmail.com) so that
					they will be able to take the necessary actions.</p></div><!----><br><strong>Security</strong><p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p><br><strong>Changes</strong><p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p><br><p>This privacy policy is effective as of 2024-09-08</p><br><strong>Your Consent</strong><p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p><br><strong>Contact Us</strong><p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at ikatekhub@gmail.com.</p><hr><p>This privacy policy page was generated by <a href="https://app-privacy-policy-generator.nisrulz.com/" target="_blank" rel="noopener noreferrer">App Privacy Policy Generator</a></p>
				`
			}
		}
	},
	methods: {
	},
	mounted() {
	},
}
</script>