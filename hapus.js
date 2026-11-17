// US-5: Menghapus tugas dengan klik dua kali.

const daftarHapus = document.getElementById("daftarTugas");
const pesanKosongHapus = document.getElementById("pesanKosong");

daftarHapus.addEventListener("dblclick", function (event) {
    // Pastikan yang diklik dua kali adalah elemen tugas (LI).
    if (event.target.tagName === "LI") {
        event.target.remove();

        // Tampilkan kembali pesan jika daftar sudah kosong.
        if (daftarHapus.children.length === 0) {
            pesanKosongHapus.classList.remove("sembunyi");
        }
    }
});
