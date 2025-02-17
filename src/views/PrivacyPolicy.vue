<template>
	<Layout>
		<div class="col-span-12 flex flex-col gap-2">
			<!-- static -->
			<div class="flex justify-between items-center mb-10">
				<p class="text-3xl font-semibold">{{ checked ? 'Privacy Policy' : 'Kebijakan Privasi' }}</p>
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
					<p>Terakhir diperbarui: 04 November 2024</p>
					<p>Kebijakan Privasi ini menjelaskan kebijakan dan prosedur Kami terkait pengumpulan, penggunaan, dan pengungkapan informasi Anda saat Anda menggunakan Layanan, serta memberi tahu Anda tentang hak-hak privasi Anda dan bagaimana hukum melindungi Anda.</p>
					<p>Kami menggunakan data pribadi Anda untuk menyediakan dan meningkatkan Layanan. Dengan menggunakan Layanan, Anda menyetujui pengumpulan dan penggunaan informasi sesuai dengan Kebijakan Privasi ini. Kebijakan Privasi ini dibuat dengan bantuan <a href="https://www.termsfeed.com/privacy-policy-generator/" target="_blank">Privacy Policy Generator</a>.</p>
					<h2 class="text-2xl">Interpretasi dan Definisi</h2>
					<h3 class="text-xl">Interpretasi</h3>
					<p>Kata-kata yang huruf awalnya adalah huruf besar memiliki makna yang ditetapkan dalam kondisi berikut. Definisi berikut ini akan memiliki arti yang sama terlepas dari apakah itu muncul dalam bentuk tunggal atau jamak.</p>
					<h3 class="text-xl">Definisi</h3>
					<p>Untuk tujuan Kebijakan Privasi ini:</p>
					<ul class="list-disc list-inside">
					<li><strong>Akun</strong> berarti akun unik yang dibuat untuk Anda mengakses Layanan Kami atau bagian dari Layanan Kami.</li>
					<li><strong>Aplikasi</strong> mengacu pada ANTEKHUB, program perangkat lunak yang disediakan oleh Perusahaan.</li>
					<li><strong>Perusahaan</strong> (disebut sebagai "Perusahaan", "Kami", atau "Milik Kami" dalam Perjanjian ini) mengacu pada ANTEKHUB.</li>
					<li><strong>Negara</strong> mengacu pada: Indonesia.</li>
					<li><strong>Perangkat</strong> berarti perangkat apa pun yang dapat mengakses Layanan seperti komputer, ponsel, atau tablet digital.</li>
					<li><strong>Data Pribadi</strong> adalah informasi apa pun yang berhubungan dengan individu yang teridentifikasi atau dapat diidentifikasi.</li>
					<li><strong>Layanan</strong> mengacu pada Aplikasi.</li>
					<li><strong>Penyedia Layanan</strong> berarti orang alami atau hukum yang memproses data atas nama Perusahaan. Ini mengacu pada perusahaan atau individu pihak ketiga yang dipekerjakan oleh Perusahaan untuk memfasilitasi Layanan, menyediakan Layanan atas nama Perusahaan, melakukan layanan terkait Layanan, atau membantu Perusahaan dalam menganalisis cara Layanan digunakan.</li>
					<li><strong>Data Penggunaan</strong> mengacu pada data yang dikumpulkan secara otomatis, baik yang dihasilkan oleh penggunaan Layanan atau dari infrastruktur Layanan itu sendiri (misalnya, durasi kunjungan halaman).</li>
					<li><strong>Anda</strong> berarti individu yang mengakses atau menggunakan Layanan, atau perusahaan atau entitas hukum lain atas nama yang mana individu tersebut mengakses atau menggunakan Layanan, jika berlaku.</li>
					</ul>
					<h2 class="text-2xl">Mengumpulkan dan Menggunakan Data Pribadi Anda</h2>
					<h3 class="text-xl">Jenis Data yang Dikumpulkan</h3>
					<h4 class="text-lg">Data Pribadi</h4>
					<p>Saat menggunakan Layanan Kami, Kami mungkin meminta Anda untuk memberikan informasi pribadi tertentu yang dapat digunakan untuk menghubungi atau mengidentifikasi Anda. Informasi yang dapat diidentifikasi secara pribadi mungkin termasuk, tetapi tidak terbatas pada:</p>
					<ul class="list-disc list-inside">
					<li>Alamat email</li>
					<li>Nama depan dan nama belakang</li>
					<li>Nomor telepon</li>
					<li>Alamat, Negara Bagian, Provinsi, Kode Pos/Kota</li>
					<li>Data Penggunaan</li>
					</ul>
					<h4 class="text-lg">Data Penggunaan</h4>
					<p>Data Penggunaan dikumpulkan secara otomatis saat menggunakan Layanan.</p>
					<p>Data Penggunaan mungkin mencakup informasi seperti alamat Protokol Internet (misalnya alamat IP) Perangkat Anda, jenis browser, versi browser, halaman Layanan Kami yang Anda kunjungi, waktu dan tanggal kunjungan Anda, waktu yang dihabiskan di halaman tersebut, pengidentifikasi perangkat unik, dan data diagnostik lainnya.</p>
					<p>Ketika Anda mengakses Layanan melalui perangkat seluler, Kami dapat mengumpulkan informasi tertentu secara otomatis, termasuk tetapi tidak terbatas pada, jenis perangkat seluler yang Anda gunakan, ID unik perangkat seluler Anda, alamat IP perangkat seluler Anda, sistem operasi perangkat seluler Anda, jenis browser Internet seluler yang Anda gunakan, pengidentifikasi perangkat unik, dan data diagnostik lainnya.</p>
					<p>Kami juga dapat mengumpulkan informasi yang dikirim oleh browser Anda setiap kali Anda mengunjungi Layanan kami atau saat Anda mengakses Layanan melalui perangkat seluler.</p>
					<h3 class="text-xl">Penggunaan Data Pribadi Anda</h3>
					<p>Perusahaan dapat menggunakan Data Pribadi untuk tujuan berikut:</p>
					<ul class="list-disc list-inside">
					<li><strong>Untuk menyediakan dan memelihara Layanan kami</strong>, termasuk untuk memantau penggunaan Layanan kami.</li>
					<li><strong>Untuk mengelola Akun Anda:</strong> untuk mengelola pendaftaran Anda sebagai pengguna Layanan. Data Pribadi yang Anda berikan dapat memberi Anda akses ke berbagai fungsi Layanan yang tersedia untuk Anda sebagai pengguna terdaftar.</li>
					<li><strong>Untuk pelaksanaan kontrak:</strong> pengembangan, kepatuhan, dan pelaksanaan kontrak pembelian untuk produk, barang atau layanan yang telah Anda beli atau kontrak lain dengan Kami melalui Layanan.</li>
					<li><strong>Untuk menghubungi Anda:</strong> Untuk menghubungi Anda melalui email, panggilan telepon, SMS, atau bentuk komunikasi elektronik lainnya, seperti pemberitahuan push aplikasi seluler mengenai pembaruan atau komunikasi informasi terkait dengan fungsi, produk, atau layanan yang dikontrak, termasuk pembaruan keamanan, jika diperlukan atau wajar untuk implementasinya.</li>
					<li><strong>Untuk menyediakan Anda</strong> berita, penawaran khusus, dan informasi umum tentang barang, layanan, dan acara lain yang kami tawarkan yang serupa dengan yang telah Anda beli atau tanyakan kecuali Anda telah memilih untuk tidak menerima informasi tersebut.</li>
					<li><strong>Untuk mengelola permintaan Anda:</strong> Untuk menghadiri dan mengelola permintaan Anda kepada Kami.</li>
					<li><strong>Untuk transfer bisnis:</strong> Kami dapat menggunakan informasi Anda untuk mengevaluasi atau melakukan merger, divestasi, restrukturisasi, reorganisasi, pembubaran, atau penjualan atau transfer aset Kami, baik sebagai kelangsungan usaha atau sebagai bagian dari kebangkrutan, likuidasi, atau prosedur serupa, di mana Data Pribadi yang dipegang oleh Kami tentang pengguna Layanan kami adalah salah satu aset yang ditransfer.</li>
					<li><strong>Untuk tujuan lain</strong>: Kami dapat menggunakan informasi Anda untuk tujuan lain, seperti analisis data, mengidentifikasi tren penggunaan, menentukan efektivitas kampanye promosi kami, dan untuk mengevaluasi serta meningkatkan Layanan, produk, layanan, pemasaran, dan pengalaman Anda.</li>
					</ul>
					<p>Kami dapat membagikan informasi pribadi Anda dalam situasi berikut:</p>
					<ul class="list-disc list-inside">
					<li><strong>Dengan Penyedia Layanan:</strong> Kami dapat membagikan informasi pribadi Anda dengan Penyedia Layanan untuk memantau dan menganalisis penggunaan Layanan kami, untuk menghubungi Anda.</li>
					<li><strong>Untuk transfer bisnis:</strong> Kami dapat membagikan atau mentransfer informasi pribadi Anda sehubungan dengan, atau selama negosiasi merger, penjualan aset Perusahaan, pembiayaan, atau akuisisi seluruh atau sebagian bisnis Kami kepada perusahaan lain.</li>
					<li><strong>Dengan mitra bisnis:</strong> Kami dapat membagikan informasi Anda dengan mitra bisnis kami untuk menawarkan Anda produk, layanan, atau promosi tertentu.</li>
					<li><strong>Dengan pengguna lain:</strong> ketika Anda membagikan informasi pribadi atau berinteraksi di area publik dengan pengguna lain, informasi tersebut dapat dilihat oleh semua pengguna dan mungkin didistribusikan secara publik di luar.</li>
					<li><strong>Dengan persetujuan Anda</strong>: Kami dapat mengungkapkan informasi pribadi Anda untuk tujuan lain dengan persetujuan Anda.</li>
					</ul>
					<h3 class="text-xl">Retensi Data Pribadi Anda</h3>
					<p>Perusahaan akan menyimpan Data Pribadi Anda hanya selama diperlukan untuk tujuan yang diuraikan dalam Kebijakan Privasi ini. Kami akan menyimpan dan menggunakan Data Pribadi Anda sejauh yang diperlukan untuk mematuhi kewajiban hukum kami (misalnya, jika kami diwajibkan untuk menyimpan data Anda untuk mematuhi hukum yang berlaku), menyelesaikan perselisihan, dan menegakkan perjanjian hukum dan kebijakan kami.</p>
					<p>Perusahaan juga akan menyimpan Data Penggunaan untuk tujuan analisis internal. Data Penggunaan umumnya disimpan untuk jangka waktu yang lebih pendek, kecuali jika data ini digunakan untuk memperkuat keamanan atau meningkatkan fungsionalitas Layanan Kami, atau Kami diwajibkan secara hukum untuk menyimpan data ini untuk jangka waktu yang lebih lama.</p>
					<h3 class="text-xl">Transfer Data Pribadi Anda</h3>
					<p>Informasi Anda, termasuk Data Pribadi, diproses di kantor operasional Perusahaan dan di tempat lain di mana pihak-pihak yang terlibat dalam pemrosesan berada. Ini berarti informasi Anda mungkin ditransfer ke — dan disimpan di — komputer yang berada di luar negara, negara bagian, atau yurisdiksi pemerintahan lainnya di mana undang-undang perlindungan data mungkin berbeda dari yang ada di yurisdiksi Anda.</p>
					<p>Persetujuan Anda terhadap Kebijakan Privasi ini diikuti dengan pengiriman informasi Anda merupakan persetujuan Anda terhadap transfer tersebut.</p>
					<p>Perusahaan akan mengambil semua langkah yang diperlukan untuk memastikan bahwa data Anda diperlakukan dengan aman dan sesuai dengan Kebijakan Privasi ini dan tidak ada transfer Data Pribadi Anda yang akan dilakukan ke organisasi atau negara kecuali ada kontrol yang memadai termasuk keamanan data Anda dan informasi pribadi lainnya.</p>

					<h2 class="text-2xl">Pengungkapan Data Pribadi Anda</h2>
					<h3 class="text-xl">Transaksi Bisnis</h3>
					<p>Jika Perusahaan terlibat dalam merger, akuisisi, atau penjualan aset, Data Pribadi Anda dapat ditransfer. Kami akan memberikan pemberitahuan sebelum Data Pribadi Anda ditransfer dan tunduk pada Kebijakan Privasi yang berbeda.</p>

					<h3 class="text-xl">Penegakan Hukum</h3>
					<p>Dalam keadaan tertentu, Perusahaan mungkin diwajibkan untuk mengungkapkan Data Pribadi Anda jika diminta untuk melakukannya oleh hukum atau sebagai tanggapan terhadap permintaan yang valid oleh otoritas publik (misalnya pengadilan atau lembaga pemerintah).</p>

					<h3 class="text-xl">Persyaratan Hukum Lainnya</h3>
					<p>Perusahaan dapat mengungkapkan Data Pribadi Anda dengan itikad baik bahwa tindakan tersebut diperlukan untuk:</p>
					<ul class="list-disc list-inside">
					<li>Mematuhi kewajiban hukum</li>
					<li>Melindungi dan membela hak atau properti Perusahaan</li>
					<li>Mencegah atau menyelidiki kemungkinan kesalahan sehubungan dengan Layanan</li>
					<li>Melindungi keselamatan pribadi pengguna Layanan atau publik</li>
					<li>Melindungi dari tanggung jawab hukum</li>
					</ul>

					<h2 class="text-2xl">Keamanan Data Pribadi Anda</h2>
					<p>Keamanan Data Pribadi Anda penting bagi Kami, tetapi ingat bahwa tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman. Sementara Kami berusaha untuk menggunakan cara yang dapat diterima secara komersial untuk melindungi Data Pribadi Anda, Kami tidak dapat menjamin keamanan absolutnya.</p>

					<h2 class="text-2xl">Tautan ke Situs Lain</h2>
					<p>Layanan Kami mungkin berisi tautan ke situs lain yang tidak dioperasikan oleh Kami. Jika Anda mengklik tautan pihak ketiga, Anda akan diarahkan ke situs pihak ketiga tersebut. Kami sangat menyarankan Anda untuk meninjau Kebijakan Privasi setiap situs yang Anda kunjungi.</p>
					<p>Kami tidak memiliki kendali atas dan tidak bertanggung jawab atas konten, kebijakan privasi, atau praktik situs atau layanan pihak ketiga mana pun.</p>

					<h2 class="text-2xl">Perubahan pada Kebijakan Privasi ini</h2>
					<p>Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Kami akan memberi tahu Anda tentang setiap perubahan dengan memposting Kebijakan Privasi yang baru di halaman ini.</p>
					<p>Kami akan memberi tahu Anda melalui email dan/atau pemberitahuan penting di Layanan Kami, sebelum perubahan menjadi efektif dan memperbarui tanggal "Terakhir diperbarui" di bagian atas Kebijakan Privasi ini.</p>
					<p>Anda disarankan untuk meninjau Kebijakan Privasi ini secara berkala untuk setiap perubahan. Perubahan pada Kebijakan Privasi ini berlaku saat diposting di halaman ini.</p>

					<h2 class="text-2xl">Hubungi Kami</h2>
					<p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, Anda dapat menghubungi Kami:</p>
					<ul class="list-disc list-inside">
					<li>Melalui email: support@antekhub.com</li>
					</ul>
				`
			},
			privacyPolicyEN: {
				bahasa: 'EN',
				konten: `
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
					<ul class="list-inside">
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