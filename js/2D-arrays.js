/*
 * Given a 6 x 6 2D array, A:
 *
 * 1 1 1 0 0 0
 * 0 1 0 0 0 0
 * 1 1 1 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 * 0 0 0 0 0 0
 *
 * We define an hourglass in A to be a subset of values with indices falling in this pattern in A's graphical representation:
 *
 * a b c
 *   d
 * e f g
 *
 * (0,0) (0,1) (0,2)
 * (1,0) (1,1) (1,2)
 * (2,0) (2,1) (2,2)
 *
 * (x - 1, y - 1)   (x - 1, y)  (x - 1, y + 1)
 *                    (x, y)
 * (x + 1, y + 1)   (x + 1, y)  (x + 1, y + 1)
 *
 * There are 16 hourglasses in A, and an hourglass sum is the sum of an hourglass' values.
 *
 * Task is to calculate the hourglass sum for every hourglass in A, then print the maximum hourglass sum.
 */

function extractHourglass (arr, x, y) {
  const values = []
  
  values.push(arr[x - 1][y - 1])
  values.push(arr[x - 1][y])
  values.push(arr[x - 1][y + 1])
  values.push(arr[x][y])
  values.push(arr[x + 1][y - 1])
  values.push(arr[x + 1][y])
  values.push(arr[x + 1][y + 1])

  return values
}

function main () {
  const arr = Array(6)
  let maxHourglassSum = -Infinity
  let sum

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10))
  }

  for (let x = 1; x < arr[x].length - 1; x++) {
    for (let y = 1; y < arr[x].length - 1; y++) {
      sum = extractHourglass(arr, x, y)
      if (sum.reduce((a, b) => a + b) > maxHourglassSum) {
        maxHourglassSum = sum.reduce((a, b) => a + b)
      }
    }
  }
  console.log(maxHourglassSum)
  
}
