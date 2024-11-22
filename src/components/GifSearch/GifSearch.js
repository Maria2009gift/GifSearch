
import React, {Component} from 'react';


class GifSearch extends Component {
    state = {
        valueInput: " ",
    }

    handleInput = (event) => {
        this.setState({valueInput:event.currentTarget.value})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.getValue(this.state.valueInput)
    }

    render() {
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.valueInput} name='search' onChange={this.handleInput}/>
                    <button type='submit'>Пошук</button>
                </form>
            </>
        )
    }


}

export default GifSearch