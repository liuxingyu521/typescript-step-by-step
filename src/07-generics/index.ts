/**
 * generics 泛型
 * - 泛型变量类型
 * - 泛型类
 *  - ！泛型类上的泛型只能用在实例可继承的属性方法上，**静态成员不能使用**
 * - 泛型约束
 *  - 可以继承接口，实现约束
 */

/**
 * 现在有一个打印参数并返回的函数，参数类型为 number | string
 * 不用泛型之前需要使用重载定义函数
 * interface print {
 *   (param: number): number
 *   (param: string): string
 * }
 */

/** 有了泛型可以定义更简洁 */
interface MyPrint {
  <T>(param: T): T;
}
let myPrint: MyPrint = function<T>(param: T): T {
  return param;
};
let output = myPrint(123);

/**
 * 泛型类
 */
class GenericNumber<T> {
  // static bar: T  // Error: 静态成员不能引用类类型参数
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) {
  return x + y;
};

/**
 * 泛型约束
 */
interface LengthHas {
  length: number;
}
function myPrintLength<T extends LengthHas>(param: T): number {
  return param.length; // 可以使用，param 有 length 属性
}
myPrintLength([1, 2])
