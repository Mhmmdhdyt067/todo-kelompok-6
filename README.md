# To-Do List Kelompok

Aplikasi web To-Do List sederhana yang dibuat untuk Praktikum Rekayasa Perangkat Lunak dengan materi Scrum serta kolaborasi Git dan GitHub.

## Deskripsi

Aplikasi ini membantu pengguna mencatat daftar pekerjaan, menandai pekerjaan yang sudah selesai, menghapus pekerjaan, dan melihat jumlah pekerjaan yang tersimpan pada daftar selama halaman dibuka.

## Fitur

- Menambahkan tugas melalui tombol **Tambah**.
- Menambahkan tugas dengan menekan tombol **Enter**.
- Menolak input kosong.
- Menandai tugas selesai dengan satu kali klik.
- Menghapus tugas dengan dua kali klik.
- Menghitung jumlah tugas secara otomatis.
- Menampilkan pesan ketika daftar tugas masih kosong.

## Teknologi

- HTML5
- CSS3
- JavaScript (Vanilla)

Aplikasi tidak menggunakan framework, database, maupun instalasi package tambahan.

## Struktur Folder

```text
todo-kelompok/
├── index.html
├── style.css
├── script.js
├── hapus.js
├── hitung.js
└── README.md
```

## Cara Menjalankan

1. Clone repository:

   ```bash
   https://github.com/Mhmmdhdyt067/todo-kelompok-6.git
   ```

2. Masuk ke folder proyek:

   ```bash
   cd todo-kelompok-6
   ```

3. Buka file `index.html` menggunakan browser (misalnya Chrome atau Firefox).

Tidak perlu menjalankan server atau menginstal dependency.

## Cara Menggunakan

1. Ketik nama pekerjaan pada kotak input.
2. Klik **Tambah** atau tekan **Enter**.
3. Klik satu kali pada tugas untuk menandainya selesai.
4. Klik dua kali pada tugas untuk menghapusnya.
5. Lihat jumlah tugas pada bagian **Daftar Pekerjaan**.

Catatan: daftar tugas hanya disimpan selama halaman masih terbuka. Jika halaman dimuat ulang, daftar akan kembali kosong karena aplikasi ini belum menggunakan penyimpanan permanen.

## Anggota Kelompok

Isi nama anggota dan perannya sesuai pembagian kelompok praktikum:

| No. | Nama Anggota         | Peran         | User Story                        |
| --: | -------------------- | ------------- | --------------------------------- |
|   1 | Purnama F. T. P. K.  | Product Owner | US-4: README                      |
|   2 | Muhammad Hidayat     | Scrum Master  | US-1: Halaman utama               |
|   3 | Sitti Munawara       | Developer 1   | US-2: Tambah dan selesaikan tugas |
|   4 | Fitria Rizky Oktavia | Developer 2   | US-3: Tampilan                    |
|   5 | Zollahuddin Ahmad    | Developer 3   | US-5: Hapus tugas                 |

## Definition of Done

- [ ] Halaman dapat dibuka di browser.
- [ ] Pengguna dapat menambahkan tugas.
- [ ] Tugas dapat ditandai selesai.
- [ ] Tugas dapat dihapus dengan klik dua kali.
- [ ] Jumlah tugas tampil dan diperbarui otomatis.
- [ ] Tampilan aplikasi rapi.
- [ ] README menjelaskan aplikasi dan cara menjalankannya.

## Kolaborasi Git dan GitHub

Setiap anggota mengerjakan file pada branch masing-masing, membuat commit, melakukan push, lalu mengajukan Pull Request. Perubahan diperiksa melalui code review dan digabungkan ke branch `main` oleh Scrum Master.
