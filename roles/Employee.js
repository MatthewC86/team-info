class Employee {
    constructor (name, id, email) {
        Object.assign(this, {
            name, id, email
        });
    }


getName() {
    return this.name
}

getId() {
    return this.id
}

getEmail() {
    return this.email
}

getRole() {
    return 'Employee';
    }
}