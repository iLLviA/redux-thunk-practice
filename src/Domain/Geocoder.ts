import axios from 'axios'

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyArdDInOBYawxpt97Jp7z1EjrtaLpgzv3Q';



export const geocode = (place:string) => 

    axios
        .get(GEOCODE_ENDPOINT, {params: {address: place}})
        .then((res: any) => {
            const data = res.data;
            const status = data.status;
            const result = data.results[0];
            (result)
            if(typeof result === 'undefined') {
                (status)
                return {status}
            }
            const address = result.formatted_address;
            const location =  result.geometry.location;
            return { status, address, location } 
      })



