/**
 * 38. Write a JavaScript program to check the 
total marks of a student in various examinations.
The student will get A+ grade if the total marks 
are in the range 89..100 inclusive, if the examination
is "Final-exam." the student will get A+ grade where 
total marks must be greater than or equal to 90. 
Return true if the student get A+ grade or false otherwise.
 */

 function question38 (marksArr,isFinalExam)  {
    if(!marksArr || !(marksArr instanceof Array) || !marksArr.length) return false;
    const total = marksArr.reduce((score,sum) => parseInt(score) + Number(sum),0)
    console.log('t',total);
    return (total > 89 <=100) && !isFinalExam       
    return (total >= 90 && isFinalExam) 
 }

 console.log('result: ',question38(["78","89","99"],false));
 console.log('result: ',question38([20,5,4],true));
 console.log('result: ',question38([20,5,"4"],true));
 console.log('result: ',question38("",true));
 console.log('result: ',question38([],true));