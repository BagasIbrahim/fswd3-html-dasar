alert("SELAMT DATANG \nDIPERMAINAN SUIT JEPANG")

let ulang = true
while (ulang) {
    // Menangkap pilihan player
    let player = prompt('pilih : gunting, batu, kertas')


    // Menangkap pilihan bot
    // Membangkitkan bilangan random
    let bot = Math.random()

    if (bot < 0.34) {
        bot = "gunting"
    } else if (bot >= 0.34 && bot <= 0.67) {
        bot = "batu"
    } else {
        bot = "kertas"
    }

    // Mentukan rules
    let hasil = ""

    if (player == bot) {
        hasil = 'SERI!'
    } else if (player == 'gunting') {
        hasil = (bot == "batu") ? "KALAH" : "MENANG"
    } else if (player == 'kertas') {
        hasil = (bot == "gunting") ? "KALAH" : "MENANG"
    } else if (player == 'batu') {
        hasil = (bot == "kertas") ? "KALAH" : "MENANG"
    } else {
        hasil = "Tidak memilih sesuai pilihan"
    }
    // Tampilkan hasil

    alert(`KAMU MEMILIH : ${player} \nDAN KOMPUTER MEMILIH : ${bot} \nMaka hasilnya : Kamu ${hasil}`)

    ulang = confirm("INGIN MENGULANG PERMAINAN???")
}

alert ("TERIMA KASIH SUDAH BERMAIN!!!")