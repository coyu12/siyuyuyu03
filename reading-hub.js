
// Sample data for different content categories
const contentData = {
    stories: [
        {
            id: 1,
            title: "Petualangan di Hutan Ajaib",
            excerpt: "Seorang anak bernama Maya menemukan pintu rahasia yang membawanya ke dunia penuh keajaiban dan makhluk fantastis...",
            category: "petualangan",
            readTime: "15 menit",
            author: "Sari Dewi",
            content: `
                <h1>Petualangan di Hutan Ajaib</h1>
                <p><em>Oleh: Sari Dewi</em></p>
                
                <h2>Bab 1: Pintu Rahasia</h2>
                <p>Maya selalu penasaran dengan pohon tua di belakang rumahnya. Pohon itu tampak berbeda dari yang lain - batangnya berkilau keemasan saat terkena sinar matahari, dan daunnya berbisik-bisik meski tak ada angin.</p>
                
                <p>Suatu pagi, saat Maya sedang bermain di halaman belakang, dia melihat sesuatu yang aneh. Ada cahaya biru lembut yang memancar dari balik akar pohon tua itu. Dengan hati-hati, Maya mendekati pohon tersebut.</p>
                
                <p>"Apa ini?" gumam Maya sambil menyentuh akar yang bercahaya. Tiba-tiba, akar-akar itu bergerak dan membentuk sebuah pintu kecil yang pas untuk tubuh Maya.</p>
                
                <h2>Bab 2: Dunia Baru</h2>
                <p>Tanpa ragu, Maya melangkah masuk melalui pintu ajaib itu. Yang dilihatnya benar-benar menakjubkan - hutan dengan pepohonan setinggi gedung pencakar langit, bunga-bunga yang mengeluarkan musik merdu, dan kupu-kupu sebesar burung yang terbang berkeliling.</p>
                
                <p>"Selamat datang di Hutan Ajaib, Maya," kata sebuah suara lembut. Maya menoleh dan melihat seekor kelinci putih dengan mata biru berkilau.</p>
                
                <p>"Kamu bisa bicara?" tanya Maya heran.</p>
                
                <p>"Tentu saja! Di sini, semua makhluk bisa berbicara. Namaku Putih, dan aku akan menjadi pemandumu," jawab kelinci itu sambil tersenyum.</p>
                
                <h2>Bab 3: Misi Penyelamatan</h2>
                <p>Putih menjelaskan bahwa Hutan Ajaib sedang dalam bahaya. Ratu Kegelapan telah mencuri Kristal Cahaya yang menjaga keseimbangan hutan. Tanpa kristal itu, hutan akan kehilangan keajaibannya selamanya.</p>
                
                <p>"Hanya anak dengan hati yang murni yang bisa mengambil kembali kristal itu," kata Putih. "Maya, apakah kamu mau membantu kami?"</p>
                
                <p>Maya tidak perlu berpikir lama. "Tentu! Aku akan membantu kalian!"</p>
                
                <p>Dan dimulailah petualangan Maya yang penuh keajaiban, persahabatan, dan keberanian...</p>
                
                <p><em>Bersambung...</em></p>
            `
        },
        {
            id: 2,
            title: "Cinta di Kafe Sudut Jalan",
            excerpt: "Pertemuan tak terduga antara Rina dan Arya di sebuah kafe kecil mengubah hidup mereka selamanya...",
            category: "romantis",
            readTime: "12 menit",
            author: "Maya Indah",
            content: `
                <h1>Cinta di Kafe Sudut Jalan</h1>
                <p><em>Oleh: Maya Indah</em></p>
                
                <h2>Pertemuan Pertama</h2>
                <p>Hujan deras mengguyur kota Jakarta sore itu. Rina berlari mencari tempat berteduh dan akhirnya masuk ke sebuah kafe kecil di sudut jalan. Kafe "Secangkir Cerita" tampak hangat dan nyaman dengan aroma kopi yang menenangkan.</p>
                
                <p>"Selamat datang! Silakan duduk di mana saja," sapa seorang pria tampan berseragam barista. Namanya tertulis di name tag: Arya.</p>
                
                <p>Rina memilih meja di sudut dekat jendela. Sambil menunggu hujan reda, dia memesan cappuccino hangat. Tanpa disadari, matanya terus melirik ke arah Arya yang sedang meracik kopi dengan penuh perhatian.</p>
                
                <h2>Percakapan Hangat</h2>
                <p>"Ini cappuccino pesanan Anda," kata Arya sambil menyajikan secangkir kopi dengan latte art berbentuk hati. "Maaf harus menunggu lama."</p>
                
                <p>"Tidak apa-apa. Latte artnya bagus sekali," puji Rina sambil tersenyum.</p>
                
                <p>"Terima kasih. Saya masih belajar sebenarnya," jawab Arya dengan senyuman yang membuat hati Rina berdetak lebih cepat.</p>
                
                <p>Mereka pun terlibat dalam percakapan yang mengalir natural - tentang kopi, buku, musik, dan mimpi-mimpi mereka. Waktu terasa berhenti, dan hujan yang tadinya dianggap sebagai gangguan kini terasa seperti berkah.</p>
                
                <h2>Pertemuan Demi Pertemuan</h2>
                <p>Sejak hari itu, Rina sering mampir ke kafe tersebut. Tidak hanya karena kopinya yang enak, tetapi juga karena ingin bertemu Arya. Setiap kali datang, mereka selalu menemukan topik baru untuk dibicarakan.</p>
                
                <p>Arya pun mulai menantikan kedatangan Rina. Dia bahkan mulai bereksperimen dengan latte art baru khusus untuk pelanggan istimewanya itu.</p>
                
                <p>Suatu sore, ketika kafe sedang sepi, Arya memberanikan diri berkata, "Rina, maukah kamu menjadi model untuk latte art terbaruku?"</p>
                
                <p>Rina tertawa. "Maksudnya?"</p>
                
                <p>"Maukah kamu jalan-jalan denganku ke taman kota besok sore? Aku ingin membuat latte art yang terinspirasi dari momen indah bersama seseorang yang istimewa."</p>
                
                <p>Dengan wajah memerah, Rina mengangguk. "Dengan senang hati."</p>
                
                <p>Dan cinta pun mulai mekar di antara aroma kopi dan kehangatan kafe sudut jalan itu...</p>
            `
        },
        {
            id: 3,
            title: "Misteri Lukisan Tua",
            excerpt: "Seorang kurator museum menemukan lukisan antik yang menyimpan rahasia kelam dari masa lalu...",
            category: "misteri",
            readTime: "18 menit",
            author: "Eko Prasetyo",
            content: `
                <h1>Misteri Lukisan Tua</h1>
                <p><em>Oleh: Eko Prasetyo</em></p>
                
                <h2>Penemuan yang Mengejutkan</h2>
                <p>Dr. Amanda Chen, kurator senior Museum Sejarah Nasional, sedang memeriksa koleksi baru yang baru saja disumbangkan oleh keluarga Wijaya. Di antara berbagai artefak bersejarah, matanya tertuju pada sebuah lukisan tua yang tampak tidak biasa.</p>
                
                <p>Lukisan itu bergambar seorang wanita cantik berpakaian tradisional Jawa, tetapi ada sesuatu yang aneh pada matanya - seolah-olah mata itu mengikuti ke mana pun Amanda bergerak.</p>
                
                <p>"Lukisan abad ke-18," gumam Amanda sambil membaca catatan kecil di belakang bingkai. "Karya R.A. Kartini... tunggu, ini tidak mungkin."</p>
                
                <h2>Penelitian Mendalam</h2>
                <p>Amanda mulai meneliti lukisan tersebut dengan lebih detail. Yang membuatnya bingung adalah teknik melukis dan pigmen yang digunakan tampak jauh lebih modern daripada yang seharusnya tersedia di abad ke-18.</p>
                
                <p>Dia juga menemukan tulisan kecil dalam bahasa Latin di sudut kanan bawah lukisan: "Veritas temporis filia" - Kebenaran adalah anak waktu.</p>
                
                <p>"Mengapa ada tulisan Latin pada lukisan Jawa kuno?" tanya Amanda pada dirinya sendiri.</p>
                
                <h2>Jejak Masa Lalu</h2>
                <p>Penelitian lebih lanjut membawa Amanda pada dokumen-dokumen lama di arsip museum. Dia menemukan bahwa lukisan itu pernah dimiliki oleh seorang kolonel Belanda bernama Van Der Berg pada tahun 1920.</p>
                
                <p>Yang mengejutkan, dalam catatan harian Van Der Berg, disebutkan bahwa lukisan itu "terkutuk" dan telah menyebabkan kematian misterius tiga orang pemilik sebelumnya.</p>
                
                <p>"Setiap orang yang memiliki lukisan ini akan mengalami mimpi buruk tentang wanita dalam lukisan, dan dalam waktu satu bulan, mereka akan meninggal dalam keadaan yang tidak dapat dijelaskan," tulis Van Der Berg.</p>
                
                <h2>Kebenaran yang Tersembunyi</h2>
                <p>Amanda semakin penasaran. Dia mulai mengalami mimpi aneh - mimpi tentang seorang wanita yang berkata bahwa dia telah dipenjara dalam lukisan itu dan meminta untuk dibebaskan.</p>
                
                <p>Suatu malam, saat bekerja lembur di museum, Amanda mendengar suara langkah kaki dari arah ruang pameran. Ketika dia pergi mengecek, dia melihat lukisan itu berubah - wanita dalam lukisan itu tidak lagi tersenyum, tetapi menangis.</p>
                
                <p>Di lantai, tepat di bawah lukisan, terdapat sebuah surat tua yang tidak ada sebelumnya. Dengan tangan gemetar, Amanda membuka surat itu dan membaca kisah tragis tentang seorang putri bangsawan yang dibunuh oleh tunangannya sendiri, dan jiwanya terjebak dalam lukisan itu selama berabad-abad.</p>
                
                <p>Apakah Amanda akan membantu membebaskan jiwa yang terjebak itu? Atau dia akan menjadi korban selanjutnya dari kutukan lukisan tua yang misterius?</p>
                
                <p><em>Bersambung...</em></p>
            `
        }
    ],
    news: [
        {
            id: 4,
            title: "Teknologi AI Terbaru Revolusioner",
            excerpt: "Perusahaan teknologi lokal berhasil mengembangkan sistem AI yang dapat memahami bahasa Indonesia dengan tingkat akurasi 99%...",
            category: "teknologi",
            readTime: "5 menit",
            author: "Tim Teknologi",
            content: `
                <h1>Teknologi AI Terbaru Revolusioner</h1>
                <p><em>Jakarta, 15 Desember 2024</em></p>
                
                <p>PT Teknologi Nusantara berhasil mengembangkan sistem kecerdasan buatan (AI) yang dapat memahami bahasa Indonesia dengan tingkat akurasi mencapai 99%. Teknologi yang diberi nama "GarudaAI" ini diklaim sebagai terobosan terbesar dalam bidang pemrosesan bahasa alami Indonesia.</p>
                
                <h2>Fitur Unggulan GarudaAI</h2>
                <p>Dr. Budi Santoso, Chief Technology Officer PT Teknologi Nusantara, menjelaskan bahwa GarudaAI memiliki beberapa keunggulan:</p>
                
                <ul>
                <li>Dapat memahami berbagai dialek bahasa Indonesia dari seluruh nusantara</li>
                <li>Mampu mengenali konteks budaya dalam percakapan</li>
                <li>Terintegrasi dengan bahasa daerah seperti Jawa, Sunda, dan Batak</li>
                <li>Dapat memproses bahasa gaul dan slang modern</li>
                </ul>
                
                <h2>Dampak bagi Industri</h2>
                <p>Kehadiran GarudaAI diharapkan dapat mendorong digitalisasi di berbagai sektor, termasuk pendidikan, kesehatan, dan pelayanan publik. Sistem ini juga dapat membantu preservasi bahasa daerah yang terancam punah.</p>
                
                <p>"Kami berharap GarudaAI dapat menjadi tulang punggung transformasi digital Indonesia yang lebih inklusif," ujar Dr. Budi.</p>
                
                <h2>Rencana Peluncuran</h2>
                <p>GarudaAI rencananya akan diluncurkan secara komersial pada kuartal pertama 2025. Saat ini, sistem ini sedang dalam tahap uji coba beta dengan melibatkan 100 perusahaan di berbagai sektor.</p>
            `
        },
        {
            id: 5,
            title: "Tim Nasional Raih Prestasi Gemilang",
            excerpt: "Timnas Indonesia berhasil meraih medali emas dalam kompetisi sepak bola Asia Tenggara setelah mengalahkan Thailand 3-1...",
            category: "olahraga",
            readTime: "4 menit",
            author: "Redaksi Olahraga",
            content: `
                <h1>Tim Nasional Raih Prestasi Gemilang</h1>
                <p><em>Singapura, 14 Desember 2024</em></p>
                
                <p>Tim Nasional Indonesia berhasil meraih medali emas dalam ajang ASEAN Football Championship 2024 setelah mengalahkan Thailand dengan skor 3-1 dalam pertandingan final yang berlangsung di National Stadium Singapura.</p>
                
                <h2>Jalannya Pertandingan</h2>
                <p>Pertandingan dimulai dengan tempo cepat dari kedua tim. Indonesia berhasil unggul lebih dulu melalui gol Egy Maulana Vikri di menit ke-23. Thailand membalas di menit ke-38 melalui tendangan penalti Teerasil Dangda.</p>
                
                <p>Babak kedua menjadi milik Indonesia. Witan Sulaeman mencetak gol ke-2 di menit ke-67, disusul gol ketiga dari Marselino Ferdinan di menit ke-84 yang memastikan kemenangan Garuda.</p>
                
                <h2>Pernyataan Pelatih</h2>
                <p>Shin Tae-yong, pelatih Tim Nasional Indonesia, menyatakan bangga dengan pencapaian anak asuhnya. "Ini adalah hasil kerja keras selama bertahun-tahun. Para pemain telah menunjukkan mental juara," ujarnya dalam konferensi pers.</p>
                
                <h2>Dukungan Suporter</h2>
                <p>Ribuan suporter Indonesia yang hadir di stadion memberikan dukungan luar biasa sepanjang pertandingan. Mereka menyanyikan lagu kebangsaan dengan penuh semangat ketika Indonesia dinyatakan sebagai juara.</p>
                
                <p>Prestasi ini menjadi yang terbaik bagi Indonesia dalam 10 tahun terakhir di ajang ASEAN Football Championship.</p>
            `
        }
    ],
    articles: [
        {
            id: 6,
            title: "Tips Hidup Sehat di Era Digital",
            excerpt: "Panduan lengkap untuk menjaga kesehatan fisik dan mental di tengah gaya hidup digital yang semakin dominan...",
            category: "kesehatan",
            readTime: "8 menit",
            author: "Dr. Sarah Wijaya",
            content: `
                <h1>Tips Hidup Sehat di Era Digital</h1>
                <p><em>Oleh: Dr. Sarah Wijaya, Sp.KO</em></p>
                
                <p>Era digital telah mengubah cara kita bekerja, berkomunikasi, dan beraktivitas sehari-hari. Namun, gaya hidup digital yang semakin dominan juga membawa tantangan baru bagi kesehatan kita.</p>
                
                <h2>Dampak Negatif Gaya Hidup Digital</h2>
                <p>Beberapa masalah kesehatan yang sering muncul akibat gaya hidup digital antara lain:</p>
                
                <ul>
                <li><strong>Digital Eye Strain</strong> - Mata lelah, kering, dan perih akibat terlalu lama menatap layar</li>
                <li><strong>Tech Neck</strong> - Nyeri leher dan bahu akibat postur yang salah</li>
                <li><strong>Sedentary Lifestyle</strong> - Kurang aktivitas fisik karena terlalu lama duduk</li>
                <li><strong>Sleep Disruption</strong> - Gangguan tidur akibat paparan blue light</li>
                <li><strong>Digital Addiction</strong> - Kecanduan gadget yang mengganggu kehidupan sosial</li>
                </ul>
                
                <h2>Strategi Hidup Sehat di Era Digital</h2>
                
                <h3>1. Terapkan Aturan 20-20-20</h3>
                <p>Setiap 20 menit, alihkan pandangan ke objek yang berjarak 20 kaki (6 meter) selama 20 detik. Ini membantu mengurangi ketegangan mata.</p>
                
                <h3>2. Perhatikan Postur Tubuh</h3>
                <p>Pastikan layar sejajar dengan mata, punggung tegak, dan kaki menapak rata di lantai. Gunakan kursi ergonomis jika memungkinkan.</p>
                
                <h3>3. Lakukan Digital Detox</h3>
                <p>Tentukan waktu bebas gadget, terutama 1-2 jam sebelum tidur. Manfaatkan waktu ini untuk aktivitas lain seperti membaca buku atau bermeditasi.</p>
                
                <h3>4. Rutin Berolahraga</h3>
                <p>Lakukan aktivitas fisik minimal 30 menit setiap hari. Bisa berupa jalan kaki, yoga, atau olahraga ringan di rumah.</p>
                
                <h3>5. Jaga Pola Makan</h3>
                <p>Hindari makan sambil menatap layar. Konsumsi makanan bergizi seimbang dan minum air putih yang cukup.</p>
                
                <h2>Kesehatan Mental di Era Digital</h2>
                <p>Tidak hanya kesehatan fisik, kesehatan mental juga perlu diperhatikan:</p>
                
                <ul>
                <li>Batasi konsumsi berita negatif</li>
                <li>Kurangi penggunaan media sosial yang berlebihan</li>
                <li>Maintain hubungan sosial di dunia nyata</li>
                <li>Praktikkan mindfulness dan meditasi</li>
                <li>Cari hobi yang tidak melibatkan teknologi</li>
                </ul>
                
                <h2>Kesimpulan</h2>
                <p>Teknologi digital adalah alat yang powerful jika digunakan dengan bijak. Dengan menerapkan tips-tips di atas, kita dapat menikmati manfaat teknologi tanpa mengorbankan kesehatan fisik dan mental kita.</p>
                
                <p>Ingatlah bahwa kesehatan adalah investasi jangka panjang yang tidak bisa diabaikan demi produktivitas sesaat.</p>
            `
        }
    ],
    others: [
        {
            id: 7,
            title: "Refleksi Akhir Tahun",
            excerpt: "Sebuah esai tentang pentingnya merenungkan perjalanan hidup di penghujung tahun dan menyiapkan resolusi yang bermakna...",
            category: "esai",
            readTime: "6 menit",
            author: "Rina Sari",
            content: `
                <h1>Refleksi Akhir Tahun</h1>
                <p><em>Oleh: Rina Sari</em></p>
                
                <p>Desember selalu membawa perasaan yang unik. Ada semacam keajaiban dalam udara yang dingin, dalam lampu-lampu yang berkelip di jalanan, dan dalam kehangatan berkumpul bersama orang-orang terkasih. Namun, lebih dari sekadar perayaan, akhir tahun juga mengundang kita untuk berhenti sejenak dan merenungkan perjalanan yang telah kita lalui.</p>
                
                <h2>Melihat Ke Belakang dengan Rasa Syukur</h2>
                <p>Tahun ini, seperti tahun-tahun sebelumnya, tidak sempurna. Ada momen ketika kita merasa dunia seolah runtuh di kaki kita. Ada hari-hari ketika mimpi terasa terlalu jauh untuk diraih. Ada saat-saat ketika kita mempertanyakan setiap keputusan yang pernah kita buat.</p>
                
                <p>Tetapi, bukankah justru dari momen-momen sulit itulah kita belajar tentang kekuatan yang tidak pernah kita tahu kita miliki? Bukankah dari kegagalan itulah kita menemukan jalan baru yang lebih baik?</p>
                
                <h2>Pelajaran yang Dipetik</h2>
                <p>Setiap tahun mengajarkan kita sesuatu yang baru. Mungkin tahun ini kita belajar tentang pentingnya kesehatan mental. Mungkin kita belajar bahwa kebahagiaan tidak selalu datang dari pencapaian besar, tetapi dari momen-momen kecil sehari-hari.</p>
                
                <p>Mungkin kita belajar bahwa persahabatan sejati adalah mereka yang tetap ada saat badai melanda. Atau mungkin kita belajar bahwa mencintai diri sendiri bukan egoisme, tetapi fondasi untuk mencintai orang lain.</p>
                
                <h2>Menatap Masa Depan dengan Harapan</h2>
                <p>Refleksi bukan hanya tentang melihat ke belakang, tetapi juga tentang menatap ke depan dengan mata yang lebih jernih. Apa yang ingin kita capai di tahun mendatang? Bukan sekadar resolusi yang dituliskan di atas kertas dan dilupakan di bulan Februari, tetapi komitmen nyata untuk menjadi versi terbaik dari diri kita.</p>
                
                <p>Mungkin resolusi kita sederhana: lebih sering menelepon orang tua, membaca lebih banyak buku, atau belajar memasak. Mungkin lebih besar: mengejar karir baru, memulai bisnis, atau berkeliling dunia. Yang penting adalah kita berkomitmen untuk terus tumbuh.</p>
                
                <h2>Apresiasi untuk Diri Sendiri</h2>
                <p>Di tengah hiruk pikuk mengevaluasi pencapaian dan merencanakan masa depan, jangan lupa untuk mengapresiasi diri sendiri. Kita telah melewati 365 hari dengan segala tantangannya. Kita telah bertahan, berjuang, dan terus melangkah maju meski kadang tertatih-tatih.</p>
                
                <p>Berikan tepuk tangan untuk diri sendiri. Berikan pelukan untuk jiwa yang telah berjuang keras. Kita layak mendapatkan pengakuan atas usaha yang telah kita lakukan.</p>
                
                <h2>Pesan untuk Tahun Depan</h2>
                <p>Tahun baru akan segera tiba dengan segala kemungkinannya. Mungkin akan ada tantangan baru yang menanti, tetapi juga peluang baru yang menggiurkan. Yang pasti, kita akan menghadapinya dengan bekal pengalaman dan kebijaksanaan yang telah kita kumpulkan sepanjang tahun ini.</p>
                
                <p>Jadi, mari sambut tahun baru dengan hati yang penuh syukur atas masa lalu, mata yang berbinar menatap masa depan, dan jiwa yang siap untuk menulis bab baru dalam kisah hidup kita.</p>
                
                <p>Selamat tahun baru. Semoga kita semua menemukan kebahagiaan, kedamaian, dan makna dalam perjalanan yang akan datang.</p>
            `
        }
    ]
};

