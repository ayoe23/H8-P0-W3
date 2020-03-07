function palindrome (kata)
{
    var currentString = kata;
    var newString = '';

    for (var i=kata.length-1; i>=0; i--)
    {
        newString = newString + currentString[i];
    }

    if (newString === currentString)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

console.log(palindrome('katak'));
console.log(palindrome('blanket'));
console.log(palindrome('civic'));
console.log(palindrome('kasur rusak'));
console.log(palindrome('mister'));