// Toggle class active untuk humberger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#navbar-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

//klik diluar elemen
const hm = document.querySelector('#navbar-menu');

document.addEventListener('click', function(e){
    if(!hm.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }

});

function displayMessage() {
    const nama = document.getElementById('nama').value;
    const tanggalLahir = document.getElementById('tanggalLahir').value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked').value;
    const pesan = document.getElementById('pesan').value;

    if (!nama || !tanggalLahir || !pesan) {
        alert('Data masih kosong maka data belum lengkap. Mohon dilengkapi.');
        return;
    }

    document.getElementById('displayNama').innerText = nama;
    document.getElementById('displayTanggalLahir').innerText = tanggalLahir;
    document.getElementById('displayJenisKelamin').innerText = jenisKelamin;
    document.getElementById('displayPesan').innerText = pesan;

    const now = new Date();
    document.getElementById('currentTime').innerText = now.toString();
}

document.addEventListener("DOMContentLoaded", function() {
    function replaceName() {
        let name = prompt("Halo, siapa nama Anda?", "");
        if (name) {
            document.getElementById("name").innerText = name;
        }
    }

    // Panggil replaceName saat halaman pertama kali dimuat
    replaceName();

    // Tambahkan event listener ke tombol
    document.getElementById("tombol").addEventListener("click", replaceName);
});

document.addEventListener('DOMContentLoaded', function() {
    const bannerContainer = document.querySelector('.home');
    const images = [
        'img/bg/bg-1.jpg',
        'img/bg/bg-2.jpg',
        'img/bg/bg-3.jpg',
    ];
    let currentImageIndex = 0;
    const changeInterval = 5000;

    function changeBannerImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        bannerContainer.style.backgroundImage = `url(${images[currentImageIndex]})`;
    }

    setInterval(changeBannerImage, changeInterval);
});