class Scooter {
    constructor(id, chargeOrigin, chargeDestination, checkedOut) {
        this.id = id;
        this.chargeOrigin = chargeOrigin;
        this.chargeDestination = chargeDestination;
        this.checkedOut = checkedOut;
    }

    static chargingStations = ["Deep Ellum", "Greenville", "Oak Cliff", "Trinity Groves", "Downtown", "Oak Lawn", "Uptown"];

    isCheckedOut(checkedOut) {
        if (this.checkedOut === "Yes") {
            return true;
        } else if (this.checkedOut === "No") {
            return false;
        }
    }

}

let s1 = new Scooter("8", "Deep Ellum", "Greenville", "Yes");
console.log(s1.isCheckedOut());

module.exports = Scooter;