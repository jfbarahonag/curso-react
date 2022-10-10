import { Component, Fragment } from "react";

export class Fragance extends Component{
    render() {
        return(
            <Fragment>
                <h4>Fragancia</h4>
                <h4>Fragancia</h4>
            </Fragment>
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
                <h1
                className="candle"
                >Vela XYZ</h1>
                <Description />
            </div>
        )
    }
}

export default Candle;