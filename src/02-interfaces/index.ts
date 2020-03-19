/**
 * Interfaces 接口
 * - 定义使用 interface 关键字
 * - 可选属性用 ?:
 * - readonly 属性
 * - indexable 可索引属性类型 => 只有 string、number 2种
 * - 额外的属性 [propName: string]: any
 * - 函数类型 
 * - class 类型
 * - 接口也可继承 extents
 * - 混合类型 => 比如，接口既可以当做对象接口也可以当做函数接口
 *    - interface Counter {
 *         (start: number): string;
 *         interval: number;
 *         reset(): void;
 *      }
 * - 接口可以继承类
 */
/** */
interface Person {
  readonly name: string;
  age?: number;
  weight?: number;
  [propName: string]: any // 额外属性
  [index: number]: string // 可索引属性类型，如果是数字索引的值，必须为字符串
}

function tellMeWhoAreYou(person: Person) {
  // person.name = 'Blob';  // 报错 => Cannot assign to 'name' because it is a read-only property

  console.log(`I'm ${person.name}`);
}

let worker = {
  name: "Xuer",
  age: 18
};

tellMeWhoAreYou(worker); // I'm Xuer

interface Add2Func {
  (num1: number, num2: number): number
}

let add2Func: Add2Func = function(num1, num2) {
  return num1 + num2
};
add2Func(1, 2)

/**
 * class 类型
 */
interface ClockInterface {
  curTime: Date
  setTime(str: string): void
}

class Clock implements ClockInterface {
  curTime = new Date()

  setTime(dateStr: string) {
    this.curTime = new Date(dateStr)
  }
}

let myClock = new Clock()
myClock.setTime('2020-03-19')