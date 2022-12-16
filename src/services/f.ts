import axios, {AxiosResponse} from "axios";
import {WeatherService} from './WeatherService'
import {IDay, Weather} from "../store/types/APItypes";

// jest.mock('axios')

// interface IW {
//     day: {
//         "maxtemp_c": any,
//         "maxtemp_f": any,
//     }
// }
//
// test('should fetch weather', () => {
//
//     const weather:IW[] = [
//         {
//             "day": {
//                 "maxtemp_c": 0.6,
//                 "maxtemp_f": 33.1,
//             }
//         }]
//
//     (axios.get as jest.MockedFunction<typeof axios.get>).mockResolvedValue({data: weather});
//     return WeatherService.getCurrentWeather('Moscow').then(data => expect(data).toEqual(weather));
// })