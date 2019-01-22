/* 
Activity: Contact manager
*/


// TODO: Complete the program
console.log("Welcome to My Contacts Managers!");
var choice = 0;

//Array to store contacts 
var contacts = [];
do {
    console.log("1.List Contacts");
    console.log("2.Add a Contact");
    console.log("3.Delete a Contact by Name");

    console.log("4.Quit");

    choice = prompt("Choose Option");

    if (choice === "1") {
        getContacts();
    } else if (choice === "2") {
        createContact();
    } else if (choice === "3") {
        deleteContact();
    } else if (choice === "4") {
        console.log("Quiting.....Bye ");
    } else {
        console.log("Wrong Choice! Choose again? ");
    }

} while (choice != 4);

//Getting list of All Contacts 
function getContacts() {
    console.log("Heres the list of all your contacts");
    if (contacts.length > 0) {
        contacts.forEach((item, index, array) => {
            console.log("Last Name: " + item.lastName + ", First Name: " + item.firstName);
        });
    } else {
        console.log("Contact List Empty");
    }

}

// Creating a new Contact 
function createContact() {
    var firstName = "";
    var lastName = "";

    do {
        firstName = prompt("Enter First Name !!");
        lastName = prompt("Enter Last Name !!" );    
    }while((validateEntry(firstName)) || (validateEntry(lastName)));

    var person = {
        "firstName": firstName.toLowerCase(),
        "lastName": lastName.toLowerCase()
    };
    contacts.push(person);
}

//Deleting existing Contact
function deleteContact(){
    console.log("First matched contact will be deleted ");

    var name = "";
    do{
        name = prompt("Enter First Name or Last Name of contact to Delete");
    }while(validateEntry(name));

    contacts.forEach((item,index,array)=>{
        if(item.firstName === name.toLowerCase() || item.lastName === name.toLowerCase()){
            contacts.splice(index,1);
            console.log("Contact deleted ");
        }
    });

}

//Checks for Empty inputs 
function validateEntry(entry){
    entry = entry.trim("");
    entry = entry.toLowerCase();

    if(entry.length > 0){
        return false;
    }else{
        console.log("Entry should not be empty (: ");
        return true;
    }
}
