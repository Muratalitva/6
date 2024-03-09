class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    print() {
        console.log(`имя - ${this.name} возраст - ${this.age}`);
    }
}

class Students extends User {
    #password;
    constructor(name, age, username, password) {
        super(name, age);
        this.username = username;
        this.#password = password;
    }
    print(password) {
        if (password === this.#password) {
            console.log(`имя - ${this.name} возраст - ${this.age} username - ${this.username}`);
        }
    }
   get password() {
        return this.#password;
    }
}

let user = new User('Name', 14);
user.print();

let student = new Students('Name', 14, 'Username', 12345);
student.print(12345);
