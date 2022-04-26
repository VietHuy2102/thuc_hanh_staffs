class Staff {
    public name: string;
    public email: string;
    public age: number;

    constructor(name: string,
                email: string,
                age: number) {
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getName(): string {
        return this.name;
    }

    getEmail(): string {
        return this.email;
    }

    getAge(): number {
        return this.age
    }

    setName(name: string): void {
        this.name = name
    }

    setEmail(email: string): void {
        this.email = email
    }

    setAge(age: number): void {
        this.age = age
    }

}

let staff = new Staff(`Huy`, `nvh@gmail.com`, 30)

 let nameStaff = staff.getName();
 console.log(nameStaff);
staff.setName(`Uyen`);
let currentNameStaff = staff.getName()
console.log(currentNameStaff)


let emailStaff= staff.getEmail();
console.log(emailStaff);
staff.setEmail(`nobita@gmail.com`)
let currenEmailStaff = staff.getEmail()
console.log(currenEmailStaff)

let ageStaff = staff.getAge();
console.log(ageStaff);
staff.setAge(32)
let currentAgeStaff = staff.getAge()
console.log(currentAgeStaff)