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

// const myProfile = ["祥吾", 8];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。」`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳dayo`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */

//  const sayHello = (name = '藤田です') => console.log(`こんにちは！${name}さん！`);

// //  sayHello("祥吾です");
// sayHello();

/**
 * スプレット構文　...
 */

//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1); //配列の中身を順番に処理

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4]; //コピー
// arr6[0] = 100;
// console.log(arr6);
// console.log(arr4); //スプレット構文はコピー元が変化しない

// const arr7 = [...arr4,...arr5];//結合
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr8);
// console.log(arr4);//スプレット構文を使わないでコピーするとコピーもとまで変更されてしまう

/**
 * mapやfilterを使った配列の処理
 */

// const nameArr = ["山田", "田中", "藤田", "大久保", "重中"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index}番目は${nameArr[index]}です`);
// }

//map関数を使えば中身を順番に取り出して処理できる
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });

// console.log(nameArr2);

//マップの中で番号で区別したいときは引数を二つ用意することで二つ目に番号が入って来る。
// nameArr.map((name,index)=>console.log(`${index+1}番目は${name}です`));

//   //フィルター
// const numArr = [1,2,3,,4,5];
// const newNumArr = numArr.filter((num)=>num%2===1)//一致した条件だけ返す。（今回は奇数だけ）
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "藤田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNameArr);

/**
 * 三項演算子
 */

//ある条件?条件がtrueの時：falseのとき
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = 1300;
// //数値の場合は金額を,区切りで表示、それ以外の場合は数値を入力してください。
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum =(num1,num2)=>num1+num2>100?'100を超えています':'許容範囲内です';

// console.log(checkSum(50,30));

/**
 * 論理演算子の本当の意味を知ろう　 && || */

const flag1 = true;
const flag2 = false;

if (flag1 || flag2) {
  console.log("1か２はtrueになります");
}

if (flag1 && flag2) {
  console.log("1も２にもtrueになります");
}

// ||は左側がfalseなら右側を返す
const num = null; //nullはfalse判定
const fee = num || "金額未設定です";
console.log(fee);

//&&は左側がtrueなら右側を返す
const num2 = null;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
