const daftarHitung = document.getElementById("daftarTugas");
const labelJumlah = document.getElementById("jumlahTugas");

function perbaruiJumlah() {
    const jumlah = daftarHitung.children.length;
    labelJumlah.textContent = "Jumlah tugas: " + jumlah;
}

// MutationObserver mendeteksi tugas yang ditambahkan atau dihapus.
const pengamatDaftar = new MutationObserver(perbaruiJumlah);

pengamatDaftar.observe(daftarHitung, {
    childList: true
});

// Tampilkan jumlah awal saat halaman pertama kali dibuka.
perbaruiJumlah();
