"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// import multiply, {multiplyByTwo} from "./multipy";
const multiplyModule = __importStar(require("./multipy"));
const a = 8;
const b = 8;
let array = [];
function upperCase(str) {
}
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let myColor = Color.Red;
console.log(Color[myColor]);
// const email: HTMLElement | null = document.getElementById('email');
// if (email) {
//     email.addEventListener("change", e => {
//         const input = e.currentTarget as HTMLInputElement;
//         console.log(input.value)
//     })
// }
console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`);
let Profile = {
    name: "Sando"
};
Profile.age = 12;
Profile.name = "Other Name";
