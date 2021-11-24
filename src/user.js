class User {
    constructor(name, password, email, phoneNumber, cardNumber, startTime, endTime) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.cardNumber = cardNumber;
        this.startTime = startTime;
        this.endTime = endTime;
    }

    paymentAmount() {
        return Math.round(((this.endTime - this.startTime) * .15 + 1) * 100)/100;
    }

}

u1 = new User("Rachel Carson", "secretPassword1", "email@aol.com", "214.223.3551", "4664 3220 6554 9900", 1245, 1407)

console.log(u1.paymentAmount());
console.log(u1);

module.exports = User;