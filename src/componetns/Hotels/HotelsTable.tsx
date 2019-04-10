import * as React from 'react'

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
          {props.hotels.map}
      </tbody>
    </table>
    )
}


export default HotelsTable