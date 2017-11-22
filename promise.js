

/* ES5 */
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

// call our promise
// var askMom = function () {
//     willIGetNewPhone
//         .then(function (fulfilled) {
//             // yay, you got a new phone
//             console.log(fulfilled);
//          // output: { brand: 'Samsung', color: 'black' }
//         })
//         .catch(function (error) {
//             // oops, mom don't buy it
//             console.log(error.message);
//          // output: 'mom is not happy'
//         });
// };
// askMom();


// 2nd promise

var showOff = function(phone){

    /* see the shorter version
    return new Promise(
        function(resolve,reject){
            var message = 'Hey friend, I have a new' + 
                phone.color + ' ' + phone.brand + ' phone';

            resolve(message);
        }
    ) */

    var message = 'Hey friend, I have a new ' + 
    phone.color + ' ' + phone.brand + ' phone';
    return new Promise.resolve(message);
}

/*
Notice new way of creating promise with some variable, phone. function does not have reject function.
*/

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

/* 
// ES6
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'Samsung',
                color: 'black'
            };
            resolve(phone);
        } else {
            const reason = new Error('mom is not happy');
            reject(reason);
        }

    }
);

const showOff = function (phone) {
    const message = 'Hey friend, I have a new ' +
                phone.color + ' ' + phone.brand + ' phone';
    return Promise.resolve(message);
};

// call our promise
const askMom = function () {
    willIGetNewPhone
        .then(showOff)
        .then(fulfilled => console.log(fulfilled)) // fat arrow
        .catch(error => console.log(error.message)); // fat arrow
};

askMom();

*/