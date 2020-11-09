const express = require("express")
const app = express()

let tarif = require ("./router/routeTarif")
let admin = require ("./router/routeAdmin")
let level = require ("./router/routeLevel")
let pelanggan = require ("./router/routePelanggan")
let pembayaran = require ("./router/routePembayaran")
let penggunaan = require ("./router/routePenggunaan")
let tagihan = require ("./router/routeTagihan")

app.use("/listrik/tarif", tarif)
app.use("/listrik/admin", admin)
app.use("/listrik/level", level)
app.use("/listrik/pelanggan", pelanggan)
app.use("/listrik/pembayaran", pembayaran)
app.use("/listrik/penggunaan", penggunaan)
app.use("/listrik/tagihan", tagihan)

app.listen(3000, () => {
    console.log("Server Berhasil Dijalankan")
})
