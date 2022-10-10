import React, {Component} from 'react';
import {Fab, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

class NewCandle extends Component {

    addCandle = (evt) => {
        evt.preventDefault();
        console.log('Add a candle');
        console.log(this.newCandle.value);
    }

    newCandle = React.createRef();

    render() {
        console.log(this);
        return (
        <form autoComplete='off'
            onSubmit={this.addCandle}>
            <TextField
                label="Vela..."
                type='text'
                margin='normal'
                variant='outlined'
                inputRef={evt => (this.newCandle = evt)}
            />
            <Fab 
                color='primary'
                size='medium'
                className='candle-form-icon'
                onClick={this.addCandle}>
                    <AddIcon />
            </Fab>
        </form>
        );
    }
}

export default NewCandle