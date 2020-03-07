function cariMean (arr)
{
    var total = 0, i ;

    for (var i=0; i<arr.length; i++)
    {
        total = total + arr[i];
    }
    return total / arr.length;
}
console.log(Math.round(cariMean([1, 2, 3, 4, 5])));
console.log(Math.round(cariMean([3, 5, 7, 5, 3])));
console.log(Math.round(cariMean([6, 5, 4, 7, 3])));
console.log(Math.round(cariMean([1, 3, 3])));
console.log(Math.round(cariMean([7, 7, 7, 7, 7]))); 
