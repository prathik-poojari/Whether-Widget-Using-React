import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { useState } from 'react';
export default function WhetherApp() {

    let [whether, setWhether] = useState({
        city: "Mumbai",
        feels_like: 36.41,
        humidity: 66,
        temp: 30.99,
        temp_max: 31.94,
        temp_min: 30.99,
        wheather: "Maze",
    });

    let updateInfo =(newInfo)=>{
        setWhether(newInfo);
    }
 

    return (
        <div style={{ textAlign: "center" }}>
            <h1>WhetherApp</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info ={whether} />
        </div>
    );
} 