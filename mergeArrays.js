function mergeArrays(arr1, arr2){
  let output = [];
  let i = 0;
  let j = 0;
 
  while( i < arr1.length && j < arr2.length){
    if (arr1[i] <= arr2[j]){
      output.push(arr1[i]);
        i++;            
    } else {
      output.push(arr2[j]);
      j++;
    }
  }

  while(i < arr1.length){
    output.push(arr1[i]);
    i++;
  }
  
  while(j < arr2.length){
    output.push(arr1[j]);
    j++;
  }
  return output;
}

// Big O = O(n)