// Global variables
let currentTheme = 'light';
let currentSection = 'home';
let currentFontSize = 16;
let bookmarkedItems = JSON.parse(localStorage.getItem('bookmarks')) || [];

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeEventListeners();
    loadContent();
    checkSavedTheme();
    showSection('home');
});

// Initialize event listeners
function initializeEventListeners() {
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.getAttribute('href').substring(1);
            showSection(section);
            updateActiveNavLink(link);
        });
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.header-container')) {
            navMenu.classList.remove('active');
        }
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', handleSearch);

    // Filter buttons
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-btn')) {
            handleFilter(e.target);
        }
    });

    // Category cards
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', (e) => {
            const category = e.currentTarget.getAttribute('onclick').match(/'(.+)'/)[1];
            showCategory(category);
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Show specific section
function showSection(sectionName) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });

    // Show hero only for home
    const hero = document.querySelector('.hero');
    const categories = document.querySelector('.categories');
    
    if (sectionName === 'home') {
        hero.style.display = 'flex';
        categories.style.display = 'block';
    } else {
        hero.style.display = 'none';
        categories.style.display = 'none';
        
        // Show specific section
        const targetSection = document.getElementById(sectionName);
        if (targetSection) {
            targetSection.style.display = 'block';
        }
    }

    currentSection = sectionName;
    
    // Update URL without page reload
    history.pushState(null, null, `#${sectionName}`);
}

