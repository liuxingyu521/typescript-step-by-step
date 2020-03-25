/**
 * Enums 枚举类型 (定义一组常量，第一次初始化的时候可以计算赋值)
 * - 数字枚举
 *  - 从第一个元素(默认为 0)，值依次递增 +1
 *  - 可给元素赋值
 * - 字符串枚举
 *  - 逐个定义其值
 * - 计算枚举
 *  - 第一次初始化的时候可以通过静态编译计算来赋值
 * - 反向枚举
 *  - 只会为 number 枚举做反向映射
 * - 常量枚举
 *  - 为了节省代码开销，在编译阶段就会被删除，替换成常量值
 */

/** 方向枚举 */
enum Directtion {
  UP, // === 0
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right"
}

/** 反向枚举 */
enum Res {
  NO,
  YES
}
console.log(Res.NO); // => 0
console.log(Res[0]); // => 'NO'

/** 常量枚举 */
const enum ConstEnum {
  ONE = "1",
  TWO = "2"
}
let constEnum = [ConstEnum.ONE, ConstEnum.TWO];
