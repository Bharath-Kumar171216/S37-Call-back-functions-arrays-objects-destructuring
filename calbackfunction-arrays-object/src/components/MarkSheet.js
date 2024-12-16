import React from 'react'

function MarkSheet() {

     let calculateResult = (engMarks,telMarks,hinMarks,mathMarks,socMarks,sciMarks)=>{
        let passMarks = 35
        if(engMarks>=passMarks &&
            telMarks>=passMarks &&
            hinMarks>=passMarks &&
            mathMarks>=passMarks &&
            socMarks>=passMarks &&
            sciMarks>=passMarks 
        ){
            console.log(`Passed in tenth`)
        }else{
            console.log(`Failed in tenth`)
        }

     }
     calculateResult(56,50,56,56,56,56);
     let lakshmanDetails = {
        Name: "lakshman",
        age: 24,
        wifename : "maheshwari",
        daughtername : "kavita",
        profession : "senior medical codder",

     }
     console.log(lakshmanDetails.Name);

    let rajuDetails = {
      firstName : "Raju",
      lastName : "Gudise",
      role : "Software Enginner",
      wifeName : "Bharathi",
      Family:{
        daughter : "Yamini",
        son : "Chandu",
      }
    }
    console.log(rajuDetails.Family.daughter);

    let BharathDetails = ["sri krishna","Manga Devi","Sushma Sivani"];
    console.log(BharathDetails[2]);
  

  return (
    <div>
    <h1>Functional components</h1>
    </div>
  )
}

export default MarkSheet
