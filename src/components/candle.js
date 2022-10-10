import { Component } from "react";

export class Fragance extends Component{
    render() {
        return(
            <div>
                <h3>Fragancia</h3>
            </div>
        )
    }
}

export class Description extends Component{
    render() {
        return(
            <div>
                <p>This is a description</p>
            </div>
        )
    }
}

class Candle extends Component{
    render() {
        return(
            <div>
                <h1>Vela XYZ</h1>
                <Description />
            </div>
        )
    }
}

export default Candle;