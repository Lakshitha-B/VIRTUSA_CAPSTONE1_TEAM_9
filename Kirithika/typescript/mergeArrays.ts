
export function mergeArrays(arr1: number[], arr2: number[]): number[] {
    return [...arr1, ...arr2];
}

const array1 = [1, 3, 5];
const array2 = [2, 4, 6];

console.log(mergeArrays(array1, array2));

