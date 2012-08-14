/*-------------------------------------------------------
    Chapter 4:Objects - Ex. 4
-------------------------------------------------------
Imagine the String() constructor didn't exist. Create a 
constructor function MyString() that acts like String() as 
closely as possible. You're not allowed to use any built-in
string methods or properties, and remember that String()
doesn't exist.
-------------------------------------------------------*/
function MyString(string)
{
    var a=string;
    this.length = a.length;
}
MyString.prototype.toString = function(){return a.join("")};
MyString.prototype.valueOf = function(){
    switch(this.length)
    {
        case 0: 
            return ""; 
            break;
        default:
            var s="";
            for(var i=0;i<this.length;i++)
            {
                s+=a[i];
            }
            return s;
            break;
     }   
}
MyString.prototype.charAt=function(index)
{
    for(var i=0;i<this.length;i++)
    {
        if(i===index){return a[i];}
    }
    if(this.length >0){return a[0];}
    else{return "";};
}
MyString.prototype.concat=function(arguments)
{
    var r="";
    for(var i=0;i<a.length;i++)
    {
        r+=a[i];
    }
    for(var i=0;i<arguments.length;i++)
    {
        r+=arguments[i];
    }
    return r;
}
MyString.prototype.getA = function()
{
    var r="";
    for(var i=0;i<a.length;i++)
    {
        r+=a[i];
    }
    return r;
}
MyString.prototype.slice=function(start,end)
{
    var r="";
    var aux=0;
    if(start>end)
    {
        aux=end;
        end=start;
        start=aux;
    }
    
    if(start<0)
    {
        start=0;
        if(end===0){
            end=this.length-1;
            }
    }

    for(var i=start;i<end;i++)
    {
        r+=a[i];
    }
    return r;
}
MyString.prototype.split=function(s)
{
    var r=[];
    r=(this.getA()).split(s);
    return r;
}
var s1=new MyString('hello');
s1.length;
s1.valueOf();
s1.charAt(1);
s1.charAt('2');
s1.charAt('e');
s1.concat(' world!');
s1.getA();
s1.slice(1,3);
s1.slice(0,-1);
s1.slice(2,-6);
s1.split('e');
s1.split('l');