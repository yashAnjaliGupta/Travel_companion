import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {Paper , Typography,useMediaQuery} from '@material-ui/core';
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import Rating from '@material-ui/lab/Rating';

import useStyles from './styles';

const Map=({setCoordinates,setBounds,coordinates,places,setChildClicked})=>{
    const classes= useStyles();
    const isDesktop = useMediaQuery('(min-width:600px)');
    console.log(process.env);

    return(
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{key: process.env.REACT_APP_MAP_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50,50,50,50]}
                // options={' '}
                onChange={(e)=>{
                    console.log(e);
                    setCoordinates({lat: e.center.lat, lng: e.center.lng});
                    setBounds({ne:e.marginBounds.ne,sw:e.marginBounds.sw});
                }}
                onChildClick={(child)=>setChildClicked(child)}
            >
                {places?.map((place,i)=>(
                    <div 
                        className={classes.markerContainer}
                        lat={Number(place.latitude)}
                        lng={Number(place.longitude)}
                        key={i}
                    >
                        {
                            !isDesktop?(<LocationOnOutlinedIcon color="primary" fontSize="large"/>):(
                                <Paper elevation="3" className={classes.paper}>
                                    <Typography className={classes.Typography} variant="subtitle2">{place.name}</Typography>
                                    <img
                                        className={classes.pointer} 
                                        src= {place.photo? place.photo.images.large.url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fbuilding-1062.html&psig=AOvVaw3TJhrgR8Kf31h5zr71dzaf&ust=1643316744142000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiH6Yim0PUCFQAAAAAdAAAAABAP'}
                                        alt={place.name}
                                    />
                                <Rating size="small" value={Number(place.rating)}/>
                                </Paper>
                            )
                        }

                    </div>
                ))}
            </GoogleMapReact>
        </div>
    )
}
export default Map;