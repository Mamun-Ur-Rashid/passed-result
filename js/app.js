
Students = [
    {id: 1, name: "Alice", marks: 50},
    {id: 2, name: "kamrul", marks: 70},
    {id: 3, name: "Kajol", marks: 80},
    {id: 4, name: "Nodi", marks: 20},
    {id: 5, name: "Mamun", marks: 29},
    {id: 6, name: "Habiba", marks: 90},
    {id: 7, name: "Shakib", marks: 95}
]
// search name 

function searchStudent(params) {
    const nameValue = document.getElementById("searchName").value.trim();
    const foundStudent = Students.find((student) => student.name.toLowerCase() === nameValue.toLowerCase());
    const resultDiv = document.getElementById("searchResult");

    if(foundStudent){
        resultDiv.innerHTML = `<div class="result"> Found ${foundStudent.name} (Marks: ${foundStudent.marks})</div>`
    }else{
        resultDiv.innerHTML = `<div class="result">No result Found search with : ${nameValue}</div>`
    }

}
// filter passed student
function passedStudent(params){
    const result = Students.filter((data)=> data.marks > 40);
    
    const filterResult = document.getElementById("filterResult");
    
    if (result.length > 0){
        filterResult.innerHTML = result.map((student) => `<div> ${student.name} (Marks: ${student.marks})</div>`).join("");
    }else{
        filterResult.innerHTML = `<div class="result">No passed Student!</div>`
    }

}
// find first failled student
function failedStudent(params){
    const restult = Students.find((student) => student.marks <= 40);
    console.log(restult)
    const failedStudent = document.getElementById("failledStudent");
    
    if(restult){
        failedStudent.innerHTML = `<div class="result"> Failled Student name: ${restult.name} (Marks: ${restult.marks})</div>`
    }else{
        failedStudent.innerHTML = `<div class="result">No Failled Student!</div>`
    }
}