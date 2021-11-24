class Scooter {
    constructor(id, chargeOrigin, chargeDestination, checkedOut) {
        this.id = id;
        this.chargeOrigin = chargeOrigin;
        this.chargeDestination = chargeDestination;
        this.checkedOut = checkedOut;
    }

    static chargingStations = ["Deep Ellum", "Greenville", "Oak Cliff", "Trinity Groves", "Downtown", "Oak Lawn", "Uptown"];

    checkOut() {
        this.checkedOut = !this.checkedOut;
        }
}

let s1 = new Scooter("8", "Deep Ellum", "Greenville", "Yes");
s1.checkOut();
console.log(s1.checkedOut);

module.exports = Scooter;