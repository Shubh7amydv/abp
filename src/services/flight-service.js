const { FlightRepository,AirplaneRepository }=require('../repository/flight-repository')

class flightservice {

    constructor(){
        this.airplaneRepository= new AirplaneRepository();
        this.FlightRepository= new FlightRepository();
    }

    async createFlight (data) {
        try {
            const airplane= await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight= await this.FlightRepository.createFlight({...data, totalSeats:airplane.capacity});
            return flight;

            
        } catch (error) {
            console.log("something went wrong in service layer");
            throw(error);
        }
    };

    async getFlightData(){
        // TODO
    }
}

module.exports=flightservice ;




/***
 * flightNumber
 * airplaneId
 * departureAirportId
 * arrivalTime:
 * departureTime
 * price
 * totalSeats -> from airplane
*/