/**
 * Created by ritin on 06/10/2014.
 */
/* from OOJS book */
function sum(a,b) {return a+b;};
console.log(sum(5,2));

var sum1 = function(a,b) {return a+b;};
console.log(sum1(2,2));

var sum2 = new Function('a','b', 'return a+b;');
console.log(sum2(3,2));

function calledFunction() {return calledFunction.caller;};
function callingFunction(){return calledFunction();};

console.log(callingFunction());

console.log(typeof(callingFunction().prototype));

var some_obj = {
    name: 'Ninja',
    say: function() {
        return 'I am ' + this.name;
    }
};

function F() {};
F.prototype = some_obj;

var obj = new F();

console.log(obj.name);

console.log(obj.say());
// Also try calling say without () and note that it does not invoke it - but instead returns type [Function]
console.log(obj.say);

// can return source code by calling toString on the property without invoking the function with a ()
console.log(obj.say.toString());

// however if you try to do the same with built in functions you won't get far and get [native code]
console.log(eval.toString());