import "./InfoBox.css";
// import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({ info }) {
    let ImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbqy0mN6D4_k8Jw3KOpAHzTD5QtBbas4PyDQ&s";

    let HOT_URl = "https://th.bing.com/th/id/OIP.U2hqhn4qn43jKGTlurfc9QHaEK?rs=1&pid=ImgDetMain";
    let COLD_URL = "https://th.bing.com/th/id/OIP.Bqd0wB0dZX4OqCtnxOYbtQHaE7?rs=1&pid=ImgDetMain";
    let RAIN_URl = "https://th.bing.com/th/id/OIP.nX5pnQxG3pc9ZHizFdW2SgHaEK?rs=1&pid=ImgDetMain";


    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="180"
                            image={info.humidity > 80 ? RAIN_URl : info.temp > 15 ? HOT_URl : COLD_URL}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" component={"span"}>
                                <p>Temperature  = {info.temp}&deg;C</p>
                                <p>Humidity = {info.humidity}&deg;C</p>
                                <p>Min Temp = {info.temp_min}&deg;C</p>
                                <p>Max Temp = {info.temp_max}&deg;C</p>
                                <p>The wheather can be described has <i><b>{info.wheather}</b></i> and feels like <b>{info.feels_like}&deg;C</b> </p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </div>
        </div>
    );
}