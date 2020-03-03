var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

var noId = ['0001', '0002', '0003', '0004'];
var nama = ['Roman Alamsyah', 'Dika Sembiring', 'Winona', 'Bintang Senjaya'];
var tempatLahir = ['Bandar Lampung', 'Medan', 'Ambon', 'Martapura'];
var tglLahir = ['21/05/1989', '10/10/1992', '25/12/1965', '6/4/1970'];
var hobi = ['Membaca', 'Bermain Gitar', 'Memasak', 'Berkebun'];

for (var i=0; i<=input.length-1; i++)
{
    console.log('No.ID : ' + noId[i]);
    console.log('Nama : ' + nama[i]);
    console.log('TTL : ' + tempatLahir[i] + ', ' + tglLahir[i]);
    console.log('Hobi : ' + hobi[i]);
}