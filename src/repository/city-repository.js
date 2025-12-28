const { City }= require('../models/index');



class CityRepository {          // class is blurprint  and this class groups all DB-related City operations

      async createCity ({name}) {
        try {
          const city= await City.create({name });
          return city;
        }
        catch (error){
            console.log("something went wrong in repository layer");
            throw(error);
        }
      };



      async deleteCity(cityId) {
        try {
          await City.destroy({
            where :{
              id: cityId
            }
          });
          return true;
        }
        catch(error) {
          console.log("something went wrong in repository layer");
          throw(error)
        }
      };



      async updateCity () {
        try{
            const city= await City.update(
              {data},
              { where :{
                id: cityId
                }
              });
            return city;
        }
        catch(error){
          console.log("some error occured");
          throw(error);
        }
      };



      async getCity (cityId) {
        try {
          const city=await City.findByPK(cityId);
          return city;
        }
        catch(error){
          console.log("some error occured");
          throw(error);
        }
      };
  }


module.exports=CityRepository;



