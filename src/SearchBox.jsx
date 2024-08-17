import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from "react";


export default function SearchBox({ updateInfo }) {

    let [city, setCity] = useState("");
    let [error, setError] = useState(false);

    let API_KEY = "caf495423ac0a8641c45bbda11735898";
    let URL = "https://api.openweathermap.org/data/2.5/weather";

    let getWhetherData = async () => {
        try {
            let response = await fetch(`${URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();

            let result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                temp_min: jsonResponse.main.temp_min,
                temp_max: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feels_like: jsonResponse.main.feels_like,
                wheather: jsonResponse.weather[0].main,
            }
            setError(false);
            console.log(result);
            return result;
        } catch (err) {
            throw ("Something Went Wrong");
        }


    };

    let changeCity = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async (event) => {
        try {
            event.preventDefault();
            setCity("");
            let newInfo = await getWhetherData(city);
            updateInfo(newInfo);
            
        } catch (err) {
            setError(true);
        }

    }

    return (
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
                <TextField label="Search City" variant="outlined" required value={city} onChange={changeCity} />
                <br /><br />
                <Button variant="contained" type="submit"> Search</Button>
                {error && <p style={{color:"red"}}>No Such Place Exist  in API</p>}
            </form>

        </div>
    );

}