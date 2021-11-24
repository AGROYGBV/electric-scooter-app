class User {
    constructor(name, password, email, phoneNumber, cardNumber, startTime, endTime) {
        this.name = name;
        this.passowrd = password;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.cardNumber = cardNumber;
        this.startTime = startTime;
        this.endTime = endTime;
        this.timeRented = [];
    }

    timeUsed(startTime, endTime) {
        let timeDiff = endTime - startTime;
        this.timeRented.push(timeDiff);
        //console.log(timeDiff)
    }

    paymentAmount(timeRented) {
        return (timeRented * .15) + 1;
    }

}

u1 = new User("Rachel Carson", "secretPassword1", "email@aol.com", "214.223.3551", "4664 3220 6554 9900", 1200, 1400)
console.log(u1.timeRented);
console.log(u1.timeUsed);
console.log(u1.paymentAmount);
console.log(u1);

module.exports = User;