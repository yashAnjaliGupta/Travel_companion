import React from 'react';
import {Box,Typography,Button,Card,CardMedia,CardContent,CardActions,Chip} from "@material-ui/core";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import Rating from '@material-ui/lab/Rating';

import useStyles from "./styles";

const PlaceDetails=({place,selected,refProp})=>{
    const classes= useStyles();

    if(selected) refProp?.current?.scrollIntoView({behavior:"smooth",block:"start"});
    return(
        <Card elevation={6}>
            <CardMedia
                style={{height:350}}
                image= {place.photo? place.photo.images.large.url:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.iconpacks.net%2Ffree-icon%2Fbuilding-1062.html&psig=AOvVaw3TJhrgR8Kf31h5zr71dzaf&ust=1643316744142000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiH6Yim0PUCFQAAAAAdAAAAABAP'}
                title={place.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5">{place.name}</Typography>
                <Box display='flex' justifyContent="space-between">
                    <Rating size="small" value={Number(place.rating)}/>
                    <Typography component="legend">{place.num_reviews} review{place.num_reviews > 1 && 's'}</Typography>
                </Box>
                <Box display='flex' justifyContent="space-between">
                    <Typography variant="subtitle2">Price</Typography>
                    <Typography variant="subtitle2">{place.price_level}</Typography>
                </Box>
                <Box display='flex' justifyContent="space-between">
                    <Typography variant="subtitle2">Ranking</Typography>
                    <Typography variant="subtitle2">{place.ranking}</Typography>
                </Box>
                {place?.awards?.map((award)=>(
                    <Box my={1} display='flex' justifyContent="space-between" alignItems="center">
                        <img src={award.images.small} alt={award.display_name}/>
                        <Typography variant ="subtitle2" color='textSecondary'>{award.display_name}</Typography>
                    </Box>
                ))}
                {place?.cuisine?.map(({name})=>(
                    <Chip key={name} size="small" label={name} className={classes.chip} />
                ))}
                {place?.address&&(
                    <Typography gutterBottom variant="body2" color='textSecondary' className={classes.subtitle}>
                        <LocationOnIcon/>{place.address}
                    </Typography>
                )}
                {place?.phone&&(
                    <Typography gutterBottom variant="body2" color='textSecondary' className={classes.spacing}>
                        <PhoneIcon/>{place.phone}
                    </Typography>
                )}
                <CardActions>
                    <Button size='small' color="primary" onClick={()=> window.open(place.web_url,'_blank')}>
                        Trip advisor
                    </Button>
                    <Button size='small' color="primary" onClick={()=> window.open(place.website,'_blank')}>
                        website
                    </Button>
                </CardActions>
            </CardContent>
        </Card>
    )
}
export default PlaceDetails;