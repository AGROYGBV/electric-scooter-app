const Scooter = require("../src/scooter");

describe('Scooter class', () => {
    const testScooter = new Scooter("8", "Deep Ellum", "Greenville", false);

    test('user has id, chargeOrigin, chargeDestination, checkedOut, charging stations', () => {
        expect(testScooter.id).toBe("8")
        expect(testScooter.chargeOrigin).toBe("Deep Ellum")
        expect(testScooter.chargeDestination).toBe("Greenville")
        expect(testScooter.checkedOut).toBe(false)
        expect(Scooter.chargingStations[3]).toStrictEqual("Trinity Groves")
        
    });

    test('can change checkOut status', () => {
        testScooter.checkOut(); 
        expect(testScooter.checkedOut).toBe(true)
    })
    
});    