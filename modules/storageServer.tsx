import fs from 'fs';

class Storage {
    DB: any[];
    constructor() {
       this.DB = [];
    }
    
    save(model) {
       this.DB.push(model)
    }

    getById(id) {
        const car = this.DB.find(element => element.uuid === id);
        if (!car) {
            throw new Error("Car not found");
        } else {
            return car
        }
    }

    

}