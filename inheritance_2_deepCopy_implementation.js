/*-----------------------------------
inheritence - deepCopy implementation
-------------------------------------*/
function deepCopy(p,c)
{
    var c = c  {};
    for(var i in p)
    {
        if(typeof p[i] === 'object')
        {
            c[i] = (p[i].constructor === Array)  []  {};
            deepCopy(p[i],c[i]);
        }
        else
        {
            c[i] = p[i];
        }
    }
    return c;
}
var parent={
    numbers[1,2,3],
    letters['a','b','c','d'],
    obj {prop 1},
    bool true
};
parent;
var mydeep=deepCopy(parent);
var myshallow=extendCopy(parent);
mydeep.numbers.push(4,5,6);
mydeep.numbers;
parent.numbers;
myshallow.numbers.push(10);
myshallow.numbers;
parent.numbers;
mydeep.numbers;