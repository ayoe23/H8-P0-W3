function tentukanDeretAritmatika(arr) 
{
    var pola = arr[1] - arr[0];
       
    for (var i=0; i<arr.length-1; i++)
    { 
        if (pola != arr[i+1]-arr[i])
        {
            return false;
        }             
    } 
    return true;
}
  
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); 
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); 
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); 
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); 
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); 