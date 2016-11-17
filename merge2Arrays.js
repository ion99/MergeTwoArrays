function mergeArrays(arr1, arr2){
  return arr1.concat(arr2).sort((a, b) => a - b);
}

// One line implementation but worse Big O
// Big O = O(n^2)