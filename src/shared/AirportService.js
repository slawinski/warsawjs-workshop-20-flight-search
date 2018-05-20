import axios from 'axios';
import {AirportModel} from "../shared/models/AirportModel";

export class AirportService {

    static API_URL = `http://warsawjs-flights-api.herokuapp.com`;

    static getAirportSources() {
        return axios.get(`${this.API_URL}/airports`)
            .then(res => {
                return res.data.map(item => new AirportModel(item));
            });
    }
    static fetchFlights(fromAirport, toAirport) {
      return axios.get(`${this.API_URL}/flights/01-01-2018/31-01-2018/${fromAirport.id}/${toAirport.id}`).then(res => {
        return res.data;
      })
    }
    }
