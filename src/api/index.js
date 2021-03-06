import axios from 'axios';



export const getPlaceData = async(type,sw,ne)=>{
    try{
        console.log(process.env)
        const {data:{data}} = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
              bl_latitude: sw.lat,
              tr_latitude: ne.lat,
              bl_longitude: sw.lng,
              tr_longitude: ne.lng,
            },
            headers: {
              'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
              'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY
            }
          });
        return data;
    }catch(error){
        console.log("errrrrrrrrror",error.message);
    }
}