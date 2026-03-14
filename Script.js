function pesan() {
    console.log("Tombol ditekan!"); // Untuk cek di inspect elemen
    
    const content = document.getElementById("premium-content");
    
    if (content) {
        // 1. Tampilkan konten
        content.style.display = "block";
        
        // 2. Paksa animasi muncul
        setTimeout(() => {
            const sections = document.querySelectorAll('section');
            sections.forEach(sec => sec.classList.add('reveal'));
            
            // 3. Scroll ke bawah
            content.scrollIntoView({ behavior: 'smooth' });
            
            // 4. Munculkan Alert
            alert("Hallo!\n\nSelamat menjelajahi profil eksklusif Jennie Kim & BLACKPINK.");
        }, 100);
    } else {
        console.error("Elemen premium-content tidak ditemukan!");
    }
}

// Fungsi animasi saat scroll
const revealSection = () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add('reveal');
        }
    });
};

const tampilkanTanggal = () => {
    const hasilElement = document.getElementById("hasil");
    if (hasilElement) {
        const tanggal = new Date();
        hasilElement.innerHTML = "Waktu Akses: " + tanggal.toLocaleString('id-ID');
    }
};

window.addEventListener('scroll', revealSection);
window.addEventListener('load', () => {
    tampilkanTanggal();
});