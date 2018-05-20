export class AirportModel {
    id;
    code;
    country;
    city;

    constructor(data){
        this.id = data.id;
        this.code = data.code;
        this.country = data.country;
        this.city = data.city;
    }
}
