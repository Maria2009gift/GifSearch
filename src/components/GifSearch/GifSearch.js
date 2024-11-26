
import React, {Component} from 'react';


class GifSearch extends Component {
    state = {
        valueInput: "",
    }

    

    handleSubmit = (event) => {  
        event.preventDefault()
        let valueInput = event.target.elements.search.value
        // this.setState({valueInput: valueInput})
        this.props.getValue(valueInput)
    }
    
    render() {
        // console.log(this.state.valueInput);
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='search'/>
                    <button type='submit'>Пошук</button>
                </form>
            </>
        )
    }


}

export default GifSearch