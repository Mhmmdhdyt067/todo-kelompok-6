// US-2: Menambahkan tugas dan menandai tugas selesai.

const input = document.getElementById("inputTugas");
const tombol = document.getElementById("btnTambah");
const daftar = document.getElementById("daftarTugas");
const pesanKosong = document.getElementById("pesanKosong");

function tambahTugas() {
    const teks = input.value.trim();

    // Jangan menambahkan tugas jika input masih kosong.
    if (teks === "") {
        input.focus();
        return;
    }

    const item = document.createElement("li");
    item.textContent = teks;

    // Klik satu kali untuk mengubah status selesai/belum selesai.
    item.addEventListener("click", function () {
        item.classList.toggle("selesai");
    });

    daftar.appendChild(item);
    input.value = "";
    input.focus();

    // Sembunyikan pesan ketika sudah ada tugas.
    pesanKosong.classList.add("sembunyi");
}

tombol.addEventListener("click", tambahTugas);

// Tombol Enter juga dapat digunakan untuk menambahkan tugas.
input.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        tambahTugas();
    }
});
