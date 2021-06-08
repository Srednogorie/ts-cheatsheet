"use strict";
/////
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.x = 10;
})(MyNamespace || (MyNamespace = {}));
/////
(function (MyNamespace) {
    MyNamespace.getX = () => MyNamespace.x;
})(MyNamespace || (MyNamespace = {}));
MyNamespace.x;
MyNamespace.getX();
const someInterface = {
    x: 1,
    y: 2
};
