/**
 * union & intersection types
 * - union Type 联合类型
 *  - 或 关系
 * - intersection Type 交叉类型
 *  - 且 关系
 */

/** 联合类型 */
type NumStr = number | string

function mAdd(
  param1: NumStr,
  param2: NumStr
): NumStr {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else if (typeof param1 === "string" && typeof param2 === "string") {
    return param1 + param2;
  }
}

/** 交叉类型 */
interface FlyType {
  fly: () => void
}
interface SwimType {
  swim: () => void
}

type amphibiousType = FlyType & SwimType

function action(animalAmphibious: amphibiousType) {
  animalAmphibious.fly(); // ok
  animalAmphibious.swim(); // ok
}
