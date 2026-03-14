function pesan() {
    // 1. Ambil elemen konten utama
    const content = document.getElementById("premium-content");
    
    // 2. Tampilkan konten
    content.style.display = "block";
    
    // 3. Scroll otomatis ke konten
    content.scrollIntoView({ behavior: 'smooth' });

    // 4. Jalankan fungsi reveal agar konten langsung terlihat (tidak transparan)
    setTimeout(() => {
        revealSection();
        
        // 5. Munculkan Alert setelah konten muncul
        alert("Hallo!\n\nSelamat menjelajahi profil eksklusif Jennie Kim & BLACKPINK.");
    }, 500);
}

// Fungsi animasi saat scroll
const revealSection = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight - 150;

        if (sectionTop < triggerPoint) {
            section.classList.add('reveal');
        }
    });
};

// Fungsi menampilkan tanggal akses
const tampilkanTanggal = () => {
    const hasilElement = document.getElementById("hasil");
    if (hasilElement) {
        const tanggal = new Date();
        hasilElement.innerHTML = "Waktu Akses: " + tanggal.toLocaleString('id-ID');
    }
};

// Event listener
window.addEventListener('scroll', revealSection);
window.addEventListener('load', () => {
    tampilkanTanggal();
});