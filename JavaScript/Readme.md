
### JavaScript Topics ###

+ [Closure](#closure)
+ [Recursion](#recursion)
+ [Array and String Manipulations](#array-manipulation)
+ [For each loops](#for-each-loop)
+ [High Order Functions](#high-order-functions)


### Closure ###
Since we have ability to treat functions as values and local value are recreated everything function are called, we leverage this functionality. _It seems, when new function is created, it is created as in class at C# because they have their own reference values._  
```js
 function add(x, y){
     return function(y){
         return x + y;
     }
 }

 var add6 = add(6); //here add6 = function(y){return x:6 + y;}

 console.log(add6(4)); //prints 10. 

```
In above example, the value of x is stored when the parent function was created. **The function ability to store local value of its enclosed/parent function is called Closure.**  

### Recursion ###
Functions that calls itself is called recursion.   
The end value should be thought out before using recursion. example from [Eloquent JavaScript ](http://eloquentjavascript.net/03_functions.html#h_jxl1p970Fy)
```js
function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, exponent - 1);
}

console.log(power(2, 3));  //print 8
```
### Array Manipulation ###
Some useful functions while working with array. Also most of them works with string too.
```js
var wheel = {fron: 2, back:2};
const arrayValue = ["str", 1 , 2, wheel]; 
```
+ Array
    - `.length`  
    - `.push(oneValue)`    ||    .`push([oneValue, twoValue])`   _only in array_
    - `.pop()`    removes last value in array  _only in array_
    - `.shift()`  get first value  _only in array_
    - `.unshift(value)` insert value at 0 index.  _only in array_
    - `.slice(startIndexInclusive, endIndexExclusive)`
    - `.indexOf(firstValue)`
    - `.lastIndexOf(value)`


### For each loop ###
```js
 for(var property in arrayOrObject){
     arrayOrObject[property];
 }
```
+ `Object.key(object)` 
    - to print all immediate properties of object.
+ `"propertyName" in Objectreference`
    - to check if property is in particular object.
    - **Does NOT** work for child properties.

### High Order functions ###
+ `.forEach`
    - Syntax:
    ```js
        arr.forEach(function callback(currentValue, index, array) {
        //your iterator
        }[, thisArg]);
    ```
    - Example: 
    ```js
        const items = ['item1', 'item2', 'item3'];
        const copy = [];

        items.forEach(function(item){
            copy.push(item)
        });

        //from mdn example
        function logArrayElements(element, index, array) {
            console.log('a[' + index + '] = ' + element);
        }
        // Notice that index 2 is skipped since there is no item at
        // that position in the array.
        [2, 5, , 9].forEach(logArrayElements);
        // logs:
        // a[0] = 2
        // a[1] = 5
        // a[3] = 9
    ```
+ `.filter`
    - "creates a new array with all elements that *pass the test* implemented by the provided function."
    - Example: 
    ```js
    var arr = [1,2,3,4, 5]
    var oddNumber = function(num){ if(num%2==1){ return num;}};
    var oddNumberArray = arr.filter(oddNumber);  //prints [1,3,5];
    ```
+ `.reduce`
    - "applies a function against an accumulator and each element in the array (from left to right) to reduce it to a **single value**."
    - Example: 
    ```js
    //short form of applying this codes
    function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
    }

    console.log(reduce([1, 2, 3, 4], function(a, b) {
    return a + b;
    }, 0));
    // → 10

    //example from MDN
    var array1 = [0, 1, 2, 3];
    const result = array1.reduce((accumulator, currentValue) => accumulator + currentValue);
    console.log(result);
    // expected output: 6

    ```
+ `.reverse`
    - reverse the **original array values** from right to left,
    - 
    ```js
    var arr = [1,2,3,4,5];
    arr.reverse(); // [5,4,3,2,1];
    console.log(arr); //[5,4,3,2,1];   
    ```
+ `.sort`
    - sorts array by its Unicode order. If compare function is not provided, it will convert numbers to string, hence array will be sorted like this [12, 3]. Because "1" is smaller than "3". 
    - provide compareFunction to work on numbers.
    ```js
    var arr = [1, 2 , 9, 80, 111, 33];
    arr.sort(); //arr is now [1, 111, 2, 33, 80, 9];
    //to sort with compare function
    arr.sort((a,b)=> a-b); 
    ```
+ `.map`
    - The `map` method transforms an array by applying a function to all of its elements and building a new array from the returned values. The new array will have the same length as the input array, but its content will have been “mapped” to a new form by the function.
    - Example:
    ```js
    var numbers = [1, 4, 9];
    var doubles = numbers.map(function(num) {
        return num * 2;
    });

    // doubles is now [2, 8, 18]
    // numbers is still [1, 4, 9]

    //ES6
    const dobules = numbers.map(num => num * 2);
    ```
+ `.splice`
    -  "changes the contents of an array by removing **existing elements** and/or adding new elements."
    ```js
    array.splice(start)
    array.splice(start, deleteCount)
    array.splice(start, deleteCount, item1, item2, ...)  //after start and delete couunt add these items.
    ```
    - Example from MDN: 
    ```js
    var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];

    myFish.splice(2, 0, 'drum'); // insert 'drum' at 2-index position
    // myFish is ["angel", "clown", "drum", "mandarin", "sturgeon"]

    myFish.splice(2, 1); // remove 1 item at 2-index position (that is, "drum")
    // myFish is ["angel", "clown", "mandarin", "sturgeon"]
    ```