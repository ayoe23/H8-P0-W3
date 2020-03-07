function hitungJumlahKata (kalimat)
{
    var spaceCount = 0 ;

    for (var i=0; i<kalimat.length; i++)
    {
        if (kalimat[i] == ' ')
        {
            spaceCount = spaceCount + 1;
        }
    }
    
    return spaceCount + 1; 
}
console.log(hitungJumlahKata('I have a dream')); 
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); 
console.log(hitungJumlahKata('A song to sing')); 
console.log(hitungJumlahKata('I')); 
console.log(hitungJumlahKata('I believe I can code')); 