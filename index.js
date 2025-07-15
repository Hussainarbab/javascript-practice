// for(let a =0; a<5;a++){
//     console.log("loop",a)
// }



// let b =100;
// while(b>0){
//     console.log("hussain",b);
//     b--
// }


// // let c=0;
// // do{
// //     console.log(
// //         'arbab',c
// //     )

// // }while(c<20);

// const fruits = ["apple", "banana", "cherry"];
// for (const fruit of fruits) {
//   console.log("For...of loop:", fruit);
// }


// if (person >= 20) {
//   alert("You are an adult");
// } else if (person >= 13) {
//   alert("You are a teenager");
// } else if (person > 0) {
//   alert("You are a child");
// } else {
//   alert("Invalid age entered");
// }

// let person = prompt("Enter your age");

// switch (true) {
//   case (person >= 20):
//     alert("You are an adult");
//     break;

//   case (person >= 13):
//     alert("You are a teenager");
//     break;

//   case (person > 0):
//     alert("You are a child");
//     break;

//   default:
//     alert("Invalid age entered");
// }

function checkAge() {
    const age = Number(document.getElementById("ageInput").value);
    const result = document.getElementById("result");

    if (age >= 20) {
      result.textContent = "You are an adult.";
    } else if (age >= 13) {
      result.textContent = "You are a teenager.";
    } else if (age > 0) {
      result.textContent = "You are a child.";
    } else {
      result.textContent = "Invalid age entered.";
    }
  }