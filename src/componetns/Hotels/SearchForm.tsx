import * as React from 'react'

interface Props {
    place: string
    setPlace: (place:string) => void
    searchPlace: (place:string) => void
}

const SearchForm = (props:Props) => {

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(props.place == ''){
            return ;
        }
        console.log(props.place)
        props.searchPlace(props.place)
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        console.log(12341)
        e.preventDefault()
        props.setPlace(e.target.value)
    }

    return (
        <form onSubmit ={e => handleSubmit(e)} >
            <input type="text" onChange= {e => handleChange(e)} />
            <button type="submit">検索</button>
        </form>
    )
}

export default SearchForm
