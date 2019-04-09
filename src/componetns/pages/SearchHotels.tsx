import * as React from 'react'
import SearchForm from '../../container/Hotels/SearchForm'
import GeocodeResult from '../../componetns/Hotels/GeocodeResult'
const App: React.FC = () => {
    return (
        <div>
            <SearchForm />
            <GeocodeResult />
        </div>
    )
}


export default App