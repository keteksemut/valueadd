// ==========================================================================================
//                                     DEKLARASI VARIABLE
// ==========================================================================================
//
// 
// Kita bisa mendeklarasi variable dengan dua cara:
//
//      * dengan keyword 'var'. Contoh 'var x = 42'. Syntax ini bisa digunakan untuk mendeklarasi variable
//        local ataupun global, tergantung konteks eksekusi.
//      * dengan keyword 'const' atau 'let'. Contoh 'let y = 12'. Syntax ini digunakan untuk mendeklarasi-
//        sebuah variable dalam block-scope local.
//
//  Kita bisa mendeklarasi variable dengan membongkar nilai dari object dengan syntax 'destructuring'.
/*  Contoh: */ const { nama } = profile /* Ini akan membuat variable bernama "nama" dan mengambil nilai korespon dari- */
//  nama key yang sama.
//    
//      catatan: 
//          - object 'profile' harus sudah ada.
//          - Kalau propertinya tidak ada di dalam object, nilai dari variablenya akan dinyatakan 'undefined'.
//
//  Variabel harus dibuat(deklarasi) sebelum digunakan. Biarpun biasanya Javascript mengijinkan deklarasi variable tanpa value,
//  ini akan membuat variabel 'undeclared global'. Di 'strict mode' yang seperti ini akan error, dan kalau bisa dihindari.
//
