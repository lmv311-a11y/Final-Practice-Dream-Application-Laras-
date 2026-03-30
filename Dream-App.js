
// Create Password for patients and the relatives in order to login to the app and keep track of the progression of the status , treatments, and other information.


const readline = require ("readline-sync");  
 


// Current patient listed in ER
let patientInfo = new Array(20);                  // Building Arrays(n)  
   patientInfo[0] = {
   Name: "Robert", 
    Surname:"Smith" , 
    Status: "treatment", 
    estTime: "1 hour(s)", 
    relativeContact: "Becky Harrison",
    password: "aa54910",
};

   patientInfo[1] = {                              
   Name: "Maria", 
    Surname: "Ginnis", 
    Status: "triage", 
    estTime: " 120 minutes", 
    relativeContact:"Britt Plato",
    password: "bb54910",
    
};

// Let grab the new patient informations
let firstname = readline.question("Enter patient firstname:")                              //Value, Data types, and operation using readline- sync 
let lastname = readline.question("Enter patient lastname:")
let relative = readline.question("Enter relative contact (first and last name):")
let status = "triage"
let password= "";

// Let create a patient password and ensure it meets the requirements 
let passwordContainsNumber = false                                    // control structure-- Boolean and condition statement
while (passwordContainsNumber===false || password.length < 3){         //Stringing Character together -- using length
    password = readline.question("Enter a password:")
    console.log("provided password is: " + password)

    // check each character of the passord to ensure at least 1 number is present
    for (const character of password) {
        if (Number.isInteger(Number(character))){                      // control structure Boolean and condition statement
            passwordContainsNumber = true
            console.log("Contains a number")   
        }    
    }
    // explain why we are asking again for a password
    if (passwordContainsNumber===false){
        console.log("Your password does not meet the minimum requirements of at least 1 number")
    }  
}

console.log("Your password was successfully created")

// Lets calculate the wait time
let totalWaitTime=0
 patientInfo.forEach(patient => {              // Using Arrays --- Using the forEach to look at each patient for converting and adding to the total wait. 
    convertToInt=parseInt(patient.estTime)  // Data Type conversion -- the esttimed is converted to number since the data type is in string and get only the first number in the string
    
    if (patient.estTime.includes("hour(s)")){                          
        convertTimeinMin =  convertToInt * 60
     totalWaitTime = totalWaitTime + convertTimeinMin
    }else {
        totalWaitTime = totalWaitTime + convertToInt
       
    } 
  
});

console.log("Based on our current patients list, your estimated wait time is approximately " + totalWaitTime / 60  + " hour(s)"); // value , data type and Operation type -- here I am adding the estimated time of all the patients to give an aproximative time of wait to the new patient.

// Creating the newPatien object with the provided data as well as the calculated whait time for this patient
let newPatient = {                                                //creating and using Object
    Name: firstname,                                    
    Surname:lastname , 
    Status: status, 
    estTime: totalWaitTime + " minute(s)", 
    relativeContact: relative,
    password: password,
};

// Adding the new patient to the patient list
patientInfo.push(newPatient)                                     //Using Array -- iterator method






// must contain 8 characters , at least one number

//Using data type - primitive - Symbole to give a unique Id to login to the app
//const ID_KEY = Symbol('employeeId');d





//Creating Array for doctors 
// data type : create object to organize and maintain patients information

      




//The following step will allow the app to track current patients stay to provide real-time wait-time estimates for new arrivals



