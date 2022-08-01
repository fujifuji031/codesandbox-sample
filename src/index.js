// var val1 = "var変数";

// console.log(val1);

// //var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// //var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数"
// console.log(val2);

// //letは上書き可能
// val2="ket変数を上書き";
// console.log(val2);

// //let変数は再宣言は不可能
// let val2 = "let変数は再宣言不可能";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可能
// // val3="const変数を上書き"

// //const変数は再宣言不可能
// const val3 = "const変数を再宣言";

//constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
// name:"藤田",
// age:23,
// };
// val4.name="祥吾";
// val4.addres = "Hokkaido";
// console.log(val4);

//constで定義した配列はプロパティの変更が可能
// const val5 = ['dog','cat'];
// val5[0]='bird';
// val5.push("monkey");
// console.log(val5);

// テンプレート文字列

// const name = "藤田";

// const age = 23;

// const message1 = "私の名前は" + name + "です年齢は" + age + "です。";

// console.log(message1);

// //テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}だよ。`;
// console.log(message2);

/**アロー関数
 *
 */

//  function func1(str)  {
//    return str;
//  }

// const func1 = function (str) {
//   return str;
// };

// console.log(func1("func1です"));

// //アロー関数
// const func2 = (str) => {
//   return str;
// };

// console.log(func2("func2です"));

/**
 * 分割代入
 */

// const myProfile = {
//   name: "祥吾",
//   age: 23
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。」`;
// console.log(message1);

// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。」`;
// console.log(message1);

const myProfile = ["祥吾", 8];

const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。」`;
console.log(message3);

const [name, age] = myProfile;
const message4 = `名前は${name}です。年齢は${age}歳dayo`;
console.log(message4);
