import { Component, Fragment } from "react";
import Button from '@mui/material/Button';

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
            <div className="candle">
                <h1>Vela XYZ</h1>
                <Description />
                <Button variant="contained">
                    Click me
                </Button>
            </div>
        )
    }
}

export default Candle;