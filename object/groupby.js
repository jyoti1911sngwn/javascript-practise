// input :
const people = [
  { name: "Jyoti", role: "frontend" },
  { name: "Aman", role: "backend" },
  { name: "Neha", role: "frontend" },
  { name: "Rahul", role: "backend" },
  { name: "Sumit", role: "fullstack" },
];

// output :
// {
//   frontend: [
//     { name: "Jyoti", role: "frontend" },
//     { name: "Neha", role: "frontend" }
//   ],
//   backend: [
//     { name: "Aman", role: "backend" },
//     { name: "Rahul", role: "backend" }
//   ]
// }

const newObj = Object.groupBy(people, (p) => p.role);
console.log(newObj);

console.log("-----------------------------------");

function grouped(arr, key){
    return arr.reduce((acc, curr)=>{
        const groupedCurr = curr[key]
        if(!acc[groupedCurr]){
            acc[groupedCurr] = []
        }
        acc[groupedCurr].push(curr)
        return acc
    }, {})

}

const anr = grouped(people, "role")
console.log(anr)