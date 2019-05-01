import Rakuten from '../lib/Rakuten'
import  * as geolib  from 'geolib'

const RAKUTEN_APP_ID = "1024778152066609184"

export const SearchHotelByLocation = (prop:any) => {
    const { location } = prop
    const params = {
        applicationId: RAKUTEN_APP_ID,
        datumType: 1,
        latitude: location.lat,
        longitude: location.lng,
    }
    return Rakuten.Travel.simpleHotelSearch(params).then(
        res => (
             res.data.hotels.map((hotel:any) => {
                const basicInfo = hotel.hotel[0].hotelBasicInfo
                const price = basicInfo.hotelMinCharge
                const distance = geolib.getDistance(
                    { latitude: location.lat, longitude: location.lng},
                    { latitude: basicInfo.latitude, longitude: basicInfo.longitude}
                )
                return {
                    id: basicInfo.hotelNo,
                    name: basicInfo.hotelName,
                    url: basicInfo.hotelInformationUrl,
                    thumbUrl: basicInfo.hotelThumbnailUrl,
                    price: price ? `${price}円` : "空室なし",
                    reviewAverage: basicInfo.reviewAverage,
                    reviewCount: basicInfo.reviewCount,
                    distance
                }
            })
        )
    )

}