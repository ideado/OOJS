/*---------------------------------------------------
    Chapter 4:Objects - Ex. 6
---------------------------------------------------
Imagine Array() doesn't exist and the array literal notation doesn't exist either. Create a constructor called MyArray() that behaves as close to Array() as possible.
---------------------------------------------------*/
function MyArray()
{
    this.a=[];
    var r=[];
    if(arguments.length>0)
    {
        for(var i=0;i<arguments.length;i++)
        {
            r[i]=arguments[i];
        }
    }
    this.a=r;
    this.length=arguments.length;
};
MyArray.prototype.push=function(n)
{
    
    this.a[a.length]=n;
    this.length++;    
    return this.a;
}
MyArray.prototype.index=function(n)
{
    return this.a[n];
}
MyArray.prototype.toString=function()
{
    var r="";
    if(this.length>0)
    {
        r+=this.a[0];
        for(var i=1;i<this.length;i++)
        {
            r+=","+this.a[i];
        }
    }
    return r;
}
MyArray.prototype.join=function(s)
{
    var r="";
    if(this.length>0)
    {
        r+=this.a[0];
        for(var i=1;i<this.length;i++)
        {
            r+=s+this.a[i];
        }
    }
    return r;
}
var a=new MyArray(1,2,3,"test");
a.toString();
a.length;
a.push("boo");
a.push("boo");
a.push("boo");
a.push("boo");
a.toString();
a.join(';');
a.join(' isn\'t ');