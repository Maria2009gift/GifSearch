
import React, {Component} from 'react';
import { Images } from './GifListStyled';

class GifList extends Component {

    state = {
        gifs: []
    }

    componentDidMount(prevProps, prevState) {
        fetch(`https://api.giphy.com/v1/gifs/categories?api_key=HXcBelphjsOPPLP8Rj53WmpL4ZQTJ6kf`)
        .then(res => res.json())
        .then(gifs => {
            console.log(gifs.data);
            this.setState({gifs:gifs.data})
            
        })
    }

    render() {
        // if (this.state.gifs.data !== null && this.state.gifs.data !== undefined) {   
        //     console.log(this.state.gifs);
        // }

        
        return(
            <>
                <ul>
                    {this.state.gifs !== undefined && this.state.gifs.map((gif)=> {
                        // console.log(gif.gif.user);
                        
                      return ( <li>
                        {/* <p>{gif.gif.title}</p> */}
                            {gif.gif.user && <Images url={gif.gif.user.banner_image} alt=''/>}
                            
                        </li>)
                    })}
                </ul>
            </>
        )
    }

}

export default GifList