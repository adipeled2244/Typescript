var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// union type
var myAge = 27;
myAge = '27';
console.log(myAge);
// object type
var userData;
userData = {
    name: 'Max',
    age: 27,
};
userData.age = 3;
// array type
var hobbies;
hobbies = ['Sports', 'Cooking'];
// hobbies = [100]; // error to assign number to string array
// functions type
function add(a, b) {
    return a + b;
}
function addvoid(a, b) {
    console.log(a + b);
}
function calculate(a, b, calcFn) {
    var result = a + b;
    calcFn(2, result);
}
var u1 = { name: 'Max', age: 30 }; // this is a custom type
var addFn;
addFn = function (n1, n2) {
    return n1 + n2;
};
function calculate2(a, b, calcFn) {
    var result = a + b;
    calcFn(2, result);
}
var u2 = { name: 'Max', age: 30 };
var User3 = /** @class */ (function () {
    function User3() {
    }
    return User3;
}());
var admin = {
    name: 'Max',
    perm: ['all']
};
// literal type : לאפשר רק כמה ערכים ספציפים
var role; // only Max or d is allowed
role = 'user';
function performAction(role) {
    if (role === 'admin') {
        console.log('is admin');
    }
    else {
        console.log('is not admin');
    }
}
var textStorage = {
    storage: ['hi'],
    addItem: function (item) {
        this.storage.push(item);
    },
    removeItem: function (item) {
        this.storage.splice(this.storage.indexOf(item), 1);
    },
    getItem: function () {
        return __spreadArray([], this.storage, true);
    },
};
// generic funtion - כאשר פונקציה צריכה להיות גנרית לטייפים שונים
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var user = merge({ name: 'Max' }, { age: 30 });
console.log(user);
