import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Chart from '../components/chart';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';


class WeatherList extends Component {
    renderWeather(cityData) {
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);

        return (
            <tr key ={cityData.city.name}>
                <td>{cityData.city.name}</td>
                <td><Sparklines height={120} width ={180} data ={temps}> <SparklinesLine color="orange" /> <SparklinesReferenceLine type="mean" /></Sparklines></td>
                <td><Sparklines height={120} width ={180} data ={pressures}> <SparklinesLine color="green" /> <SparklinesReferenceLine type="mean" /></Sparklines></td>
                <td><Sparklines height={120} width ={180} data ={humidities}> <SparklinesLine color="black" /> <SparklinesReferenceLine type="mean" /></Sparklines></td>
            </tr>

        );

    }


    render(){
        return (<table className = "table table-hover">
            
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
                </table>
            )
    }
}

// function mapStatetoProps(state){

//     return {weather:state.weather}
// }

function mapStatetoProps({weather}){
    
    return {weather} 
}

export default connect (mapStatetoProps)(WeatherList);