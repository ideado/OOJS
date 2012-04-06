/*------------------------------
Multiple inheritance
def.: child inherits from more than one parent
--------------------------------*/
function multi()
{
    var n={},stuff,j=0,len=arguments.length;
    for(j=0;j<len;j++)
    {
        stuff=arguments[j];
        for(var i in stuff)
        {
            n[i]=stuff[i];
        }
    }
    return n;
}
var shape={
    name:'shape',
    toString:function(){return this.name;}
};
var twoDee=
{
    name:'2D shape',
    dimensions:2
};
var triangle=multi
(
    shape,
    twoDee,
    {    
        name:'Triangle',
        getArea: function(){return this.side * this.height / 2;},
    side:5,
    height:10
    }
);
triangle.getArea();
triangle.toString();
triangle;
/*-----------------------------------
multi() loops through the input objects in the order they appear and if it happens that two of them have the same property, the one passed later will take precedence
-------------------------------------*/
