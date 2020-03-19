/**
 * Typescript 变量申明
 * - var (避免使用！ 1. 有变量提升 2. 无块级作用域)
 * - let
 * - const  (不可重新赋值的 let 类型)
 * - Destructuring （解构）
 */

/**
 * 1. var
 * @description js 原先的变量定义
 */
/**
 * var 尽量避免使用，看下面例子
 * 想要每隔 1s 输出 1 - 10
 */
/**
 * 错误示范 -> 输出 11,11,11,11,11,11,11,11,11,11
 * 因为共享同一个 i 变量，在下一轮 js 执行时，i 已变为 11
 */
for (var i = 1; i < 11; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
/**
 * 使用 let
 * 正确输出
 */
for (let i = 1; i < 11; i++) {
  setTimeout(() => {
    console.log(i);
  }, i * 1000);
}
/** 变量提升，可以在变量声明前调用，也可重复申明 */
console.log(a); // -> 输入 `undefined`
var a = 123;
var a = 456; // -> 可重复申明

/**
 * 2. let
 * - 拥有块级作用域
 */
// console.log(b) // -> 报错 `声明之前已使用的块范围变量“b”, `
let b = 123;
// let b = 456 // -> 报错 `无法重新声明块范围变量“b”`
(function func() {
  if (true) {
    let c = 1;
  }
  // 由于 let 有块级作用域，无法正确打印 c
  // console.log(c) // -> 报错 `找不到名称“c”`
})();

/**
 * 3. const
 * - 不可重新赋值的 let 类型
 * - 锁定的是变量内存引用地址，引用地址不能变，里边的内容可以更改
 */
const d = 123;
// d = 456 // -> 报错 `Cannot assign to 'd' because it is a constant`
const o: any = { a: 1 };
// o = 1 // -> 报错 `Cannot assign to 'o' because it is a constant`
o.c = 123; // 正确，可以修改内部数据

/**
 * 4. Destructuring
 * @description 解构
 *  - 数组解构
 *  - 对象解构
 *  - 解构运算符 `...`
 *  - 函数参数解构
 */
let arr: number[] = [1, 2, 3, 4];
let [firstNum, secondNum] = arr; // firstNum = 1, secondNum = 2
let arrCopy = [...arr]; // arrCopy = [1, 2, 3, 4]

let obj = { aa: 1, bb: 2, cc: 3 };
let { aa, bb } = obj; // aa = 1, bb = 2
let objCopy = { ...obj }; // objCopy = { aa: 1, bb: 2, cc: 3 }

let [first, ...restNum] = arr; // first = 1, restNum = [2, 3, 4]
let { aa: aaa, ...restObj } = { ...obj }; // aaa = 1, restObj = { bb: 2, cc: 3 }

function add(...arr) {
  return arr.reduce((total, i) => total + i, 0);
}
add(1, 2, 3, 4);
