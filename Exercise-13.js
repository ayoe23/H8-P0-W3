function targetTerdekat(arr) 
{
    var hurufO = 0 ;    
    var hurufX = [];
    var temp1 = 0;
    var arrNew = [];

  
    for (var i=0; i<arr.length; i++)
    {
        if (arr[i] === 'x')
        {
            temp1 = i;
            hurufX.push(temp1);
        }
        else if (arr[i] === 'o')
        {
            hurufO = i;
        }
    }   

    if (hurufX.length == 0 )
    {
        return 0;
    }
    
    for (var j=0; j<hurufX.length; j++)
    {
        if (hurufO > hurufX[j])
        {
            temp2 = hurufO - hurufX[j];
            arrNew.push(temp2);
        }
        else if (hurufO < hurufX[j])
        {
            temp2 = hurufX[j] - hurufO;
            arrNew.push(temp2);
        }
    }   
    
        for(var i=0; i<arrNew.length; i++)
    {
        for (j=0; j<arrNew.length; j++)
        {
            if (arrNew[j] > arrNew[j+1])
            {
                var tampung = arrNew[j+1];
                arrNew[j+1] = arrNew[j];
                arrNew[j] = tampung;
            }
        }
    }

return arrNew[0];
}

    
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
