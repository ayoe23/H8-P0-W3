function angkaPalindrome(num)
{
    while (num > 0)
    {
        num++;

        var strNum = num.toString();
        var newString = '';

        for (var i=strNum.length-1; i>=0; i--)
        {
            newString = newString + strNum[i];    
        }
        if (newString == num)
        {
            return num;
        }
    }   
}
console.log(angkaPalindrome(8));
console.log(angkaPalindrome(10));
console.log(angkaPalindrome(117));
console.log(angkaPalindrome(175));
console.log(angkaPalindrome(1000)); 
