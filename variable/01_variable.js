// ==========================================================================================
//                                      VARIABLE
// ==========================================================================================


// Kita memakai variable sebagai nama simbolik untuk menyimpan nilai dalam program kita.
// Nama variable (disebut identifier) harus mengikuti beberapa aturan:
//      * Nama variable harus diawali dengan huruf(boleh besar atau kecil), underscore(_), atau dollar sign($).
//        setelahnya boleh diikuti angka. Contoh :
//        
//                  Valid: let Nama;          Tidak Valid: let 1abc;
//                         let nama;                       let 2def;
//                         let $harga;                     let %nama;
//                         let a1;                         let @harga;
//                         let b2;
//                         let c3;
//
//      * nama variable itu case sensitive jadi kalau kita mendeklarasi variable `let nama` dan `let Nama`.
//        ini akan membuat dua variable. Karena keduanya berbeda pada hurufnya.
//      * nama variable juga boleh memakai huruf-huruf lain seperti "å" atau "ü", dan bisa juga memakai
//        kode unicode.
//
//      (TIPS)
//      - Secara best practice penamaan variable menggunakan camelCase. Contoh:
//                  let umurKu;
//                  let namaKu
//                  let hargaBarang;
//                  let totalHarga;
//

