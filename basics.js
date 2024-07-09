let names = ["Arun", "Malu", "Jose"];
console.log(names);
console.log("Length of the list = " + names.length);

function printer() {
    console.log(names);
}

function pusher(name) {
    names.push(name);
    printer();
}

function inserter(name){
    names.unshift(name);
}

pusher("Navneeth");
printer();
inserter("Anu");
printer();


let person = {
    name_of_person: "Navneeth Arun",
    age_of_person:  20
}

let persons = [
    {
        name_of_person: "Adish U",
        age_of_person: 20
    },
    {
        name_of_person: "Afrina Farook",
        age_of_person: 20
    },
    {
        name_of_person: "Amritha Manoj",
        age_of_person: 19
    },
    {
        name_of_person: "Hari",
        age_of_person: 20
    }
];

console.log(persons[2].name_of_person);