function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]); // 1
getFirstElement<string>(["a", "b", "c"]); // "a"
getFirstElement<boolean>([true, false, true]); // true

// @ts-expect-error Mixed array is not assignable to number[] without a corresponding union type.
getFirstElement<number>([1, "b"]);

getFirstElement<number | string>([1, "b"]); // valid with a corresponding union type
