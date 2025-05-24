
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
    const foundStudent = Students.find((sutdent) => sutdent.name.toLowerCase() === nameValue.toLowerCase());
    const resultDiv = document.getElementById("searchResult");
    
}