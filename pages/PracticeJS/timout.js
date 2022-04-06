const student = [
    {name : "Piyush" ,age : "27"} ,
    {name : "Nikhil" ,age : "28"}
]

function enrollStudent(student){
setTimeout(function(){
    student.push(student);
},3000 );
}
//we are writting function inside the function and th