import * as React from 'react'
import Hotel from '../../componetns/Hotels/Hotel'

interface Prop {
    hotels:{
        id: number
        name: string
        url: string
        thumbUrl: string
        price: string
        reviewAverage: number
        reviewCount: number
        distance: number
    }[]
}

const HotelsTable = (props:Prop) => {
    return (
        <table >
      <thead>
        <tr>
          <th>画像</th>
          <th>ホテル名</th>
          <th className="hotel-price-column">値段</th>
          <th>レビュー</th>
          <th>レビュー件数</th>
          <th>距離</th>
       </tr>
      </thead>
      <tbody>
          {props.hotels.map(hotel => {
              return (
                    <Hotel 
                        name={hotel.name}
                        distance={hotel.distance}
                        price={hotel.price}
                        reviewAverage={hotel.reviewAverage}
                        reviewCount={hotel.reviewCount}
                        url={hotel.url}
                        thumbUrl={hotel.thumbUrl}
                    />
              )
          })}
      </tbody>
    </table>
    )
}


export default HotelsTable