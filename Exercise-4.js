var dataHandling2 = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca'];

dataHandling2.splice(1,1, 'Roman Alamsyah Elsharawi');
dataHandling2.splice(2,1, 'Provinsi Bandar Lampung');
dataHandling2.splice(4,2, 'Pria', 'SMA Internasional Metro');

console.log(dataHandling2);

var tgl = ('21 05 1989');
var blnSplit = tgl.split(' ');

var bulan = blnSplit[1];

switch (bulan)
{
    case '01' :
        {
            console.log('Januari');
            break;
        }
    case '02' :
        {
            console.log('Februari');
            break;
        }
    case '03' :
        {
            console.log('Maret');
            break;  
        }    
    case '04' :
        {
            console.log('April');
            break;
        }
    case '05' :
        {
            console.log('Mei');
            break;
        }
    case '06' :
        {
            console.log('Juni');
            break ;
        }    
    case '07' :
        {
            console.log('Juli');
            break ;
        }    
    case '08' :
        {
            console.log('Agustus');
            break;
        }    
    case '09' :
        {
            console.log('September');
            break;
        }    
    case '10' :
        {
            console.log('Oktober');
            break;
        }    
    case '11' :
        {
            console.log('November');
            break;
        }    
    case '12' :
        {
            console.log('Desember');
            break;
        }
    default:
    {
        console.log('Empty');
    }    
}

blnSplit.sort(function(a,b) {
    return b - a;
});
console.log (blnSplit);


var tgl = blnSplit;
tgl.sort(function(a, b){
    return a - b;
});
console.log(tgl.join('-'));


console.log(dataHandling2[1].slice(0,15));





        


