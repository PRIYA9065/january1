/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    const arr1 = arr.map((person) => {
      return person;
    }).filter((person) => {
      return person.profession === "developer";
    })

    console.log(arr1);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach((person) => {
      if(person.profession === "developer")
      {
        console.log(person);
      } 
    })
  }
  
  function addData() {
    //Write your code here, just console.log
    const addData = {id:4, name:"susan", age:"20", profession:"intern"};
    arr.push(addData);
    console.log("New pushed object is ", addData);
    console.log(arr);

  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    // for(let i = arr.length - 1; i >= 0; i--)
    // {
    //     if(arr[i].profession === "admin")
    //     {
    //         arr.splice(i, 1);
    //     }
    // }
    // console.log("Admins are removed");


    const removeAdmin = arr.filter((person) => {
      return person.profession != "admin";
    })
     console.log(removeAdmin);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const newArr = [
      { id: 4, name: "abc", age: "21", profession: "Intern" },
      { id: 5, name: "def", age: "22", profession: "Manager" },
      { id: 6, name: "ghi", age: "23", profession: "HR" },
    ];

    const concat = arr.concat(newArr);
    console.log(concat);
  }