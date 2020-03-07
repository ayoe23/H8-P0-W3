
function groupAnimals(animals) {

     // Proses Sortir
    for (var i=0; i<animals.length; i++)
    {
        for (var j=0; j<animals.length; j++)
        {
            if (animals[j] > animals[j+1])
            {
                var tampung = animals[j+1];
                animals[j+1] = animals[j];
                animals[j] = tampung;
            }
        }      
    }
    
    // Pengelompokan MultiDimensi
    
    var arrTemp = [];

    for (var i=0; i<animals.length; i++)
    {
        var cek = true;

        for (var j=0; j<arrTemp.length; j++)
        {
            if (animals[i][0] == arrTemp[j][0][0])
            {
                cek = false;
                arrTemp[j].push(animals[i])                
            }
        }
        if (cek)
        {
            arrTemp.push([animals[i]]);
        }
    }

    return arrTemp;
  }
  
  
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
  // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
  console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]