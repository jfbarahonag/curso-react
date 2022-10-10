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
    colors = ['yellow', 'blue', 'red']

    countColors() {
        return this.colors.length;
    }
    
    render() {
        return(
            <div className="candle">
                <h1>{ this.props.name }</h1>
                {this.props.fragancy}
                <Description />
                <p>{this.props.cost}</p>
                Total colors: {this.countColors()}
                <ul>{this.colors.map(color => <li>{color}</li>)}
                </ul>
                <Button variant="contained">
                    Click me
                </Button>
            </div>
        )
    }
}

export default Candle;