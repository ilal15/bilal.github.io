// Fungsi ini akan dijalankan setelah seluruh halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
    // 1. Ambil elemen-elemen penting
    const toggleButton = document.getElementById('toggle-bio-button');
    const bioTextElement = document.getElementById('bio-text');
    const nameDisplay = document.getElementById('name-display');

    // 2. Tentukan teks biografi penuh dan ringkas
    const fullBio = bioTextElement.textContent.trim();
    const shortBioLength = 150; 
    let shortBio = fullBio.substring(0, shortBioLength);

    // Pastikan shortBio tidak memotong kata, tambahkan "..."
    if (fullBio.length > shortBioLength) {
        shortBio = shortBio.substring(0, shortBio.lastIndexOf(" ")) + '...';
    }

    // 3. Inisialisasi: tampilkan biografi yang ringkas
    bioTextElement.textContent = shortBio;
    toggleButton.textContent = 'Lihat Selengkapnya';

    let isFullBio = false; // Status: False berarti yang ditampilkan adalah ringkasan

    // 4. Tambahkan event listener untuk tombol (Toggle Bio)
    toggleButton.addEventListener('click', function() {
        if (isFullBio) {
            // Ubah menjadi ringkas
            bioTextElement.textContent = shortBio;
            toggleButton.textContent = 'Lihat Selengkapnya';
            isFullBio = false;
        } else {
            // Ubah menjadi penuh
            bioTextElement.textContent = fullBio;
            toggleButton.textContent = 'Lihat Ringkasan';
            isFullBio = true;
        }
    });

    // 5. Tambahkan interaksi visual (Contoh: Efek hover pada Nama)
    nameDisplay.addEventListener('mouseover', function() {
        nameDisplay.style.color = '#3498db'; // Biru saat di-hover
    });
    nameDisplay.addEventListener('mouseout', function() {
        nameDisplay.style.color = 'white'; // Kembali ke warna putih
    });
});