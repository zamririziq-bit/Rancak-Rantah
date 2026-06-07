// Inisialisasi peta
var map = L.map('map').setView([-0.9492, 100.3543], 8);

// Basemap OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap Contributors'
}).addTo(map);

// Data destinasi wisata
var destinations = [
    {
        name: "Pantai Carolina",
        location: [-1.103, 100.363],
        description: "Pantai indah di Padang dengan pasir putih dan pulau kecil di sekitarnya."
    },
    {
        name: "Air Terjun Sarasah",
        location: [-1.724, 100.676],
        description: "Air terjun alami yang tersembunyi di kawasan hutan Pesisir Selatan."
    },
    {
        name: "Desa Pariangan",
        location: [-0.455, 100.493],
        description: "Salah satu desa terindah di dunia yang berada di Tanah Datar."
    },
    {
        name: "Danau Tarusan",
        location: [-1.235, 100.529],
        description: "Danau alami yang dikelilingi bukit hijau di Pesisir Selatan."
    },
    {
        name: "Bukittinggi",
        location: [-0.305, 100.369],
        description: "Kota wisata terkenal dengan Jam Gadang dan panorama Ngarai Sianok."
    },
    {
        name: "Gunung Padang",
        location: [-0.965, 100.349],
        description: "Di puncak Gunung Padang, Kota Padang terbentang seperti lukisan raksasa, laut biru berpadu dengan kisah legenda yang masih berembus bersama angin senja."
    },
    {
        name: "Pantai Air Manis",
        location: [-0.989, 100.362],
        description: "Pantai Air Manis memadukan pasir cokelat, ombak tenang, dan legenda Batu Malin Kundang yang menjadikan setiap langkah terasa penuh cerita."
    },
    {
        name: "Pantai Padang",
        location: [-0.942, 100.351],
        description: "Pantai Padang adalah tempat terbaik menikmati sunset sambil melihat garis laut yang memeluk hiruk-pikuk kota."  
    },
    {
        name: "Pantai Nirwana",
        location: [-1.006, 100.394],
        description: "Pantai Nirwana menawarkan laut biru jernih dan suasana tenang yang terasa seperti sudut rahasia di pesisir padang."
    },
    {
        name: "Pantai Pasir Jambak",
        location: [-0.857, 100.292],
        description: "Hamparan pasir luas dan deretan pohon kelapa menjadikan Pantai Pasir Jambak sempurna untuk menikmati senja tropis."
    },
    {
        name: "Jembatan Siti Nurbaya",
        location: [-0.960, 100.360],
        description: "Jembatan Siti Nurbaya menghadirkan panorama kota, pelabuhan, dan kisah cinta legendaris yang melekat pada kota padang."
    },
    {
        name: "Pulau Pasumpahan",
        location: [-1.119, 100.363],
        description: "Pulau Pasumpahan menawarkan perpaduan laut biru, bukit hijau, dan panorama bawah laut yang memanjakan mata."
    },
    {
        name: "Pulau Sirandah",
        location: [-1.177, 100.365],
        description: "Pulau SIrandah memikat wistawan dengan pasir putih, air laut sebening kaca, dan ketenangan pulau tropis."
    },
    {
        name: "Air Terjun Lubuk Hitam",
        location: [-1.107, 100.428],
        description: "Air Terjun Lubuk Hitam menghadiahkan kesegaran alami dengan air jernih yang mengakir di tengah hutan tropis."
    },
    {
        name: "Goa Kelelawar Padayo",
        location: [-0.889, 100.452],
        description: "Goa Kelelawar Padayo menghadirkan petualangan unik dengan lorong alami yang dipenuhi nuansa eksotis."
    },
    {
        name: "Teluk Buo",
        location: [-0.905, 100.313],
        description: "Teluk Buo menghadirkan perpaduan laut tenang dan perbukitan hijau yang menciptakan suasana damai."
    },
    {
        name: "Batu Malin Kundang",
        location: [-0.992, 100.361],
        description: "Batu Malin Kundang menjadi ikon legenda rakyat Minangkabau yang menarik wisatawan dari berbagai daerah."
    },
    {
        name: "Pantai Ujung Batu Muaro Penjalinan",
        location: [-0.817, 100.272],
        description: "Pantai Ujung Batu menawarkan panorama laut dengan batu karang alami yang mempercantik garis pantai."
    },
    {
        name: "Pantai Gandoriah",
        location: [-0.626, 100.120],
        description: "Pantai Gandoriah menjadi wilayah utama Pariaman dengan hamparan laut tenang, kereta wisata, dan sunset yang terasa hangat di tepi samudera."
    },
    {
        name: "Pulo Angso Duo",
        location: [-0.617, 100.111],
        description: "Pulau Angso Duo menawarkan pasir putih dan air laut jernih yang membuat wisatawan serasa hingga di pulau tropis tersembunyi."
    },
    {
        name: "Pantai Kata",
        location: [-0.634, 100.117],
        description: "Pantai Kata menghadirkan suasana santai dengan deretan pohin cemara dan panorama matahari tenggelam yang memikat."
    },
    {
        name: "Pantai Cermin",
        location: [-0.603, 100.109],
        description: "Pantai Cermin memanjakan pengunjung dengan ombak tenang dan panorama laut biru yang cocok untuk wisata keluarga."
    },
    {
        name: "Pantai Apar",
        location: [-0.647, 100.125],
        description: "Pantai Apar terkenal dengan kawasan mangrove dan jalur tracking yang menghadirkan nuansa alam pesisir yang asri."
    },
    {
        name: "Pulau Kasiak",
        location: [-0.602, 100.102],
        description: "Pulau Kasiak menjadi surga kecil bagi pecinta snorkeling dengan terumbu karang dan laut sebening kristal."
    },
    {
        name: "Pantai Arta",
        location: [-0.640, 100.130],
        description: "Pantai Arta menghadirkan perpaduan pasir pantai dan suasana teduh yang cocok untuk menikmati sore bersama keluarga."
    },
    {
        name: "Taman Anas Malik",
        location: [-0.625, 100.121],
        description: "Taman Anas Malik menjadi ruang terbuka favorit untuk menikmati semilir angin laut dan wajah Kota Pariaman."
    },
    {
        name: "Konservasi Penyu",
        location: [-0.651, 100.129],
        description: "Destinasi ini menghadirkan pengalaman langka melihat pelestarian penyu sekaligus menikmati keindahan pasir pariaman."
    },
    {
        name: "Pantai Sunur",
        location: [-0.676, 100.146],
        description: "Pantai Sunur menawarkan garis pantai panjang denga suasana tenang yang cocok untuk menikmati debur ombak."
    },
    {
        name: "Pulau Siberut",
        location: [-1.156, 99.192],
        description: "Pulau Siberut menghadirkan hutan hujan tropis, budaya suku Mentawai yang autentik dan petualangan alam yang begitu liar dan murni."
    },
    {
        name: "Pantai Mapadegat",
        location: [-2.085, 99.655],
        description: "Pantai Mapadaget menawarkan pasir putih panjang dan ombak tenang yang sempurna untuk menikmati senja tropis Mentawai."
    },
    {
        name: "Pulau Sipora",
        location: [-2.083, 99.733],
        description: "Pulau Sipora memikat dengan perpaduan laut biru jernih, budaya lokal, dan suasana pulau yang damai."
    },
    {
        name: "Pulau Pagai Utara",
        location: [-2.597, 100.112],
        description: "Pulau Pagai Utara menghadirkan panorama panatai alami dan ombak kelas dunia yang diburu para peselancar internasional."
    },
    {
        name: "Pulau Pagai Seletan",
        location: [-3.067, 100.381],
        description: "Pulau Pagai Selatan menawarkan ketenangan tropis dengan hamparan laut luas dan desa-desa pesisir yang masih alami."
    },
    {
        name: "Penginapan Awera Resort",
        location: [-2.233, 99.817],
        description: "Awera Resort menyuguhkan pengalaman menginap di tengah laut biru mentawai dengan panorama ekslusif dan suasana tropis mewah."
    },
    {
        name: "Pantai Jati",
        location: [-2.117, 99.742],
        description: "Pantai Jati menawarkan pasir lembut, deburan ombak tenang, dan suasana santai khas kepulauan tropis."
    },
    {
        name: "Desa Wisata Matotonan",
        location: [-1.480, 99.280],
        description: "Desa Matotonan membawa wisatawan menyelami budaya asli Mentawai melalui rumah adat Uma dan tradisi leluhur yang masih terjaga."
    },
    {
        name: "Pantai Katiet Beach",
        location: [-2.339, 99.938],
        description: "Katiet Beach dikenal sebagai surga surfing dunia dengan ombak ikonik yang menantang adrenalin."
    },
    {
        name: "Pulau Masokut",
        location: [-2.187, 99.731],
        description: "Pulau Masokut menghadirkan laut sebening kristal dan suasana pulau kecil yang cocok untuk melepas penat dari hiruk-pikuk kota."
    },
    {
        name: "Pantai Nyangnyang",
        location: [-2.275, 99.865],
        description: "Pantai Nyangnyang menawarkan panorama laut lepas dan ketenangan alami khas kepulauan mentawai."
    },
    {
        name: "Pulau Simakakang",
        location: [-2.173, 99.719],
        description: "Pulau Simakakang memanjakan mata wisatawan dengan pantai eksotis dan suasana tropis yang masih sangat alami."
    },
    {
        name: "Pulau Belibis",
        location: [-0.792, 100.655],
        description: "Pulau Belibis menghadirkan taman hijau yang sejuk dengan telaga alami dan suasana santai yang cocok untuk melepas penat dari hiruk-pikuk kota."
    },
    {
        name: "Laing Park",
        location: [-0.786, 100.660],
        description: "Laing Park menawarkan ruang terbuka yang asri dengan panorama perbukitan yang menyegarkan mata serta udara pegunungan yang sejuk."
    },
    {
        name: "Pulau Belibis",
        location: [-0.792, 100.655],
        description: "Pulau Belibis menghadirkan taman hijau yang sejuk dengan telaga alami dan suasana santai yang cocok untuk melepas penat dari hiruk-pikuk kota."
    },
    {
        name: "Puncak Gagoan",
        location: [-0.704, 100.693],
        description: "Puncak Gagoan menghadirkan panorama spektakuler Danau Singkarak dari ketinggian yang membuat setiap langkah pendakian terasa terbayar lunas."
    },
    {
        name: "Danau Singkarak",
        location: [-0.612, 100.543],
        description: "Danau Singkarak memukau dengan hamparan air biru yang luas dan dikelilingi pegunungan hijau khas Sumatera Barat."
    },
    {
        name: "Bukit Cambai",
        location: [-0.782, 100.641],
        description: "Bukit Cambai menawarkan sudut terbaik untuk menikmati panorama Kota Solok dan lanskap alam yang memesona dari ketinggian."
    },
    {
        name: "Taman Pramuka Solok",
        location: [-0.792, 100.656],
        description: "Taman Pramuka menjadi ruang hijau yang nyaman untuk bersantai sambil menikmati kesejukan udara Kota Solok."
    },
    {
        name: "Batutajam",
        location: [-0.695, 100.725],
        description: "Batutajam menawarkan petualangan alam dengan panorama perbukitan yang dramatis dan pemandangan lembah yang memukau."
    },
    {
        name: "Kebun Teh Alahan Panjang",
        location: [-1.020, 100.730],
        description: "Hamparan kebun teh yang seolah tak berujung menciptakan lanskap hijau yang menenangkan dan sangat fotogenik."
    },
    {
        name: "Danau Diatas",
        location: [-1.041, 100.715],
        description: "Danau Diatas menghadirkan ketenangan alam pegunungan dengan udara sejuk dan panorama yang memanjakan mata."
    },
    {
        name: "Danau Dibawah",
        location: [-1.007, 100.750],
        description: "Danau Dibawah menyuguhkan pemandangan alam yang tenang dan menjadi pasangan sempurna bagi keindahan Danau Diatas."
    },
    {
        name: "Danau Singkarak",
        location: [-0.612, 100.543],
        description: "Danau Singkarak memukau dengan hamparan air biru yang luas, dikelilingi perbukitan hijau yang menciptakan panorama khas Sumatera Barat."
    },
    {
        name: "Danau Diatas",
        location: [-1.041, 100.715],
        description: "Danau Diatas menawarkan ketenangan alam pegunungan dengan udara sejuk dan panorama danau yang menenangkan jiwa."
    },
    {
        name: "Danau Dibawah",
        location: [-1.007, 100.750],
        description: "Danau Dibawah menyuguhkan pemandangan alam yang asri dengan kabut tipis yang sering menghiasi permukaan air pada pagi hari."
    },
    {
        name: "Kebun Teh Alahan Panjang",
        location: [-1.020, 100.730],
        description: "Hamparan kebun teh yang luas menghadirkan panorama hijau yang menyejukkan mata dan udara pegunungan yang menyegarkan."
    },
    {
        name: "Puncak Gagoan",
        location: [-0.704, 100.693],
        description: "Puncak Gagoan menawarkan pemandangan spektakuler Danau Singkarak dari ketinggian dengan tebing batu yang menjadi ikon wisata petualangan."
    },
    {
        name: "Pulau Angso Duo Singkarak",
        location: [-0.621, 100.547],
        description: "Pulau kecil di tengah Danau Singkarak ini menghadirkan panorama unik yang menjadi daya tarik wisatawan dan pecinta fotografi."
    },
    {
        name: "Bukit Cambai",
        location: [-0.782, 100.641],
        description: "Bukit Cambai menghadirkan panorama alam yang luas dengan pemandangan lembah dan perbukitan yang memesona."
    },
    {
        name: "Air Terjun Sarasah Batimpo",
        location: [-1.030, 100.770],
        description: "Air Terjun Sarasah Batimpo menawarkan kesegaran alami dengan aliran air jernih yang jatuh di tengah hutan yang masih asri."
    },
    {
        name: "Pemandian Air Panas Bukik Kili",
        location: [-0.770, 100.650],
        description: "Pemandian air panas alami ini menjadi tempat favorit untuk bersantai sambil menikmati suasana pegunungan yang sejuk."
    },
    {
        name: "Danau Talang",
        location: [-1.015, 100.677],
        description: "Danau Talang menyuguhkan panorama alam yang tenang dengan latar belakang Gunung Talang yang megah."
    },
    {
        name: "Gunung Talang",
        location: [-0.978, 100.679],
        description: "Gunung Talang menjadi destinasi favorit pendaki dengan pemandangan kawah, hamparan awan, dan lanskap pegunungan yang luar biasa."
    },
    {
        name: "Bukit Burung Surga",
        location: [-1.005, 100.700],
        description: "Bukit Burung Surga menawarkan panorama alam yang memikat dengan hamparan perbukitan hijau dan udara pegunungan yang segar."
    },
    {
        name: "Kebun Teh Solok Selatan",
        location: [-1.570, 101.060],
        description: "Hamparan kebun teh yang luas berpadu dengan udara pegunungan yang sejuk, menciptakan panorama hijau yang memanjakan mata."
    },
    {
        name: "Air Terjun Tanggo",
        location: [-1.545, 101.120],
        description: "Air Terjun Tanggo menawarkan kesegaran alami dengan aliran air yang jatuh di tengah hutan tropis yang masih asri."
    },
    {
        name: "Air Terjun Kembar",
        location: [-1.610, 101.140],
        description: "Dua aliran air yang berdampingan menciptakan pemandangan unik dan menjadi daya tarik wisata alam Solok Selatan."
    },
    {
        name: "Pemandian Air Panas Sapan Maluluang",
        location: [-1.680, 101.250],
        description: "Pemandian air panas alami yang menawarkan relaksasi sambil menikmati suasana alam pegunungan yang tenang."
    },
    {
        name: "Gunung Kerinci View Point",
        location: [-1.760, 101.320],
        description: "Titik pandang yang menyajikan panorama megah Gunung Kerinci dan bentang alam hijau yang membentang hingga cakrawala."
    },
    {
        name: "Goa Batu Kapal",
        location: [-1.620, 101.180],
        description: "Goa alami dengan formasi batuan unik yang menyerupai kapal dan menyimpan pesona geologi yang menarik."
    },
    {
        name: "Sungai Batang Sangir",
        location: [-1.520, 101.080],
        description: "Aliran sungai yang jernih dengan panorama alam yang masih alami, cocok untuk menikmati ketenangan alam."
    },
    {
        name: "Bukit Malintang",
        location: [-1.590, 101.110],
        description: "Bukit dengan panorama perbukitan hijau dan hamparan lembah yang menawarkan pengalaman wisata alam yang memukau."
    },
    {
        name: "Kawasan Saribu Rumah Gadang",
        location: [-1.445, 101.030],
        description: "Destinasi budaya ikonik yang menampilkan deretan rumah gadang tradisional Minangkabau yang masih terjaga dengan baik."
    },
    {
        name: "Janjang Seribu",
        location: [-1.448, 101.025],
        description: "Tangga wisata yang membelah perbukitan dan menawarkan pemandangan Saribu Rumah Gadang dari sudut yang menakjubkan."
    },
    {
        name: "Hot Water Boom Solok Selatan",
        location: [-1.675, 101.245],
        description: "Objek wisata keluarga dengan kolam air panas alami yang dipadukan dengan fasilitas rekreasi modern."
    },
    {
        name: "Air Terjun Tansi Ampek",
        location: [-1.580, 101.090],
        description: "Air terjun eksotis yang tersembunyi di tengah rimbunnya hutan, menghadirkan suasana yang sejuk dan menenangkan."
    },
    {
        name: "Lawang Park",
        location: [-0.285, 100.215],
        description: "Lawang Park menghadirkan panorama Danau Maninjau dari ketinggian dengan udara pegunungan yang sejuk dan pemandangan yang memukau."
    },
    {
        name: "Puncak Lawang",
        location: [-0.286, 100.217],
        description: "Puncak Lawang menjadi surga para pecinta fotografi dan paralayang dengan panorama Danau Maninjau yang membentang luas di bawahnya."
    },
    {
        name: "Danau Maninjau",
        location: [-0.315, 100.201],
        description: "Danau vulkanik yang dikelilingi perbukitan hijau ini menawarkan keindahan alam yang menenangkan dan menjadi ikon wisata Kabupaten Agam."
    },
    {
        name: "Kelok 44",
        location: [-0.306, 100.220],
        description: "Kelok 44 menyuguhkan pengalaman berkendara yang unik dengan deretan tikungan legendaris dan panorama Danau Maninjau yang menakjubkan."
    },
    {
        name: "Puncak Muko-Muko",
        location: [-0.320, 100.214],
        description: "Puncak Muko-Muko menawarkan salah satu titik terbaik untuk menikmati keindahan Danau Maninjau dari sudut pandang yang spektakuler."
    },
    {
        name: "Embun Pagi",
        location: [-0.298, 100.228],
        description: "Embun Pagi menghadirkan panorama matahari terbit yang mempesona dengan latar Danau Maninjau dan perbukitan hijau yang memanjakan mata."
    },
    {
        name: "Air Terjun Badorai",
        location: [-0.294, 100.168],
        description: "Air Terjun Badorai menawarkan kesegaran alami dengan aliran air jernih yang mengalir di tengah suasana hutan yang asri."
    },
    {
        name: "Taman Muko-Muko",
        location: [-0.321, 100.215],
        description: "Taman wisata yang menyajikan panorama alam Danau Maninjau serta area santai yang nyaman untuk keluarga."
    },
    {
        name: "Pemandian Tirta Sari Sonsang",
        location: [-0.155, 100.305],
        description: "Pemandian alami yang menawarkan kesegaran air pegunungan dengan suasana yang tenang dan menyegarkan."
    },
    {
        name: "Ngarai Sianok",
        location: [-0.307, 100.367],
        description: "Ngarai Sianok menghadirkan lembah curam yang megah dengan hamparan sawah hijau dan panorama alam yang luar biasa."
    },
    {
        name: "Museum Rumah Kelahiran Buya Hamka",
        location: [-0.301, 100.277],
        description: "Museum bersejarah yang menyimpan jejak kehidupan Buya Hamka serta nilai budaya dan intelektual Minangkabau."
    },
    {
        name: "Air Terjun Langkuik Tamiang",
        location: [-0.275, 100.175],
        description: "Air terjun yang tersembunyi di tengah alam Agam ini menawarkan suasana sejuk dan panorama yang masih sangat alami."
    },
    {
        name: "Candi Pulau Sawah",
        location: [-1.061, 101.544],
        description: "Candi Pulau Sawah merupakan peninggalan bersejarah Kerajaan Melayu kuno yang menyimpan nilai budaya dan sejarah yang tinggi."
    },
    {
        name: "Candi Padang Roco",
        location: [-1.069, 101.558],
        description: "Candi Padang Roco menjadi saksi kejayaan masa lampau dengan situs arkeologi yang menarik untuk dijelajahi."
    },
    {
        name: "Air Terjun Batanghari",
        location: [-1.312, 101.721],
        description: "Air terjun alami yang menawarkan kesegaran air pegunungan dan suasana hutan yang masih asri."
    },
    {
        name: "Bukit Burung Surga",
        location: [-1.210, 101.650],
        description: "Bukit ini menghadirkan panorama alam yang luas dengan hamparan perbukitan hijau yang memanjakan mata."
    },
    {
        name: "Pulau Punjung",
        location: [-1.116, 101.420],
        description: "Pusat Kabupaten Dharmasraya yang menawarkan suasana khas daerah dengan berbagai aktivitas budaya dan wisata lokal."
    },
    {
        name: "Sungai Batanghari",
        location: [-1.103, 101.525],
        description: "Sungai terpanjang di Sumatra ini menyajikan panorama alam yang indah dan menjadi bagian penting sejarah wilayah Dharmasraya."
    },
    {
        name: "Embung Koto Padang",
        location: [-1.185, 101.495],
        description: "Embung yang dikelilingi pemandangan hijau ini menjadi tempat bersantai yang nyaman dan menarik untuk fotografi."
    },
    {
        name: "Bukit Lantiak",
        location: [-1.248, 101.612],
        description: "Bukit dengan panorama alam terbuka yang menawarkan pemandangan perbukitan dan lembah yang memukau."
    },
    {
        name: "Air Terjun Timbulun",
        location: [-1.335, 101.682],
        description: "Air terjun yang tersembunyi di tengah alam Dharmasraya dengan suasana tenang dan udara yang menyegarkan."
    },
    {
        name: "Taman Hutan Kota Pulau Punjung",
        location: [-1.118, 101.418],
        description: "Ruang terbuka hijau yang menjadi tempat favorit masyarakat untuk berolahraga dan menikmati suasana alam."
    },
    {
        name: "Bukit Selasih",
        location: [-1.170, 101.575],
        description: "Bukit yang menawarkan panorama alam khas Dharmasraya dengan hamparan hijau yang menenangkan."
    },
    {
        name: "Agrowisata Sitiung",
        location: [-1.250, 101.350],
        description: "Kawasan agrowisata yang memperkenalkan berbagai komoditas pertanian serta suasana pedesaan yang asri."
    },
    {
    name: "Lembah Harau",
    location: [-0.113, 100.666],
    description: "Lembah Harau menghadirkan tebing granit raksasa yang menjulang tinggi, air terjun alami, serta hamparan sawah hijau yang menciptakan panorama bak negeri dongeng."
    },
    {
        name: "Kelok Sembilan",
        location: [-0.106, 100.696],
        description: "Kelok Sembilan merupakan mahakarya teknik yang menawarkan pemandangan jembatan megah berpadu dengan lembah hijau yang memukau."
    },
    {
        name: "Kapalo Banda Taram",
        location: [-0.049, 100.579],
        description: "Kapalo Banda Taram menyuguhkan kolam alami berair jernih dengan suasana pedesaan yang tenang dan menyegarkan."
    },
    {
        name: "Air Terjun Sarasah Bunta",
        location: [-0.119, 100.672],
        description: "Air terjun yang mengalir di antara tebing Lembah Harau ini menawarkan kesegaran alami dan panorama yang menenangkan."
    },
    {
        name: "Panorama Ampangan",
        location: [-0.122, 100.683],
        description: "Panorama Ampangan menjadi spot favorit untuk menikmati keindahan Lembah Harau dari sudut pandang yang spektakuler."
    },
    {
        name: "Bukit Batu Manda",
        location: [-0.094, 100.658],
        description: "Bukit Batu Manda menawarkan panorama alam yang luas dengan latar tebing-tebing megah khas Kabupaten Lima Puluh Kota."
    },
    {
        name: "Ngalau Indah",
        location: [-0.225, 100.633],
        description: "Gua alami yang dihiasi stalaktit dan stalagmit ini menyimpan keindahan geologi yang memikat para pengunjung."
    },
    {
        name: "Puncak Marajo",
        location: [-0.086, 100.650],
        description: "Puncak Marajo menghadirkan pemandangan perbukitan hijau dan hamparan alam yang memanjakan mata dari ketinggian."
    },
    {
        name: "Air Terjun Aka Barayun",
        location: [-0.128, 100.668],
        description: "Air Terjun Aka Barayun menawarkan aliran air yang jernih dengan suasana alam yang masih sangat asri."
    },
    {
        name: "Embung Tabek Gadang",
        location: [-0.080, 100.620],
        description: "Embung Tabek Gadang menjadi tempat yang sempurna untuk menikmati ketenangan alam dan panorama perbukitan sekitar."
    },
    {
        name: "Puncak Lontiak",
        location: [-0.101, 100.641],
        description: "Puncak Lontiak menawarkan panorama alam yang luas dengan udara segar dan pemandangan lembah yang memesona."
    },
    {
        name: "Jembatan Ratapan Ibu",
        location: [-0.229, 100.633],
        description: "Jembatan bersejarah ini menjadi saksi perjuangan masa lalu sekaligus tempat menikmati panorama alam Kota Payakumbuh dan sekitarnya."
    },
    {
    name: "Pantai Tiram",
    location: [-0.786, 100.251],
    description: "Pantai Tiram menawarkan hamparan pasir yang luas, deburan ombak yang tenang, dan panorama matahari terbenam yang memikat hati wisatawan."
    },
    {
        name: "Pantai Kata",
        location: [-0.617, 100.120],
        description: "Pantai Kata menghadirkan suasana pantai yang nyaman dengan pemandangan laut lepas dan angin sepoi-sepoi yang menenangkan."
    },
    {
        name: "Pantai Arta",
        location: [-0.750, 100.220],
        description: "Pantai Arta menjadi destinasi favorit keluarga dengan garis pantai yang indah dan suasana yang cocok untuk bersantai."
    },
    {
        name: "Air Terjun Nyarai",
        location: [-0.648, 100.344],
        description: "Air Terjun Nyarai menyuguhkan petualangan alam yang menakjubkan dengan air jernih berwarna kebiruan di tengah hutan tropis yang masih alami."
    },
    {
        name: "Lubuk Nyarai",
        location: [-0.650, 100.345],
        description: "Lubuk Nyarai menawarkan kolam alami yang jernih dan menyegarkan, dikelilingi panorama hutan yang asri."
    },
    {
        name: "Pulau Angso Duo",
        location: [-0.626, 100.108],
        description: "Pulau Angso Duo memikat wisatawan dengan pasir putih, laut biru jernih, dan suasana pulau tropis yang menenangkan."
    },
    {
        name: "Pulau Kasiak",
        location: [-0.621, 100.100],
        description: "Pulau kecil yang menawarkan panorama laut yang memesona dan menjadi lokasi favorit untuk snorkeling dan fotografi."
    },
    {
        name: "Pantai Cermin",
        location: [-0.670, 100.180],
        description: "Pantai Cermin menghadirkan keindahan pesisir dengan hamparan pasir yang bersih dan pemandangan laut yang menawan."
    },
    {
        name: "Tapian Puti",
        location: [-0.566, 100.284],
        description: "Tapian Puti merupakan pemandian alami dengan air yang jernih dan suasana pedesaan yang masih sangat asri."
    },
    {
        name: "Pemandian Lubuk Bonta",
        location: [-0.602, 100.312],
        description: "Pemandian alami yang menawarkan kesegaran air pegunungan dan suasana yang cocok untuk wisata keluarga."
    },
    {
        name: "Bukit Aia Malanca",
        location: [-0.690, 100.295],
        description: "Bukit Aia Malanca menghadirkan panorama perbukitan hijau dan pemandangan alam Padang Pariaman dari ketinggian."
    },
    {
        name: "Pantai Sunua",
        location: [-0.835, 100.270],
        description: "Pantai Sunua menawarkan pemandangan laut yang luas dengan suasana tenang yang cocok untuk menikmati keindahan pesisir Sumatera Barat."
    },
    {
    name: "Equator Bonjol",
    location: [0.017, 100.214],
    description: "Equator Bonjol menjadi destinasi unik tempat garis khatulistiwa melintasi Sumatera Barat, menawarkan pengalaman berdiri tepat di tengah bumi bagian utara dan selatan."
    },
    {
        name: "Museum Tuanku Imam Bonjol",
        location: [0.019, 100.216],
        description: "Museum ini menyimpan jejak perjuangan Tuanku Imam Bonjol dan menjadi destinasi penting untuk mengenal sejarah Perang Padri."
    },
    {
        name: "Puncak Tonang",
        location: [0.102, 100.103],
        description: "Puncak Tonang menghadirkan hamparan bukit hijau dan lautan awan yang menciptakan panorama bak negeri di atas awan."
    },
    {
        name: "Air Terjun Batang Landai",
        location: [0.085, 100.168],
        description: "Air terjun alami yang tersembunyi di tengah hutan ini menawarkan suasana tenang dan kesegaran yang memanjakan pengunjung."
    },
    {
        name: "Air Terjun Rao-Rao",
        location: [0.215, 99.985],
        description: "Air terjun yang mengalir deras di antara bebatuan alami ini menjadi salah satu pesona alam terbaik Kabupaten Pasaman."
    },
    {
        name: "Bukit Harau Pasaman",
        location: [0.142, 100.145],
        description: "Bukit ini menyuguhkan panorama alam terbuka dengan pemandangan perbukitan hijau yang membentang sejauh mata memandang."
    },
    {
        name: "Danau Talao",
        location: [0.195, 100.074],
        description: "Danau alami yang menawarkan ketenangan, udara segar, dan panorama alam yang cocok untuk melepas penat."
    },
    {
        name: "Pemandian Air Panas Cubadak",
        location: [0.125, 100.198],
        description: "Pemandian air panas alami yang menjadi tempat favorit wisatawan untuk bersantai sambil menikmati suasana pegunungan."
    },
    {
        name: "Goa Tembus",
        location: [0.090, 100.121],
        description: "Goa alami dengan lorong batu yang unik dan suasana petualangan yang menarik bagi pecinta wisata alam."
    },
    {
        name: "Bukit Binuang",
        location: [0.156, 100.090],
        description: "Bukit Binuang menawarkan panorama alam Pasaman yang hijau dan udara sejuk khas dataran tinggi."
    },
    {
        name: "Sungai Batang Sumpur",
        location: [0.073, 100.172],
        description: "Sungai jernih yang mengalir di tengah lanskap alami ini menjadi tempat yang ideal untuk menikmati suasana pedesaan yang damai."
    },
    {
        name: "Puncak Alai",
        location: [0.118, 100.138],
        description: "Puncak Alai menghadirkan pemandangan matahari terbit yang memukau dengan latar perbukitan hijau yang memesona."
    },
    {
    name: "Pantai Sasak",
    location: [0.215, 99.685],
    description: "Pantai Sasak menawarkan hamparan pasir yang luas, deburan ombak Samudra Hindia, dan panorama matahari terbenam yang memukau."
    },
    {
        name: "Pulau Pigago",
        location: [0.339, 99.283],
        description: "Pulau Pigago menghadirkan keindahan pulau tropis dengan pantai berpasir putih dan laut biru yang memanjakan mata."
    },
    {
        name: "Pulau Panjang",
        location: [0.301, 99.342],
        description: "Pulau Panjang menawarkan suasana alami yang tenang dengan panorama laut yang masih sangat asri."
    },
    {
        name: "Pantai Air Bangis",
        location: [0.222, 99.545],
        description: "Pantai Air Bangis memikat wisatawan dengan panorama pesisir yang indah dan kehidupan nelayan yang khas."
    },
    {
        name: "Gunung Talamau",
        location: [0.079, 99.982],
        description: "Gunung Talamau menjulang megah sebagai gunung tertinggi di Sumatera Barat dengan panorama alam dan lautan awan yang luar biasa."
    },
    {
        name: "Rimbo Panti",
        location: [0.380, 100.050],
        description: "Rimbo Panti menawarkan pengalaman menjelajahi hutan tropis yang kaya akan flora dan fauna khas Sumatera."
    },
    {
        name: "Air Terjun Tujuh Tingkat",
        location: [0.145, 99.935],
        description: "Air terjun bertingkat ini menghadirkan pemandangan unik dan kesegaran alami di tengah rimbunnya hutan."
    },
    {
        name: "Pantai Muaro Binguang",
        location: [0.188, 99.620],
        description: "Pantai Muaro Binguang menyuguhkan panorama laut yang luas dengan suasana yang tenang dan alami."
    },
    {
        name: "Pulau Harimau",
        location: [0.325, 99.310],
        description: "Pulau Harimau menawarkan keindahan laut biru jernih dan menjadi destinasi menarik bagi pecinta wisata bahari."
    },
    {
        name: "Pantai Sikabau",
        location: [0.170, 99.655],
        description: "Pantai Sikabau menghadirkan pesona pantai barat Sumatera dengan pasir yang indah dan ombak yang menenangkan."
    },
    {
        name: "Muaro Kiawai",
        location: [0.015, 99.895],
        description: "Muaro Kiawai menawarkan panorama alam perbukitan yang hijau serta suasana pedesaan yang masih sangat alami."
    },
    {
        name: "Puncak Talamau",
        location: [0.083, 99.986],
        description: "Puncak Talamau menghadiahkan pemandangan spektakuler berupa hamparan awan, danau-danau kecil, dan lanskap Sumatera Barat dari ketinggian."
    },
    {
        name: "Pantai Carocok Painan",
        location: [-1.351, 100.574],
        description: "Pantai Carocok Painan menawarkan pasir putih, air laut yang jernih, dan panorama pulau-pulau kecil yang memikat setiap wisatawan."
    },
    {
        name: "Jembatan Akar Bayang",
        location: [-1.279, 100.460],
        description: "Jembatan alami yang terbentuk dari akar pohon ini menjadi ikon wisata unik yang memadukan keajaiban alam dan legenda masyarakat setempat."
    },
    {
        name: "Pulau Cingkuak",
        location: [-1.357, 100.577],
        description: "Pulau Cingkuak menyimpan jejak sejarah benteng peninggalan kolonial yang berpadu dengan keindahan laut biru dan pasir putih."
    },
    {
        name: "Bukit Langkisau",
        location: [-1.364, 100.573],
        description: "Bukit Langkisau menghadirkan panorama spektakuler Pantai Painan dari ketinggian dan menjadi surga bagi pecinta paralayang."
    },
    {
        name: "Mandeh",
        location: [-1.182, 100.417],
        description: "Kawasan Mandeh dikenal sebagai Raja Ampat-nya Sumatera Barat dengan gugusan pulau eksotis, teluk yang tenang, dan laut berwarna biru kehijauan."
    },
    {
        name: "Pulau Setan",
        location: [-1.208, 100.391],
        description: "Pulau Setan menawarkan pasir putih bersih, laut sebening kristal, dan suasana tropis yang masih sangat alami."
    },
    {
        name: "Pulau Sironjong",
        location: [-1.197, 100.402],
        description: "Pulau Sironjong menjadi destinasi favorit untuk snorkeling dan menikmati panorama laut yang memukau."
    },
    {
        name: "Pulau Cubadak",
        location: [-1.176, 100.393],
        description: "Pulau Cubadak menghadirkan keindahan pantai tropis dengan hutan alami dan perairan yang kaya akan biota laut."
    },
    {
        name: "Air Terjun Bayang Sani",
        location: [-1.288, 100.525],
        description: "Air Terjun Bayang Sani menawarkan aliran air yang jernih dengan suasana sejuk di tengah rimbunnya hutan tropis."
    },
    {
        name: "Puncak Mandeh",
        location: [-1.185, 100.420],
        description: "Puncak Mandeh menyajikan panorama teluk dan gugusan pulau yang begitu mempesona hingga dijuluki surga tersembunyi Sumatera Barat."
    },
    {
        name: "Pantai Batu Kalang",
        location: [-1.473, 100.591],
        description: "Pantai Batu Kalang memikat dengan batu karang besar, ombak Samudra Hindia, dan panorama matahari terbenam yang menakjubkan."
    },
    {
        name: "Pantai Batu Kereta",
        location: [-1.245, 100.480],
        description: "Pantai Batu Kereta menawarkan pemandangan batuan unik di tepi pantai yang menjadi daya tarik bagi para fotografer."
    },
    {
        name: "Pantai Salido",
        location: [-1.340, 100.565],
        description: "Pantai Salido menghadirkan garis pantai yang indah dengan suasana tenang dan panorama laut yang memanjakan mata."
    },
    {
        name: "Pulau Marak",
        location: [-1.198, 100.383],
        description: "Pulau Marak menawarkan pengalaman wisata bahari dengan pantai eksotis, air jernih, dan panorama bawah laut yang menawan."
    },
    {
        name: "Pulau Pagang",
        location: [-1.133, 100.378],
        description: "Pulau Pagang terkenal dengan pasir putih yang lembut dan laut berwarna biru toska yang menjadi favorit wisatawan."
    },
    {
    name: "Perkampungan Adat Nagari Sijunjung",
    location: [-0.687, 100.954],
    description: "Perkampungan adat ini menghadirkan deretan Rumah Gadang berusia ratusan tahun yang menjadi warisan budaya Minangkabau dan telah diakui sebagai warisan dunia."
    },
    {
        name: "Geopark Silokek",
        location: [-0.838, 100.973],
        description: "Geopark Silokek menawarkan perpaduan tebing karst, sungai jernih, gua alam, dan panorama perbukitan yang menjadikannya salah satu destinasi geowisata terbaik di Sumatera Barat."
    },
    {
        name: "Ngalau Talago",
        location: [-0.829, 100.987],
        description: "Gua alami yang dihiasi stalaktit dan stalagmit ini menyimpan keindahan geologi yang memikat para penjelajah."
    },
    {
        name: "Ngalau Basurek",
        location: [-0.842, 100.982],
        description: "Ngalau Basurek terkenal dengan ornamen batu kapur yang unik dan suasana gua yang eksotis."
    },
    {
        name: "Air Terjun Batang Tayeh",
        location: [-0.865, 100.965],
        description: "Air terjun alami yang mengalir di tengah hutan tropis ini menawarkan suasana sejuk dan panorama yang menenangkan."
    },
    {
        name: "Bukit Batu Tabonek",
        location: [-0.815, 100.948],
        description: "Bukit Batu Tabonek menghadirkan panorama alam Sijunjung dari ketinggian dengan hamparan hijau yang memanjakan mata."
    },
    {
        name: "Sungai Batang Kuantan",
        location: [-0.820, 100.960],
        description: "Sungai yang membelah kawasan Silokek ini menawarkan pemandangan alam yang masih asri dan cocok untuk wisata petualangan."
    },
    {
        name: "Air Terjun Palukahan",
        location: [-0.851, 100.992],
        description: "Air terjun yang tersembunyi di kawasan hutan ini menghadiahkan kesegaran alami dan suasana yang damai."
    },
    {
        name: "Bukit Kunyit",
        location: [-0.779, 100.935],
        description: "Bukit Kunyit menawarkan panorama perbukitan dan lembah yang indah dengan udara segar khas pedalaman Sumatera Barat."
    },
    {
        name: "Puncak Silokek",
        location: [-0.835, 100.975],
        description: "Puncak Silokek menjadi tempat terbaik untuk menikmati bentang alam geopark yang luas dan memukau."
    },
    {
        name: "Lubuk Ulang Aling",
        location: [-0.845, 100.970],
        description: "Kolam alami berair jernih yang dikelilingi bebatuan dan hutan hijau, cocok untuk menikmati kesegaran alam."
    },
    {
        name: "Taman Kehati Sijunjung",
        location: [-0.676, 100.948],
        description: "Taman Kehati menjadi ruang konservasi yang menghadirkan keanekaragaman hayati serta suasana hijau yang menenangkan."
    },
    {
    name: "Pusat Dokumentasi dan Informasi Kebudayaan Minangkabau (PDIKM)",
    location: [-0.466, 100.406],
    description: "PDIKM menjadi jendela budaya Minangkabau dengan koleksi sejarah, rumah gadang megah, dan berbagai informasi tentang adat yang masih lestari hingga kini."
    },
    {
        name: "Minang Fantasi (Mifan)",
        location: [-0.472, 100.418],
        description: "Mifan merupakan taman rekreasi keluarga yang menawarkan berbagai wahana permainan air dan hiburan di tengah udara sejuk Padang Panjang."
    },
    {
        name: "Air Terjun Lembah Anai",
        location: [-0.474, 100.331],
        description: "Air Terjun Lembah Anai menghadirkan panorama alam yang memukau dengan aliran air yang jatuh langsung di tepi jalan lintas Sumatera."
    },
    {
        name: "Puncak Anai",
        location: [-0.459, 100.350],
        description: "Puncak Anai menawarkan panorama lembah hijau dan pegunungan yang menjadi salah satu pemandangan terbaik di Sumatera Barat."
    },
    {
        name: "Masjid Asasi Sigando",
        location: [-0.463, 100.405],
        description: "Masjid bersejarah ini menjadi saksi perkembangan Islam di Minangkabau dengan arsitektur tradisional yang masih terjaga."
    },
    {
        name: "Pasar Kuliner Padang Panjang",
        location: [-0.464, 100.407],
        description: "Surga kuliner yang menghadirkan berbagai makanan khas Minangkabau dengan cita rasa autentik yang menggugah selera."
    },
    {
        name: "Taman Kota Padang Panjang",
        location: [-0.465, 100.406],
        description: "Ruang terbuka hijau yang nyaman untuk bersantai sambil menikmati udara sejuk khas kota pegunungan."
    },
    {
        name: "Lubuk Mata Kucing",
        location: [-0.489, 100.392],
        description: "Kawasan wisata alam yang menawarkan mata air jernih, pepohonan rindang, dan suasana yang tenang untuk berlibur bersama keluarga."
    },
    {
        name: "Puncak Kiambang",
        location: [-0.455, 100.425],
        description: "Puncak Kiambang menyuguhkan panorama Kota Padang Panjang dan pegunungan sekitar yang memanjakan mata dari ketinggian."
    },
    {
        name: "Gunung Marapi View Point",
        location: [-0.444, 100.414],
        description: "Titik pandang yang menghadirkan keindahan Gunung Marapi dan lanskap alam Sumatera Barat yang spektakuler."
    },
    {
        name: "Taman Bermain Bancah Laweh",
        location: [-0.468, 100.410],
        description: "Tempat rekreasi keluarga yang menawarkan suasana nyaman dengan fasilitas bermain dan ruang terbuka yang luas."
    },
    {
        name: "Lembah Gunung Sejati",
        location: [-0.470, 100.420],
        description: "Destinasi wisata alam yang menawarkan udara segar, panorama hijau, dan ketenangan khas daerah pegunungan."
    },
    {
    name: "Ngalau Indah",
    location: [-0.227, 100.631],
    description: "Ngalau Indah menawarkan keindahan gua alami dengan stalaktit dan stalagmit yang memukau serta panorama Kota Payakumbuh dari ketinggian."
    },
    {
        name: "Batang Tabik",
        location: [-0.225, 100.654],
        description: "Batang Tabik merupakan pemandian alami yang terkenal dengan airnya yang jernih dan suasana yang sejuk."
    },
    {
        name: "Jembatan Ratapan Ibu",
        location: [-0.229, 100.633],
        description: "Jembatan bersejarah ini menghadirkan panorama lembah hijau sekaligus menjadi saksi perjuangan rakyat Sumatera Barat di masa lalu."
    },
    {
        name: "Taman Ngalau Indah",
        location: [-0.226, 100.632],
        description: "Taman ini menjadi tempat bersantai favorit dengan udara sejuk dan pemandangan alam yang memanjakan mata."
    },
    {
        name: "Panorama Ampangan",
        location: [-0.218, 100.648],
        description: "Panorama Ampangan menawarkan pemandangan Kota Payakumbuh dan perbukitan hijau yang membentang luas."
    },
    {
        name: "Kapalo Banda Taram",
        location: [-0.049, 100.579],
        description: "Kolam alami berair jernih yang dikelilingi pepohonan rindang ini menjadi tempat sempurna untuk menikmati kesegaran alam."
    },
    {
        name: "Sarasah Murai",
        location: [-0.185, 100.672],
        description: "Air terjun yang tersembunyi di tengah alam ini menawarkan suasana damai dan kesegaran yang menenangkan."
    },
    {
        name: "Puncak Marajo",
        location: [-0.086, 100.650],
        description: "Puncak Marajo menghadirkan panorama perbukitan dan hamparan alam hijau yang sangat memukau dari ketinggian."
    },
    {
        name: "Taman Batang Agam",
        location: [-0.228, 100.634],
        description: "Ruang terbuka hijau yang nyaman untuk bersantai, berolahraga, dan menikmati suasana kota yang asri."
    },
    {
        name: "Bukik Bulek Taram",
        location: [-0.060, 100.585],
        description: "Bukik Bulek menawarkan panorama alam yang luas dengan suasana pedesaan yang masih alami dan menenangkan."
    },
    {
        name: "Puncak Kenagarian Aia Tabik",
        location: [-0.215, 100.661],
        description: "Destinasi ini menghadirkan panorama alam yang indah dengan udara segar khas dataran tinggi."
    },
    {
        name: "Monumen Ratapan Ibu",
        location: [-0.228, 100.632],
        description: "Monumen bersejarah yang mengenang perjuangan rakyat sekaligus menjadi lokasi wisata edukasi yang menarik."
    },
    {
        name: "Lubang Mbah Soero",
        location: [-0.681, 100.776],
        description: "Lubang Mbah Soero mengajak wisatawan menyusuri terowongan tambang batu bara bersejarah yang menjadi saksi perkembangan industri tambang di Sawahlunto."
    },
    {
        name: "Museum Kereta Api Sawahlunto",
        location: [-0.680, 100.776],
        description: "Museum Kereta Api menyimpan koleksi lokomotif dan sejarah transportasi tambang yang pernah menghubungkan Sawahlunto dengan pesisir Sumatera Barat."
    },
    {
        name: "Museum Goedang Ransoem",
        location: [-0.683, 100.775],
        description: "Museum ini menampilkan dapur umum raksasa peninggalan kolonial yang dahulu memasok makanan bagi ribuan pekerja tambang."
    },
    {
        name: "Puncak Cemara",
        location: [-0.675, 100.785],
        description: "Puncak Cemara menawarkan panorama Kota Sawahlunto yang dikelilingi perbukitan hijau dan gemerlap lampu kota saat malam hari."
    },
    {
        name: "Danau Kandi",
        location: [-0.710, 100.800],
        description: "Danau Kandi menghadirkan suasana tenang dengan panorama perbukitan serta berbagai aktivitas wisata keluarga yang menarik."
    },
    {
        name: "Kebun Binatang Kandi",
        location: [-0.708, 100.803],
        description: "Kebun Binatang Kandi menjadi destinasi edukatif yang memperkenalkan berbagai satwa dalam suasana alam yang nyaman."
    },
    {
        name: "Puncak Polan",
        location: [-0.688, 100.784],
        description: "Puncak Polan menyuguhkan panorama pegunungan dan Kota Sawahlunto dari ketinggian yang memanjakan mata."
    },
    {
        name: "Waterboom Sawahlunto",
        location: [-0.705, 100.801],
        description: "Tempat rekreasi keluarga yang menawarkan berbagai wahana air dengan latar perbukitan yang indah."
    },
    {
        name: "Taman Satwa Kandi",
        location: [-0.709, 100.802],
        description: "Taman satwa ini menghadirkan pengalaman wisata edukasi yang menyenangkan bagi keluarga dan anak-anak."
    },
    {
        name: "Masjid Agung Nurul Islam",
        location: [-0.681, 100.775],
        description: "Masjid bersejarah yang menjadi salah satu ikon Kota Sawahlunto dengan arsitektur yang indah dan nilai sejarah yang tinggi."
    },
    {
        name: "Desa Wisata Rantih",
        location: [-0.721, 100.817],
        description: "Desa wisata yang menawarkan suasana pedesaan, budaya lokal, dan keindahan alam khas Sawahlunto."
    },
    {
        name: "Puncak Batu Runcing",
        location: [-0.695, 100.790],
        description: "Puncak Batu Runcing menghadirkan panorama alam yang luas dengan perbukitan hijau yang mengelilingi Kota Sawahlunto."
    },
    
    
    
    
        
        
        
];

// Menambahkan marker ke peta
destinations.forEach(function(place) {

    var marker = L.marker(place.location).addTo(map);

    marker.bindPopup(
        "<b>" + place.name + "</b><br>" +kabupa
        place.description
    );

});
