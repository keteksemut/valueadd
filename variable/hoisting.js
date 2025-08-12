
// ==========================================
//             Function Hoisting
// ==========================================

// Hoisting adalah ketika deklarasi variable dan function dinaikkan ke atas,
// ke atas scope sebelum kode dijalankan. Ini artinya kita bisa pake variabel dan-
// fungsi sebelum mereka dibuat. Tapi dengan beberapa peringatan.


salamHallo(); // Berhasil

function salamHallo(){ // deklarasi fungsi dinaikkan ke atas full-body, jadi salamHallo() tersedia sebelum fungsinya dibuat.
    console.log("Hallo!");
}

// ==========================================
//           
// ==========================================
