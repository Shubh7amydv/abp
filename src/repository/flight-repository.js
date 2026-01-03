const {flight}=require("../models/index");

class FlightRepository {
    async createFlight(data) {
        try {
            const flight=await flight.create(data);
            return flight;
            
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
    };
    async deleteFlight(flightId) {
        try {
            await flight.destroy({
                where :{
                    id:flightId,
                }
            });
            return true;
            
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
        
    };
    async getFlight(flightId) {
         try {
            const flight=await flight.findByPk(flightId);
            return flight;
            
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw(error);
        }
    };
    // async updateFlight() {};

}


module.exports=FlightRepository;