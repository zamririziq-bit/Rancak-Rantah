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
        
];

// Menambahkan marker ke peta
destinations.forEach(function(place) {

    var marker = L.marker(place.location).addTo(map);

    marker.bindPopup(
        "<b>" + place.name + "</b><br>" +
        place.description
    );

});
