// function question40(num1, num2) {
//   if (num1 === 8 || num2 === 8) {
//     if (num1 + num2 === 8 || Math.abs(num1 - num2) === 8) {
//       return `Yes their sum or difference is 8`;
//     }
//     return `is true`;
//   }
//   return `is false`;
// }

// console.log(question40(7, 8));

// /*
// 44. Write a JavaScript program to check
// from three given integers that whether
// a number is greater than or equal to 20
// and less than one of the others.
//  */
// function question44(num1, num2, num3) {
//   if (num1 >= 20 || num2 >= 20 || num3 >= 20) {
//     if (
//       num1 < (num2 || num3) ||
//       num2 < (num1 || num3) ||
//       num3 < (num1 || num2)
//     ) {
//       return `Yes greater than or equal to 20
//             and less than one of the others`;
//     }
//     return `is false`;
//   }
//   return `is false`;
// }
// console.log(question44(20, 24, 23));

/*
38. Write a JavaScript program to check the 
total marks of a student in various examinations.
The student will get A+ grade if the total marks 
are in the range 89..100 inclusive, if the examination
is "Final-exam." the student will get A+ grade where 
total marks must be greater than or equal to 90. 
Return true if the student get A+ grade or false otherwise.
 */
function examination(course = { math, english, social }) {
  return course.math + course.english + course.social;
}
const reqCourse = { math: 20, english: 8, social: 9 };

function finalExamination() {
    if (examination(reqCourse) > 89 && examination(reqCourse) <= 100) {
      if (examination(reqCourse) > 90 && examination(reqCourse) <= 100) {
        return `Student had A+ in final Examination `;
      }
      return `Student had A+ in Examination but Failed in Final Examination`;
    }
    return `Student Failed Examination`;
  }
  

console.log(finalExamination());
