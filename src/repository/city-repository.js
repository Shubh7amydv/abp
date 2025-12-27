const { City }= require('../models/index');



class CityRepository {          // class is blurprint  and this class groups all DB-related City operations
  async createCity({ name }) {
    try {
      const city = await City.create({ name });
      return city;
    } catch (error) {
      throw { error };
    }
  }

  }


module.exports=CityRepository;



