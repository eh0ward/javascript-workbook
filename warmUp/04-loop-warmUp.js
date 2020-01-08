// const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function distinct(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
      continue;
    } else {
      result.push(arr[i]);
    }
  }
}

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
