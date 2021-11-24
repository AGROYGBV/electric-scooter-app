const User = require("./user");

describe('User class', () => {
    const testUser = new User("Rachel Carson", "secretPassword1", "email@aol.com", "214.223.3551", "4664 3220 6554 9900", 1200, 1400)

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
        expect(testUser.startTime).toStrictEqual(1200)
    });
    test('user has start time', () => {
        expect(testUser.endTime).toStrictEqual(1400)
    });
    test('payment amount function works', () => {
        expect(testUser.paymentAmount()).toStrictEqual(31)
    });
    
    
    
    
    // test('bag needs to be within weight limit', () => {
    //     const testBag2 = new Bag(0)
    //     expect(testBag2.isOverLimit()).toBe(true)
    //     const testBag3 = new Bag(26)
    //     expect (testBag3.isOverLimit()).toBe(true)
    //     const testBag4 = new Bag(17)
    //     expect (testBag4.isOverLimit()).toBe(false)
    // });
});