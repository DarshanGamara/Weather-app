  import Card from "@mui/material/Card";
  import CardContent from "@mui/material/CardContent";
  import CardMedia from "@mui/material/CardMedia";
  import Typography from "@mui/material/Typography";
  import  "./InfoBox.css";



   function InfoBox({info}) {

       const IMG_URL =
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKwoeb0S9KXDyOBHemFwaNuIPwOx8ttwM3Aw&s";
         
          const HOT_URL =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXueQ_4lX_3EFX2zPltS0fkFwQ48jWxYr2HqkZbiDHO8PuCccHpTD5Sms&s";
          const COLD_URL =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAXWqDvkNw1u_fFAMf5YKSx3oEXF_pvG5ASA&s";
          const RAIN_URL =
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3TdlUMaHBsBS5GvoVCTehmifAjmv_vgAoEgb9B4IovmjIcJkZWRdjA4&s";

       return (
         <div className="infoBox">
           <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                 sx={{ height: 140 }}
                 image={info.humidity > 90 ? RAIN_URL : info.temp > 20 ? HOT_URL : COLD_URL}
                 title="green iguana"
               />
               <CardContent>
                 <Typography gutterBottom variant="h5" component="div">
                   {info.city}
                 </Typography>
                 <Typography
                   variant="body2"
                   sx={{ color: "text.secondary" }}
                   component={"span"}
                 >
                   <p> Temperature: {info.temp}&deg;C </p>
                   <p> Humidity: {info.humidity} </p>
                   <p> Min Temperature: {info.tempMin}&deg;C </p>
                   <p> Max Temperature: {info.tempMax}&deg;C </p>
                   <p>
                     The Weather <b>{info.weather}</b> FeelsLike:{" "}
                     {info.feelsLike}&deg;C
                   </p>
                 </Typography>
               </CardContent>
             </Card>
           </div>
         </div>
       );
   };

     export default InfoBox;