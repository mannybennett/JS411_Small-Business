import React from 'react'
import { useParams } from 'react-router-dom';
import { Container } from '@mui/material';
import maps from '../images/maps.jpg'

const Details = (props) => {
  const { id } = useParams();
  const listing = props.listings.find((l) => l.id === Number(id));

    return (
        <Container sx={{ textAlign: 'center' }} maxWidth="md">
            <div>
                <h2>{listing.name}</h2>
                <h4>{listing.description}</h4>
                <h4>{listing.hours}</h4>
                <h4>{listing.address}</h4>
            </div>
            <img alt='pic' src={maps}></img>
        </Container>
    )
}

export default Details