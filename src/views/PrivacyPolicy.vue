<template>
	<Layout>
		<div class="col-span-12 flex flex-col gap-2">
			<!-- static -->
			<div class="flex justify-between items-center mb-10">
				<p class="text-3xl font-semibold">Privacy Policy</p>
				<div class="flex items-center gap-2">
					<p>Ganti Bahasa / Change Language</p>
					<ToggleButton v-model="checked" class="w-24 h-12" onLabel="EN" offLabel="ID" />
				</div>
			</div>

			<div class="bg-white shadow-md p-5 rounded-lg flex flex-col gap-6" v-html="privacyPolicy.konten" v-if="!checked"></div>
			<div class="bg-white shadow-md p-5 rounded-lg flex flex-col gap-6" v-html="privacyPolicyEN.konten" v-else></div>
		</div>
	</Layout>
</template>

<script>
export default {
	name:'PrivacyPolicy',
	inject:['default'],
	data() {
		return {
			checked: true,
			privacyPolicy: {
				bahasa: 'ID',
				konten: `
					<strong>Kebijakan Privasi</strong>
					<p>Kebijakan privasi ini berlaku untuk aplikasi ANTEK HUB (selanjutnya disebut sebagai "Aplikasi") untuk
						perangkat seluler yang dibuat oleh Fakultas Teknik, Universitas Hasanuddin (selanjutnya disebut sebagai "Penyedia Layanan")
						sebagai layanan gratis. Layanan ini dimaksudkan untuk digunakan "SEBAGAIMANA ADANYA".</p><br>
					<strong>Pengumpulan dan Penggunaan Informasi</strong>
					<p>Aplikasi mengumpulkan informasi ketika Anda mengunduh dan menggunakannya. Informasi ini mungkin termasuk
						informasi seperti:</p>
					<ul class="list-disc list-inside">
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
						<ul class="list-disc list-inside">
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
						<ul class="list-disc list-inside">
							<li><a href="https://www.google.com/policies/privacy/" target="_blank" rel="noopener noreferrer">Google
									Play Services</a></li>
						</ul>
					</div><br>
					<p>Penyedia Layanan dapat mengungkapkan Informasi yang Diberikan Pengguna dan Informasi yang Dikumpulkan Secara
						Otomatis:</p>
					<ul class="list-disc list-inside">
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
				<h1 class="text-3xl">Privacy Policy</h1>
<p>Last updated: November 04, 2024</p>
<p>This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.</p>
<p>We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy. This Privacy Policy has been created with the help of the <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.</p>
<h2 class="text-2xl">Interpretation and Definitions</h2>
<h3 class="text-xl">Interpretation</h3>
<p>The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.</p>
<h3 class="text-xl">Definitions</h3>
<p>For the purposes of this Privacy Policy:</p>
<ul class="list-disc list-inside">
<li>
<strong>Account</strong> means a unique account created for You to access our Service or parts of our Service
</li>
<li>
<strong>Affiliate</strong> means an entity that controls, is controlled by or is under common control with a party, where &quot;control&quot; means ownership of 50% or more of the shares, equity interest or other securities entitled to vote for election of directors or other managing authority
</li>
<li>
<strong>Application</strong> refers to ANTEKHUB, the software program provided by the Company
</li>
<li>
<strong>Company</strong> (referred to as either &quot;the Company&quot;, &quot;We&quot;, &quot;Us&quot; or &quot;Our&quot; in this Agreement) refers to ANTEKHUB
</li>
<li>
<strong>Country</strong> refers to:  Indonesia
</li>
<li>
<strong>Device</strong> means any device that can access the Service such as a computer, a cellphone or a digital tablet
</li>
<li>
<strong>Personal Data</strong> is any information that relates to an identified or identifiable individual
</li>
<li>
<strong>Service</strong> refers to the Application
</li>
<li>
<strong>Service Provider</strong> means any natural or legal person who processes the data on behalf of the Company. It refers to third-party companies or individuals employed by the Company to facilitate the Service, to provide the Service on behalf of the Company, to perform services related to the Service or to assist the Company in analyzing how the Service is used
</li>
<li>
<strong>Usage Data</strong> refers to data collected automatically, either generated by the use of the Service or from the Service infrastructure itself (for example, the duration of a page visit
</li>
<li>
<strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable
</li>
</ul>
<h2 class="text-2xl">Collecting and Using Your Personal Data</h2>
<h3 class="text-xl">Types of Data Collected</h3>
<h4 class="text-lg">Personal Data</h4>
<p>While using Our Service, We may ask You to provide Us with certain personally identifiable information that can be used to contact or identify You. Personally identifiable information may include, but is not limited to:</p>
<ul class="list-disc list-inside">
<li>
Email address
</li>
<li>
First name and last name
</li>
<li>
Phone number
</li>
<li>
Address, State, Province, ZIP/Postal code, City
</li>
<li>
Usage Data
</li>
</ul>
<h4 class="text-lg">Usage Data</h4>
<p>Usage Data is collected automatically when using the Service.</p>
<p>Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, the time spent on those pages, unique device identifiers and other diagnostic data.</p>
<p>When You access the Service by or through a mobile device, We may collect certain information automatically, including, but not limited to, the type of mobile device You use, Your mobile device unique ID, the IP address of Your mobile device, Your mobile operating system, the type of mobile Internet browser You use, unique device identifiers and other diagnostic data.</p>
<p>We may also collect information that Your browser sends whenever You visit our Service or when You access the Service by or through a mobile device.</p>
<h3 class="text-xl">Use of Your Personal Data</h3>
<p>The Company may use Personal Data for the following purposes:</p>
<ul class="list-disc list-inside">
<li>
<strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service
</li>
<li>
<strong>To manage Your Account:</strong> to manage Your registration as a user of the Service. The Personal Data You provide can give You access to different functionalities of the Service that are available to You as a registered user
</li>
<li>
<strong>For the performance of a contract:</strong> the development, compliance and undertaking of the purchase contract for the products, items or services You have purchased or of any other contract with Us through the Service
</li>
<li>
<strong>To contact You:</strong> To contact You by email, telephone calls, SMS, or other equivalent forms of electronic communication, such as a mobile application's push notifications regarding updates or informative communications related to the functionalities, products or contracted services, including the security updates, when necessary or reasonable for their implementation
</li>
<li>
<strong>To provide You</strong> with news, special offers and general information about other goods, services and events which we offer that are similar to those that you have already purchased or enquired about unless You have opted not to receive such information
</li>
<li>
<strong>To manage Your requests:</strong> To attend and manage Your requests to Us
</li>
<li>
<strong>For business transfers:</strong> We may use Your information to evaluate or conduct a merger, divestiture, restructuring, reorganization, dissolution, or other sale or transfer of some or all of Our assets, whether as a going concern or as part of bankruptcy, liquidation, or similar proceeding, in which Personal Data held by Us about our Service users is among the assets transferred
</li>
<li>
<strong>For other purposes</strong>: We may use Your information for other purposes, such as data analysis, identifying usage trends, determining the effectiveness of our promotional campaigns and to evaluate and improve our Service, products, services, marketing and your experience
</li>
</ul>
<p>We may share Your personal information in the following situations:</p>
<ul class="list-disc list-inside">
<li><strong>With Service Providers:</strong> We may share Your personal information with Service Providers to monitor and analyze the use of our Service,  to contact You.</li>
<li><strong>For business transfers:</strong> We may share or transfer Your personal information in connection with, or during negotiations of, any merger, sale of Company assets, financing, or acquisition of all or a portion of Our business to another company.</li>
<li><strong>With Affiliates:</strong> We may share Your information with Our affiliates, in which case we will require those affiliates to honor this Privacy Policy. Affiliates include Our parent company and any other subsidiaries, joint venture partners or other companies that We control or that are under common control with Us.</li>
<li><strong>With business partners:</strong> We may share Your information with Our business partners to offer You certain products, services or promotions.</li>
<li><strong>With other users:</strong> when You share personal information or otherwise interact in the public areas with other users, such information may be viewed by all users and may be publicly distributed outside.</li>
<li><strong>With Your consent</strong>: We may disclose Your personal information for any other purpose with Your consent.</li>
</ul>
<h3 class="text-xl">Retention of Your Personal Data</h3>
<p>The Company will retain Your Personal Data only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply with our legal obligations (for example, if we are required to retain your data to comply with applicable laws), resolve disputes, and enforce our legal agreements and policies.</p>
<p>The Company will also retain Usage Data for internal analysis purposes. Usage Data is generally retained for a shorter period of time, except when this data is used to strengthen the security or to improve the functionality of Our Service, or We are legally obligated to retain this data for longer time periods.</p>
<h3 class="text-xl">Transfer of Your Personal Data</h3>
<p>Your information, including Personal Data, is processed at the Company's operating offices and in any other places where the parties involved in the processing are located. It means that this information may be transferred to — and maintained on — computers located outside of Your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from Your jurisdiction.</p>
<p>Your consent to this Privacy Policy followed by Your submission of such information represents Your agreement to that transfer.</p>
<p>The Company will take all steps reasonably necessary to ensure that Your data is treated securely and in accordance with this Privacy Policy and no transfer of Your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of Your data and other personal information.</p>
<h3 class="text-xl">Delete Your Personal Data</h3>
<p>You have the right to delete or request that We assist in deleting the Personal Data that We have collected about You.</p>
<p>Our Service may give You the ability to delete certain information about You from within the Service.</p>
<p>You may update, amend, or delete Your information at any time by signing in to Your Account, if you have one, and visiting the account settings section that allows you to manage Your personal information. You may also contact Us to request access to, correct, or delete any personal information that You have provided to Us.</p>
<p>Please note, however, that We may need to retain certain information when we have a legal obligation or lawful basis to do so.</p>
<h3 class="text-2xl">Disclosure of Your Personal Data</h3>
<h4 class="text-lg">Business Transactions</h4>
<p>If the Company is involved in a merger, acquisition or asset sale, Your Personal Data may be transferred. We will provide notice before Your Personal Data is transferred and becomes subject to a different Privacy Policy.</p>
<h4 class="text-lg">Law enforcement</h4>
<p>Under certain circumstances, the Company may be required to disclose Your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g. a court or a government agency).</p>
<h4 class="text-lg">Other legal requirements</h4>
<p>The Company may disclose Your Personal Data in the good faith belief that such action is necessary to:</p>
<ul class="list-disc list-inside">
<li>Comply with a legal obligation</li>
<li>Protect and defend the rights or property of the Company</li>
<li>Prevent or investigate possible wrongdoing in connection with the Service</li>
<li>Protect the personal safety of Users of the Service or the public</li>
<li>Protect against legal liability</li>
</ul>
<h3 class="text-xl">Security of Your Personal Data</h3>
<p>The security of Your Personal Data is important to Us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.</p>
<h2 class="text-2xl">Children's Privacy</h2>
<p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If You are a parent or guardian and You are aware that Your child has provided Us with Personal Data, please contact Us. If We become aware that We have collected Personal Data from anyone under the age of 13 without verification of parental consent, We take steps to remove that information from Our servers.</p>
<p>If We need to rely on consent as a legal basis for processing Your information and Your country requires consent from a parent, We may require Your parent's consent before We collect and use that information.</p>
<h2 class="text-2xl">Links to Other Websites</h2>
<p>Our Service may contain links to other websites that are not operated by Us. If You click on a third party link, You will be directed to that third party's site. We strongly advise You to review the Privacy Policy of every site You visit.</p>
<p>We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.</p>
<h2 class="text-2xl">Changes to this Privacy Policy</h2>
<p>We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the new Privacy Policy on this page.</p>
<p>We will let You know via email and/or a prominent notice on Our Service, prior to the change becoming effective and update the &quot;Last updated&quot; date at the top of this Privacy Policy.</p>
<p>You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
<h2 class="text-2xl">Contact Us</h2>
<p>If you have any questions about this Privacy Policy, You can contact us:</p>
<ul class="list-disc list-inside">
<li>By email: ikatekhub@gmail.com</li>
</ul>
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