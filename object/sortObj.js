const people = [
  { name: "A", age: 28 },
  { name: "B", age: 22 },
  { name: "C", age: 35 },
  { name: "C", age: 15 },
  { name: "C", age: 5 },
];

function sortByAge(people) {
  for (let j = 0; j < people.length - 1; j++) {
    for (let i = 0; i < people.length - 1 - j; i++) {
      if (people[i].age > people[i + 1].age) {
        let temp = people[i];
        people[i] = people[i + 1];
        people[i + 1] = temp;
      }
    }
  }
  return people;
}

console.log(sortByAge(people));
