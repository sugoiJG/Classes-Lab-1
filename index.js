// Option 1 (MEDIUM) vehicles

// Create a set of JavaScript classes that model different vehicles. Each vehicle should have a make, model, and year, as well as a method that returns a string representing the vehicle's description (e.g. "2019 Toyota Camry").

// Your set of classes should include at least three different types of vehicles, each with their own unique properties and methods. For example, you might create a "Car" class that has a number of doors and a "Truck" class that has a cargo capacity.

// Once you have created your classes, create instances of each type of vehicle and test their methods to make sure they are working correctly.

class Vehicle {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    } 
    own() {
       console.log(`You own a ${this.year} ${this.make} ${this.model} in ${this.color}`);
    } 
} 
const vehicle1 = new Vehicle ("Mazda", "3", "2020", "black") 
vehicle1.own() 


class EV {
    constructor(make, model, year, type) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
    }
    new() {
        console.log(`This brand new ${this.year} ${this.make} ${this.model} is a fully ${this.type} vehicle.`)
    }
}

const vehicle2 = new EV ("Tesla", "Model X", "2024", "electric")
vehicle2.new()

class Motorcycle {
    constructor(make, model, year, type) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.type = type;
    }
    ride() {
        console.log(`A ${this.make} ${this.model} is very fast since it's a ${this.type} bike. Be careful when riding it on the highway!`)
    }
}

const vehicle3 = new Motorcycle ("Kawasaki", "Ninja", "2016", "sport") 
vehicle3.ride()

// Option 2 (MEDIUM) Bank Account Class

// Create a JavaScript class that models a simple bank account. The account should have methods for depositing and withdrawing money, as well as checking the current balance. It should also keep track of the account holder's name and account number.

// The class should have a constructor method that takes in the account holder's name and creates a unique account number for the account. The account number should be generated automatically and should be different for each instance of the class.

// The class should also have a method for printing out the account details, including the account holder's name, account number, and current balance.

// Once you have created your bank account class, create an instance of the class and test its methods to make sure they are working correctly. You could also consider adding additional functionality, such as a method for calculating interest or transferring funds between accounts.

// Option 2 (HARD) calculator class

// Create a JavaScript class that models a simple calculator. The calculator should have methods for performing basic arithmetic operations such as addition, subtraction, multiplication, and division. It should also have a method for clearing the current value.

// The calculator should store the current value as a property of the class and update it as operations are performed. For example, if the calculator starts with a value of 0 and the user performs the operation "2 + 3", the calculator's current value should be updated to 5.

// Once you have created your calculator class, create an instance of the class and test its methods to make sure they are working correctly. You could also consider adding additional functionality, such as a method for calculating the square root or percentage of the current value.

 

// Option 3 (VERY HARD) Library Collection Factory 

// Create a JavaScript class that models a library. The library should have methods for adding books to the collection, removing books from the collection, checking out books to borrowers, and checking books back in.

// The class should also keep track of the titles, authors, and publication years of all books in the collection, as well as the current status of each book (available or checked out). The class should be able to check the availability of a book and the borrower who has checked it out, if any.

// The class should have methods for adding and removing borrowers, keeping track of their personal information, such as name and contact details. It should also have methods for adding and removing employees, keeping track of their name and role in the library, such as librarian or assistant.

// Finally, the class should have a method for generating reports, such as a list of all books in the collection or a list of borrowers who have overdue books. The reports should be customizable, so the user can choose which information to include.

// Once you have created your library class, create an instance of the class and test its methods to make sure they are working correctly. You could also consider adding additional functionality, such as a method for tracking the history of a book's borrowing and return, or integrating the class with a database to store and retrieve the library's data.
