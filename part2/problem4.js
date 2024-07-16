function rotateSparseArray(arr, steps) {
  // Handle empty array or invalid steps
  if (arr.length === 0 || steps === 0) {
    return arr;
  }

  // Get the actual number of elements (excluding default values) ex: [1,2,3] -> length=3
  const actualLength = arr.filter(
    val => val !== undefined && val !== null
  ).length;

  // Calculate the effective rotation (considering array size)
  const effectiveSteps = steps % actualLength;

  // If no rotation needed, return original array
  if (effectiveSteps === 0) {
    return arr;
  }

  // Use slice and concat to achieve rotation
  const firstPart = arr.slice(actualLength - effectiveSteps);
  const secondPart = arr.slice(0, actualLength - effectiveSteps);
  return firstPart.concat(secondPart);
}
