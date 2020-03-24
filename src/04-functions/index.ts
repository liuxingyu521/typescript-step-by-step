/**
 * functions
 * - 函数类型
 * - 可选参数  (v?: string)
 *  - 可选参数只能放到参数的末尾
 * - 参数默认值 （v = '123'）
 * - 剩余参数 （a: number, ...restArr: number[]）
 *  - 只能放到末尾
 * - 箭头函数
 *  - this 取决于申明的环境主体，而不是调用时确定
 * - 函数重载 => 同一个函数接收的 1. 参数个数 或 2. 参数类型不同
 *  - 尽量把最精确的函数定义放到前面，优先匹配
 */

/**
 * 函数类型定义
 */
let myAdd: (a: number, b?: number[]) => number = function(
  a: number,
  b: number[]
): number {
  return a + b.reduce((n, m) => n+m, 0);
};
console.log(myAdd(1, [2,3]));

/**
 * 函数重载
 */
interface myAdd2{
  (num1: number, num2: number): number
  (str1: string, str2: string): string
}

let myAdd2: myAdd2 = (param1, param2) => {
  return param1 + param2
}
myAdd2(1, 2)
myAdd2('a', 'b')
