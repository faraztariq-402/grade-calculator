let grade = prompt("Enter Your Percentage: ");
grade = Number(grade);
if (grade<0||grade>100){
    console.log("Invalid");
    alert("Invalid");

}else if(grade>=80){
    console.log("A+ Grade")
    alert("A+ Grade");

}else if(grade>=70){
    console.log("A Grade")
    alert("A Grade");

}else if(grade>=60){
    alert("B Grade");
    console.log("B Grade")
}else if(grade>=50){
    console.log("C Grade")
    alert("C Grade");
}
else if(grade>=40){
    console.log("D Grade")
    alert("D Grade");

}else if(grade>=33){
    console.log("E Grade")
    alert("E Grade");

}else{
    console.log("You are failed")
    alert("You are failed");
}
