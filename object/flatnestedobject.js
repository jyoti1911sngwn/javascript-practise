const obj = {
  name: "jyoti",
  location: {
    address: {
      city: "hisar",
      state: "haryana",
    },
  },
};

function flatten(obj, parentkey = "", result = {}) {
  for (let key in obj) {
    const newkey = parentkey ? parentkey + "." + key : key;
    if (typeof obj[key] === "object") {
      flatten(obj[key], newkey, result); //
    }
    result[newkey] = obj[key];//
  }
  return result;
}
console.log(flatten(obj));
