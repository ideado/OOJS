/*----------------------------------
Objects Inherit from Objects
------------------------------------*/
function extendCopy(p)
{
    var c={};
    for(var i in p)
    {c[i]=p[i];}
    c.uber=p;
    return c;
}
var shape=
{
    name:'shape',
    toString: function() {return this.name;}
};
var twoDee=extendCopy(shape);
twoDee.name='2D shape';
twoDee.toString=function()
{
    return this.uber.toString()+ ' ' + this.name;
};
var triangle=extendCopy(twoDee);
triangle.name='triangle';
triangle.getArea=function()
{
    return this.side* this.height /2;
}
triangle.side=5;
triangle.height=10;
triangle.getArea();
triangle.toString();
/*----------------------------------
inheritence -> deepCopy implementation:
----------------------------------*/
function deepCopy(p,c)
{
    var c = c || {};
    for(var i in p)
    {
        if(typeof p[i] === 'object')
        {
            c[i] = (p[i].constructor === Array) ? [] : {};
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
    numbers:[1,2,3],
    letters:['a','b','c','d'],
    obj: {prop: 1},
    bool: true
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
/*----------------------------------------
prototypal inheritance -> use a parent object as the prototype of a child object
----------------------------------------*/
function object(o)
{
    var n;
    function F(){}
    F.prototype=o;
    n=new F();
    n.uber = o;
    return n;
}
var triangle=object(twoDee);
triangle.name='triangle';
triangle.getArea=function()
{
    return this.side * this.height / 2;
};
triangle.toString();
triangle.getArea();
triangle.side=5;
triangle.height=10;
triangle.getArea();