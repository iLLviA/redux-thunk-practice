import * as React from 'react'
import SearchForm from '../../container/Hotels/SearchForm'
import GeocodeResult from '../../componetns/Hotels/GeocodeResult'
import HotelsTable from '../../container/Hotels/HotelsTable'

const App: React.FC = () => {
    return (
        <div>
            <SearchForm />
            <GeocodeResult />
            <HotelsTable />
        </div>
    )
}


export default App