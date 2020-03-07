function pasanganTerbesar (num)
{
    var strNum =String(num);
    var angkaTerbesar=0;
    
    for (var i=0; i < strNum.length-1; i++)
    {
        var angka = Number(strNum[i] + strNum[i+1]);

        if (angka > angkaTerbesar)
        {
            angkaTerbesar = angka;
        }
    }
    
    return angkaTerbesar;

}  
console.log(pasanganTerbesar(641573));
console.log(pasanganTerbesar(12783456)); 
console.log(pasanganTerbesar(910233)); 
console.log(pasanganTerbesar(71856421)); 
console.log(pasanganTerbesar(79918293)); 