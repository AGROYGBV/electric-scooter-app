const Scooter = require("../src/scooter.js/index.js");

describe('Scooter class', () => {
    const testScooter = new Scooter("8", "Deep Ellum", "Greenville", "Yes");

    test('user has id, chargeOrigin, chargeDestination, checkedOut', () => {
        expect(testScooter.id).toBe("8")
        expect(testScooter.chargeOrigin).toBe("Deep Ellum")
        expect(testScooter.chargeDestination).toBe("Greenville")
        expect(testScooter.checkedOut).toBe("Yes")
        expect(Scooter.chargingStations).toStrictEqual(["Deep Ellum", "Greenville", "Oak Cliff", "Trinity Groves", "Downtown", "Oak Lawn", "Uptown"])
        expect(testScooter.isCheckedOut()).toBe(true)
    });
});    