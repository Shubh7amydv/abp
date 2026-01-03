const { FlightRepository,AirplaneRepository }=require('../repository/flight-repository')

class flightservice {

    constructor(){
        this.airplaneRepository= new AirplaneRepository();
    }

    async createFlight (data) {
        try {
            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    };
    // async deleteFlight () {};
    // async getFlight () {};
    // async updateFlight () {};

}