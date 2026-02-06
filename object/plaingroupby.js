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

function groupby(people){
    let newArr = {}
    for(let i =0 ; i<people.length ; i++){
        if(newArr[people[i].role]){
            newArr[people[i].role].push(people[i])
        }
        else{
            newArr[people[i].role]=[people[i]]
        }
    }
    console.log(newArr)
}

groupby(people)