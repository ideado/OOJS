/* ===============================================
Using a Mix of Prototypal Inheritance and Copying Properties
 ===============================================*/
function objectPlus(o,stuff)
{
    var n;
    function f(){};
    f.prototype=o;
    n=new f();
    n.uber=o;
    for(var i in stuff)
    {
       n[i]=stuff[i];
    }
    return n;
}
/*===========================================
o=> object to inherit from
stuff=> object with additional methods
=============================================*/
var shape = {
    name:'shape',
    toString:function()
    {
        return this.name;
    }
};
var twoDee=objectPlus(shape,
        {
            name: '2D shape',
            toString: function()
                        {
                            return this.uber.toString() + ', ' + this.name; 
                        }    
        });
var triangle = objectPlus(twoDee,
                {
                    name:'triangle',
                    getArea:function()
                    {
                        return this.side * this.height /2 ;
                    },
                    side : 0,
                    height : 0
                });
var my=objectPlus(triangle,{side : 4, height: 4});
my.getArea();
my.toString(); /*"shape, 2D shape, Triangle, Triangle"*/
var my=objectPlus(triangle,{side : 4, height: 4,name: 'My 4x4'});
my.getArea();
my.toString();/*"shape, 2D shape, triangle, My 4x4"*/