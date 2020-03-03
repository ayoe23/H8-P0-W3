function balikString (sebuahKalimat)
{
    var before = sebuahKalimat;
    var after = '';

    for (var i=sebuahKalimat.length-1; i>=0; i--)
    {
        after = after + before[i];
    }
    return after;
}
console.log(balikString('Hello World!'));
