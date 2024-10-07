const mergeArrays = (...arrays) => {
  let newArray = [];
  arrays.forEach((a) => {
    newArray.push(...a);
  });
  return newArray;
  //return [].concat(...arrays);
};

const mergeObjects = (...objects) => {
  /*return objects.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});*/
  let object = {};
  objects.forEach((obj) => {
    object = { ...object, ...obj };
  });
  return object;
};

const updateObject = (original, updates) => {
  return { ...original, ...updates };
};

// Example Usage
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = [7, 8, 9];

const mergedArray = mergeArrays(array1, array2, array3);
console.log("Merged Array:", mergedArray); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { d: 5 };

const mergedObject = mergeObjects(obj1, obj2, obj3);
console.log("Merged Object:", mergedObject); // { a: 1, b: 3, c: 4, d: 5 }

const originalObject = { x: 1, y: 2 };
const updates = { y: 3, z: 4 };

const updatedObject = updateObject(originalObject, updates);
console.log("Updated Object:", updatedObject); // { x: 1, y: 3, z: 4 }
console.log("Original Object:", originalObject); // { x: 1, y: 2 } (unchanged)