// Show category content
function showCategory(category) {
    showSection(category);
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${category}`) {
            link.classList.add('active');
        }
    });
}

// Update active navigation link
function updateActiveNavLink(activeLink) {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    activeLink.classList.add('active');
}

// Load content for all sections
function loadContent() {
    loadSectionContent('stories', contentData.stories);
    loadSectionContent('news', contentData.news);
    loadSectionContent('articles', contentData.articles);
    loadSectionContent('others', contentData.others);
}

// Load content for specific section
function loadSectionContent(sectionName, data) {
    const grid = document.getElementById(`${sectionName}Grid`);
    if (!grid) return;

    grid.innerHTML = data.map(item => createContentCard(item)).join('');
}

// Create content card HTML
function createContentCard(item) {
    const isBookmarked = bookmarkedItems.some(bookmark => bookmark.id === item.id);
    const bookmarkIcon = isBookmarked ? 'fas fa-bookmark' : 'far fa-bookmark';
    
    return `
        <div class="content-card" data-category="${item.category}" onclick="openContent(${item.id})">
            <div class="content-image">
                <i class="fas fa-${getIconForCategory(item.category)}"></i>
            </div>
            <div class="content-info">
                <h3 class="content-title">${item.title}</h3>
                <p class="content-excerpt">${item.excerpt}</p>
                <div class="content-meta">
                    <span class="content-category">${item.category}</span>
                    <div class="read-time">
                        <i class="far fa-clock"></i>
                        <span>${item.readTime}</span>
                    </div>
                </div>
                <div class="content-actions" style="margin-top: 1rem; display: flex; justify-content: space-between; align-items: center;">
                    <span style="color: var(--text-secondary); font-size: 0.875rem;">Oleh: ${item.author}</span>
                    <button class="bookmark-btn" onclick="event.stopPropagation(); toggleBookmark(${item.id})" style="background: none; border: none; color: var(--accent-color); font-size: 1.25rem; cursor: pointer;">
                        <i class="${bookmarkIcon}"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Get icon for category
function getIconForCategory(category) {
    const icons = {
        'petualangan': 'map',
        'romantis': 'heart',
        'misteri': 'search',
        'fiksi': 'book',
        'teknologi': 'microchip',
        'olahraga': 'running',
        'politik': 'balance-scale',
        'ekonomi': 'chart-line',
        'kesehatan': 'heartbeat',
        'pendidikan': 'graduation-cap',
        'lifestyle': 'star',
        'puisi': 'feather',
        'esai': 'pen-fancy',
        'review': 'star-half-alt',
        'opini': 'comment'
    };
    return icons[category] || 'file-alt';
}

// Open content in modal
function openContent(contentId) {
    const allContent = [...contentData.stories, ...contentData.news, ...contentData.articles, ...contentData.others];
    const content = allContent.find(item => item.id === contentId);
    
    if (!content) return;

    const modal = document.getElementById('readingModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = content.content;
    modalBody.style.fontSize = `${currentFontSize}px`;
    
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('readingModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Adjust font size in modal
function adjustFontSize(change) {
    currentFontSize += change * 2;
    currentFontSize = Math.max(12, Math.min(24, currentFontSize));
    
    const modalBody = document.getElementById('modalBody');
    modalBody.style.fontSize = `${currentFontSize}px`;
}

// Toggle bookmark
function toggleBookmark(contentId) {
    const allContent = [...contentData.stories, ...contentData.news, ...contentData.articles, ...contentData.others];
    const content = allContent.find(item => item.id === contentId);
    
    if (!content) return;

    const existingIndex = bookmarkedItems.findIndex(item => item.id === contentId);
    
    if (existingIndex > -1) {
        bookmarkedItems.splice(existingIndex, 1);
        showNotification('Bookmark dihapus', 'info');
    } else {
        bookmarkedItems.push(content);
        showNotification('Ditambahkan ke bookmark', 'success');
    }

    localStorage.setItem('bookmarks', JSON.stringify(bookmarkedItems));
    loadContent(); // Reload content to update bookmark icons
}

// Handle search
function handleSearch(e) {
    const searchTerm = e.target.value.toLowerCase();
    const currentGrid = document.getElementById(`${currentSection}Grid`);
    
    if (!currentGrid || currentSection === 'home') return;

    const cards = currentGrid.querySelectorAll('.content-card');
    
    cards.forEach(card => {
        const title = card.querySelector('.content-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.content-excerpt').textContent.toLowerCase();
        
        if (title.includes(searchTerm) || excerpt.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Handle filter
function handleFilter(filterBtn) {
    const filterValue = filterBtn.getAttribute('data-filter');
    const section = filterBtn.closest('.content-section');
    const sectionId = section.id;
    
    // Update active filter button
    section.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    filterBtn.classList.add('active');

    // Filter content cards
    const cards = section.querySelectorAll('.content-card');
    
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (filterValue === 'all' || cardCategory === filterValue) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Toggle theme
function toggleTheme() {
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    const themeIcon = document.querySelector('.theme-toggle i');
    themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    
    localStorage.setItem('theme', currentTheme);
    
    showNotification(`Mode ${currentTheme === 'dark' ? 'gelap' : 'terang'} diaktifkan`, 'info');
}

// Check saved theme
function checkSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        currentTheme = savedTheme;
        document.documentElement.setAttribute('data-theme', currentTheme);
        
        const themeIcon = document.querySelector('.theme-toggle i');
        themeIcon.className = currentTheme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        z-index: 3000;
        animation: slideInRight 0.3s ease;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        font-weight: 500;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Handle browser back/forward
window.addEventListener('popstate', () => {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showSection(hash);
    } else {
        showSection('home');
    }
});

// Close modal when clicking outside
document.addEventListener('click', (e) => {
    const modal = document.getElementById('readingModal');
    if (e.target === modal) {
        closeModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
    
    // Font size shortcuts when modal is open
    if (document.getElementById('readingModal').classList.contains('active')) {
        if (e.key === '+' || e.key === '=') {
            e.preventDefault();
            adjustFontSize(1);
        } else if (e.key === '-') {
            e.preventDefault();
            adjustFontSize(-1);
        }
    }
});

// Add CSS for notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from { transform: translateX(100%); opacity: 0; }
        to { transform: translateX(0); opacity: 1; }
    }
    
    @keyframes slideOutRight {
        from { transform: translateX(0); opacity: 1; }
        to { transform: translateX(100%); opacity: 0; }
    }
`;
document.head.appendChild(style);
// script.js
document.addEventListener('DOMContentLoaded', function() 
{music.crossOrigin="anonymous";// Izinkan CORS
    const music = document.getElementById('bgMusic');
    const toggleBtn = document.getElementById('musicToggle');
    const icon = toggleBtn.querySelector('i');
    // Coba mulai musik otomatis (dengan interaksi user)
    document.body.addEventListener('click', function initMusic() {
        music.volume = 0.3; // Atur volume (30%)
        music.play().catch(e => console.log("Autoplay blocked:", e));
        document.body.removeEventListener('click', initMusic);
    }, { once: true });

    // Toggle play/pause
    toggleBtn.addEventListener('click', function() {
        if (music.paused) {
            music.play();
            icon.className = 'fas fa-pause';
        } else {
            music.pause();
            icon.className = 'fas fa-play';
        }
    });
});