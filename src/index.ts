// import multiply, {multiplyByTwo} from "./multipy";
import * as multiplyModule from "./multipy";


const a = 8;
const b = 8;
let array: Array<string> = [];
function upperCase(str: string | null) {
    console.log(str);
}

upperCase("bla");
// enum Color {
//     Red,
//     Green,
//     Blue
// }
// let myColor: Color = Color.Red
// console.log(Color[myColor]);

// const email: HTMLElement | null = document.getElementById('email');
// if (email) {
//     email.addEventListener("change", e => {
//         const input = e.currentTarget as HTMLInputElement;
//         console.log(input.value)
//     })
// }

// console.log(`${a} * ${b} = ${multiplyModule.default(a, b)}`);
// console.log(`${a} * 2 = ${multiplyModule.multiplyByTwo(a)}`);
//
// interface Profile {
//     readonly name: string;
//     age?: number;
// }
// let Profile: Profile = {
//     name: "Sando"
// };
// Profile.age = 12;
// Profile.name = "Other Name";


