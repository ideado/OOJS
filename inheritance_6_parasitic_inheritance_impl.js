/*----------------------------------------
Parasitic Inheritance
def. It basically means that you can have a function that creates objects by taking all of the functionality of another object, augmenting it and returning it, "pretending that it has done all the work".
------------------------------------------*/
function object(o)
{
    var n;
    function F(){}
    F.prototype=o;
    n=new F();
    n.uber = o;
    return n;
}
var twoD=
{
    name:'2D shape',
    dimensions: 2
};
function triangle(s,h)
{
    var that=object(twoD);
    that.name = 'Triangle';
    that.getArea = function(){return this.side * this.height / 2;};
    that.side = s;
    that.height = h;
    return that;
}
var t=new triangle(5,10);
t;
var t1=triangle(5,10);
t1;
/*
Because triangle() is a normal function, not a constructor, it doesn't require the new operator. But because it returns an object, calling it with new by mistake will work in exactly the same way.
*/