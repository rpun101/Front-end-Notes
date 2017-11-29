
[Understanding promises by Scotch.io ](https://scotch.io/tutorials/javascript-promises-for-dummies)



### Environment ###
`Promise` is ES6 feature.


### Promise ###
> Imagine, mom has promised you to buy a new phone. Now, she can fulfill or reject the promise

+ Three states of  **Promise** are:
    - **pending**: don't know the result
    - **resolved**: get phone
    - **rejected**: don't get phone

#### Creating Promise ####
Lets create a promise
```js
var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(
    function (resolve, reject) {
        if (isMomHappy) {
            var phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone); // fulfilled
        } else {
            var reason = new Error('mom is not happy');
            reject(reason); // reject
        }

    }
);

//Here is another promise to chain on previous promise
//Notice Promise.resolve()
var showOff = function(phone){
    var message = 'Hey friend, I have a new ' + 
    phone.color + ' ' + phone.brand + ' phone';
    return new Promise.resolve(message);
    // Promise.reject(error) is optional
}

```  
Call `promise` in following way
```js
//chaining our promise call

var askMom = function () {
    willIGetNewPhone
        .then(showOff) //chain phone object to this promise
        .then(function(fulfilled){
            console.log(fulfilled);
            //output: 'hey friend, i have new black Samsung phone.
        })
        .catch(function (error) {
            //oops mon dont buy it
            console.log(error.message);
            //output: mom is not happy
        })
}
askMom();
```

#### Promise is asynchronous ####

Program will continue execution even after the promise is called. When promise object is returned it will be handled inside `.then` and `.catch` functions. 

_Because, it is callback, we can enjoy asynchronous handling of promise.[i guess]_

> **asynchronous**, the code will run without blocking or waiting for the result. Anything that need to wait for promise to proceed, you put that in `.then`.  

### Promise in ES6 ###
ES6 supports `Promise` natively. We can further simplify the code by using `fat-arrow, =>`, `let` and `const`.

#### Fat Arrow in ES6 ####
[fat arrow article](https://developer.ibm.com/node/2015/09/21/an-introduction-to-javascript-es6-arrow-functions/)  

Fat arrow, arrow functions, serve two main purpose:
+ more concise syntax
+ sharing lexical `this` with parent scope.

```js
    function (a) { return a * 2; }
    (a) => { return a * 2; }  //because no implicit return in {}
    (a) => a * 2
    a => a * 2
```

Implicit return only happens for single statement.  

Fat arrow share lexical `this` with parent scope.  
It means, fat arrow, does not creates its own `this`. They also don’t have their own arguments variable like regular functions. Fat arrow can use **spread operator** when it needs to access parent arguments.  

```js
    $('.current-time').each(function () {
    var self = this;

    setInterval(function () {
        $(self).text(Date.now());
    }, 1000);
    });


    //with fat arrow, we don't have to do $self = this
    $('.current-time').each(function(){
        setInterval(()=> Date.now(), 1000);
    })
```




#### let vs const vs var  ####
Gist from [article](https://strongloop.com/strongblog/es6-variable-declarations/)

+ `var`: creates variable scope within nearest parent function
+ `let`: variable scope is to nearest block of `if` statements, `for` loops and others  

    ```js
        var x = 1;
        if (x === 1) {
            let y = 2;
        }
        console.log( y ); // y is undefined
    ```
+ `const`: is **constant reference** to the variable. 

    > In other words, the pointer that the variable name is using cannot change in memory, but the thing the variable points to might change.  

    ```js
        const names = [];
        names.push( "Jordan" );  //able to add items in array, which change the value
        console.log( names );
        /* However, if we try to change the variable reference to a new array — even to one with 
        the same contents — we will get a SyntaxError (“Assignment to constant variable”): */
        const names = [];
        names = [];  // Error! because we try to change the reference of names variable
    ```
    - Of course, if you have a `const` that points to a primitive such as a string or number, then there really isn’t anything to change about that value. All methods on String and Number return new values (objects).
    - `const`  follows the same new scoping rules as `let`! 

