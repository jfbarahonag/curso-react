import React, {Component, Fragment} from 'react';
import {Fab, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

class NewCandle extends Component {

    addDish(evt) {
        console.log('Add a candle');
    }

    render() {
        return (
        <form autoComplete='off'>
            <TextField
                label="Vela..."
                type='text'
                margin='normal'
                variant='outlined'
            />
            <Fab 
                color='primary'
                size='medium'
                className='candle-form-icon'
                onClick={this.addDish}>
                    <AddIcon />
            </Fab>
        </form>
        );
    }
}

export default NewCandle