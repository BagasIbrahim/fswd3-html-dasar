//Data type Number (int and float)
let a = 20
a = 21 + 22
console.log(a)

//Data type number (Infinity and NaN)
let b = 500/0
console.log(b)
console.log(NaN * 3)

//Data type bigInt
const bigInt = 1231242525252352351241251512512512n
console.log(bigInt)

//Data type String and Boolean
let nama1 = "Bagas"
let nama2 = 'Maulana'
let nama3 = `Ibrahim`

console.log("Halo perkenalkan nama saya" + " " +nama1)
console.log("Halo perkenalkan nama saya" + " " +nama2)
console.log(`Halo nama saya Bagas Maulana ${nama3}`);

let c = 20 > 32
let d = 32 < 44

console.log(c)
console.log(d)

//Data type Null and Undefined
let uang = null;
let uang2;

console.log(uang)
console.log(uang2)

//Data type object
let karyawan = {
    nama: "Maulana Ibrahim",
    umur: `22`,
    job: `Web Developer`,   
}

console.log(`nama saya adalah ${karyawan.nama} dan saya berumur ${karyawan.umur} dan saya bekerja sebagai ${karyawan.job} di perushan abc`)