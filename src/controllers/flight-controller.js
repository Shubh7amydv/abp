const { flightService}=require('../services/index');

const FlightService= new flightService();



const create= async (req,res) =>{
    try {

       const flight=await FlightService.createFlight(req.body);
       return res.status(201).json({
            data:flight,
            success:true,
            message:"successfully created a airport ",
            err:{}
        });

    
        
    } catch (error) {
        console.log("REQ BODY:", req.body);
        return res.status(500).json({
            data:{},
            success:false,
            message:"Cannot create a flightt ",
            err:error
        })
    }
};
const get=async(req,res)=> {};

module.exports={
    create,
    get
}




// "flightNumber":
//   "airplaneId":
//   "departureAirportId":
//    "arrivalAirportId":
//   "arrivalTime":
//   "departureTime":
//   "price":
//   "totalSeats" :
