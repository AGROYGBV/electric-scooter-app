const Scooter = require("../src/scooter");

describe('Scooter class', () => {
    const testScooter = new Scooter("8", "Deep Ellum", "Greenville", "Yes");

    test('user has id, chargeOrigin, chargeDestination, checkedOut, charging stations, and checkedOut method', () => {
        expect(testScooter.id).toBe("8")
        expect(testScooter.chargeOrigin).toBe("Deep Ellum")
        expect(testScooter.chargeDestination).toBe("Greenville")
        expect(testScooter.checkedOut).toBe("Yes")
        expect(Scooter.chargingStations[3]).toStrictEqual("Trinity Groves")
        expect(testScooter.isCheckedOut()).toBe(true)
    });
});    