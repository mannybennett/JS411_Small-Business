import React, { Component } from 'react'
import { Button, TextField } from '@mui/material'

class AddListing extends Component {
    state = {
        name: '',
        description: '',
        hours: '',
        address: ''
    }

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const payload = { ...this.state }
        payload.id = this.props.listings.length + 1
        this.props.addListing(payload)
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevProps.listings.length !== this.props.listings.length) {
            console.log(this.props.listings)
            this.setState({
                name: '',
                description: '',
                hours: '',
                address: ''
            })
        }
    }

    render() {
        return (
                <div className='add-container'>
                    <form
                        onSubmit={this.handleSubmit}
                        className="add-form">
                        <TextField 
                            id="name" 
                            placeholder="Name"
                            variant="standard" 
                            value={this.state.name} 
                            onChange={this.handleTextChange} 
                            required />
                        <TextField 
                            id="address" 
                            placeholder="Address"
                            variant="standard" 
                            value={this.state.address} 
                            onChange={this.handleTextChange} 
                            required />
                        <TextField 
                            id="hours" 
                            placeholder="Hours"
                            variant="standard" 
                            value={this.state.hours} 
                            onChange={this.handleTextChange} 
                            required />
                        <TextField 
                            id="description" 
                            placeholder="Description"
                            variant="standard" 
                            value={this.state.description} 
                            onChange={this.handleTextChange} 
                            required />
                        <br />
                        <Button sx={{ backgroundColor: "#3F51B5", maxWidth: '50%' }} variant="contained" type="submit">Save</Button>
                    </form>
                    <img alt='pic' src='../maps.jpg'></img>
                </div>
        )
    }
}

export default AddListing