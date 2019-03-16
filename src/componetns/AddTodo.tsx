import * as React from 'react'

interface Props {
    onSubmit: (text: string) => void;
}

interface State {
    value: string
}

class AddTodo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        this.setState({
            value: event.target.value
        })
    }
    handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const text = this.state.value.trim()
        if (text === '') {
            return ;
        }
        this.props.onSubmit(text)
        this.setState({ value:''})
    }
    render() {
        return (
            <div>
                <form action="" onSubmit={(e) => { this.handleSubmit(e)}}>
                    <input type="text"
                        onChange={(e) => { this.handleChange(e);}}
                        value={this.state.value}
                    />
                    <button type={'submit'}>
                        Add Todo
                    </button>
                </form>
            </div>
        )
    }
 }

 export default AddTodo