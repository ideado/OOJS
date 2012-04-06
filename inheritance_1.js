function Shape()
{
    this.name='shape';
    this.toString=function()
    {
        return this.name;
    }
}
function TwoDShape()
{
    this.name='2D shape';
}
function Triangle(size,height)
{
    this.name='triangle';
    this.size=size;
    this.height=height;
    this.getArea=function()
    {
        return this.size*height/2;
    }
}
TwoDShape.prototype=new Shape();
Triangle.prototype=new TwoDShape();
TwoDShape.prototype.constructor=TwoDShape;
Triangle.prototype.constructor=Triangle;
var my=new Triangle(5,10);
console.log(my.getArea());
my.toString();
my.constructor;
my instanceof Shape;
my instanceof TwoDShape;
my instanceof Triangle;
my instanceof Array;
Shape.prototype.isPrototypeOf(my);
TwoDShape.prototype.isPrototypeOf(my);
Triangle.prototype.isPrototypeOf(my);
String.prototype.isPrototypeOf(my);
function Shape(){}
Shape.prototype.name='shape';
Shape.prototype.toString=function()
{
    return this.name;
}
function TwoDShape(){}
TwoDShape.prototype=new Shape();
TwoDShape.prototype.constructor=TwoDShape;
TwoDShape.prototype.name='2D shape';
function Triangle(size,height)
{
    this.size=size;
    this.height=height;
}
//first the inheritance
Triangle.prototype=new Shape;
Triangle.prototype.constructor=TwoDShape;
//... then, augment the prototype
TwoDShape.prototype.name='2D shape';
function Triangle(size,height)
{
    this.size=size;
    this.height=height;
}
Triangle.prototype=new TwoDShape();
Triangle.prototype.constructor=Triangle;
Triangle.prototype.name='Triangle';
Triangle.prototype.getArea=function()
{
    return this.size*this.height/2;
}
var my=new Triangle(5,10);
my.getArea();
my.toString();
Shape.prototype.firstname='first name';
my.firstname;
TwoDShape.prototype.firstname;
/*-------------------------------
    inheriting the prototype only
---------------------------------*/
function Shape(){};
//augment the prototype of Shape
Shape.prototype.name='shape';
Shape.prototype.toString=function()
{return this.name;}
function TwoDShape(){}
//take care of the inheritance first
TwoDShape.prototype=Shape.prototype;
TwoDShape.prototype.constructor=TwoDShape;
//augment the prototype
TwoDShape.prototype.name='2D Shape';
function Triangle(size,height)
{
    this.size=size;
    this.height;
}
//taking care of the inheritance
Triangle.prototype=TwoDShape.prototype;
Triangle.prototype.constructor=Triangle;
Triangle.prototype.name='Triangle';
Triangle.prototype.getArea=function()
{
    return this.size * this.height / 2;
}
var my=new Triangle(5,10);
my.getArea();
var s=new Shape();
s.name;
/*-------------------------------
    inheritance through 
    a temporary constructor
---------------------------------*/
function Shape(){}
//augment prototype
Shape.prototype.name='shape';
Shape.prototype.toString=function(){return this.name;}
function TwoDShape(){}
var F=function(){}
F.prototype=Shape.prototype;
TwoDShape.prototype=new F();
TwoDShape.prototype.constructor=TwoDShape;
TwoDShape.prototype.name="2D shape";
function Triangle(size,height)
{
    this.size=size;
    this.height=height;
}
var F=function(){};
F.prototype=TwoDShape.prototype;
Triangle.prototype=new F();
Triangle.prototype.constructor=Triangle;
Triangle.prototype.name='Triangle';
Triangle.prototype.getArea=function()
{
    return this.size * this.height/2;
};
var my=new Triangle(5,10);
my.getArea();
my.toString();
my.__proto__.__proto__.__proto__.constructor;
my.__proto__.constructor;
my.__proto__.__proto__.constructor;
my.__proto__.__proto__.__proto__.constructor;
/*--------------------------------------------
Uber—Access to the Parent from a Child Object
--------------------------------------------*/
function Shape(){}
// augment prototype
Shape.prototype.name = 'shape';
Shape.prototype.toString = function(){
var result = [];
if (this.constructor.uber) {
result[result.length] = this.constructor.uber.toString();
}
result[result.length] = this.name;
return result.join(', ');
};
function TwoDShape(){}
// take care of inheritance
var F = function(){};
F.prototype = Shape.prototype;
TwoDShape.prototype = new F();
TwoDShape.prototype.constructor = TwoDShape;
TwoDShape.uber = Shape.prototype;
// augment prototype
TwoDShape.prototype.name = '2D shape';
function Triangle(side, height) {
this.side = side;
this.height = height;
}
// take care of inheritance
var F = function(){};
F.prototype = TwoDShape.prototype;
Triangle.prototype = new F();
Triangle.prototype.constructor = Triangle;
Triangle.uber = TwoDShape.prototype;
// augment prototype
Triangle.prototype.name = 'Triangle';
Triangle.prototype.getArea = function(){return this.side * this.height / 2;}
var my = new Triangle(5, 10);
my.toString();
/*------------------------------------------------
Isolating the Inheritance Part into a Function
--------------------------------------------------*/
