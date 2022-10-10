import React, {Component} from 'react';
import {Fab, TextField} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

class NewCandle extends Component {

    addDish = (evt) => {
        evt.preventDefault();
        console.log('Add a candle');
        console.log(this);
    }

    render() {
        console.log(this);
        return (
        <form autoComplete='off'
            onSubmit={this.addDish}>
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