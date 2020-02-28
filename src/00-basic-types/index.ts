/**
 * Typescript 里的基本类型
 * @typelist { Boolean, Number, String, Array, Tuple, Enum, Any, Void, Null & Undefined, Never, Object}
 * @extra
 * - 类型断言 详见下方 12
 */

/**
 * 1. Boolean
 * @description 真值
 */
let bool: boolean = false;

/**
 * 2. Number
 * @description 数字
 */
let num: number = 22;

/**
 * 3. String
 * @description 字符串
 */
let str: string = `hello`;

/**
 * 4. Array
 * @description 数组
 */
// 第一种写法 => 推荐写法
let arr1: string[] = ["a", "b"];
// 第二种写法
let arr2: Array<number> = [1, 2];

/**
 * 5. Tuple
 * @description 元组
 * - 数据里的元素类型可以自定义
 */
let tuple1: [string, number] = ["a", 2];
console.log(tuple1[0].length);
// console.log(tuple1[1].length) -> 会提示报错 `类型“number”上不存在属性“length”。`

/**
 * 6. Enum
 * @description 枚举
 * - 自定义数据集合
 */
/** */
enum Fruit {
  Apple,
  Banner = 3 // 可已定义映射值，默认以数字递增的形式赋值
}
let fruit: Fruit = Fruit.Apple;
// let fruit2: Fruit = 'a' -> 会提示报错 `不能将类型“"a"”分配给类型“Fruit”。`

/**
 * 7. Any
 * @description 任意值
 * - 当不确定该值类型时使用
 */
let bar: any = 123;
bar = "abc"; // 不会报错，可正常赋值

/**
 * 8. Void
 * @description 空值
 * - 一般用于函数，如果函数无返回值，及定义返回值为 void
 */
function noReturnFunc(): void {
  console.log("This function no returns");
}

/**
 * 9. Null & Undefined
 * - null 和 undefined 是所有类型的子类
 */
let nothing: null = null;
let nothing2: undefined = undefined;

/**
 * 10. Never
 * @description
 */
/** 函数永不返回，或者从函数直接抛出错误，立即终止 */
function sendError(errorMsg: string = "fail"): never {
  throw new Error(errorMsg);
}
function forever(): never {
  while (true) {}
}

/**
 * 11. Object
 * @description 非基本类型(number,boolean 等等)
 */
function create(o: object): void {}
create({ name: "Xuer" });
create(null);
// create(42) -> 会报错 `类型“42”的参数不能赋给类型“object”的参数`

/**
 * 12. Type assertions
 * @description 类型断言
 * - 使用的时候，明确断言变量类型
 */
let someValue: any = "this is a any string";
let oneNumberValue: number = (someValue as string).length; // 一般使用 as 断言，<> 断言在 jsx 下不可用
let oneNumberValue2: number = (<string>someValue).length;
