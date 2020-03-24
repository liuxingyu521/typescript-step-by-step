/**
 * class
 * - 面向对象的类
 * - 继承 extends 关键字
 * - super 调用父类，在子类中想要用 this 对象，必须调用 super() 方法
 * - public、private、protected 修饰符
 *  - 类成员默认是 public
 *  - private： 只能通过 `本类实例` 的 this 去访问，子类无法获取，在 ts@3.8 之后可以使用 '#' 标志符
 *  - protected：
 *    - 子类方法可以通过 this 访问，但是子类的实例不能访问，
 *    - 在 constructor 上加了 protected，只能在子类调用 super() 构造，不能直接使用本类实例化
 * - readonly 修饰符，只能在申明的时候 或者在 constructor 里赋值
 * - accessors 属性访问器, getters/setters，会把当前属性设置成类似 readonly，外部无法直接修改，但是可用过内部方法修改
 * - static 修饰符，表示为本类的静态属性，只能本类直接调用
 * - abstract 抽象类、抽象方法
 *  - 抽象类不能直接实例化，只能被子类继承
 *  - 抽象方法子类继承时必须实现具体方法
 */

/**
 * 基本 class 定义
 */
class Greeter {
  /** 成员函数 */
  greeting: string;
  /** 构造函数 */
  constructor(message: string) {
    this.greeting = message;
  }
  /** 成员方法 === Greeter.prototype.greet */
  greet() {
    return `Hello, ${this.greeting}`;
  }
}

/**
 * inherit
 */
abstract class Animal {
  name: string;
  _age: string;
  /** 唯一标志符，私有变量只能在本类中通过 this 访问，子类无法使用 */
  private id: number;
  /** 祖先记忆，保护成员变量在子类中只能通过方法去访问，不能通过子类实例访问 */
  protected fatherMind: string;
  constructor(name: string = "Animal") {
    this.name = name;
    this.id = ~~(Math.random() * 1000);
  }
  /** 默认是 public 类型 */
  public move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`);
  }
  /** getters/setters */
  get age() {
    return this._age;
  }
  set age(age: string) {
    this._age = age;
  }
  static definedDate: string = "2020-03-20";
  /** 抽象方法只能在抽象类中使用 */
  abstract jump():void
}
class Dog extends Animal {
  constructor(name: string) {
    /** 调用父类的构造函数 */
    super(name);
  }
  bark() {
    console.log(`${this.name} Woo Woo!`);
  }
  /** 自我想起祖先的记忆 */
  getFatherMind() {
    return this.fatherMind;
  }
  /** 实现 Animal 抽象的方法 */
  jump() {
    console.log(`I can jump！`)
  }
}
let myDog = new Dog("tiny Dog");
myDog.bark();
myDog.move(5);
myDog.jump();
myDog.getFatherMind();

console.log(Animal.definedDate);
