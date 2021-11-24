const User = require("../src/user");

describe('User class', () => {
    const testUser = new User("Rachel Carson", "secretPassword1", "email@aol.com", "214.223.3551", "4664 3220 6554 9900", 1245, 1407)

    test('user has name', () => {
        expect(testUser.name).toBe("Rachel Carson")
    });
    test('user has password', () => {
        expect(testUser.password).toBe("secretPassword1")
    });
    test('user has email', () => {
        expect(testUser.email).toBe("email@aol.com")
    });
    test('user has phoneNumber', () => {
        expect(testUser.phoneNumber).toBe("214.223.3551")
    });
    test('user has bank card number', () => {
        expect(testUser.cardNumber).toBe("4664 3220 6554 9900")
    });
    test('user has start time', () => {
        expect(testUser.startTime).toStrictEqual(1245)
    });
    test('user has end time', () => {
        expect(testUser.endTime).toStrictEqual(1407)
    });
    test('payment amount function works', () => {
        expect(testUser.paymentAmount()).toBe(25.30)
    });
});