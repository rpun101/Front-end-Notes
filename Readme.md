
[Understanding promises by Scotch.io ](https://scotch.io/tutorials/javascript-promises-for-dummies#comments-section)



### Environment
`Promise` is ES5 feature.


### Promise
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
