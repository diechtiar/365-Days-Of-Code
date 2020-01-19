function destroyer(arr, ...params) {
  // Remove all the values
  return arr.filter(item => !params.includes(item));

}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // -> [1, 1]
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // -> [1, 5, 1]
destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan");