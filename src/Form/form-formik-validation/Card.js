import React,{ Card , CardActionArea,CardMedia,CardContent ,Typography} from 'react'

export default function DashboardCard(props) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={props.img}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {props.titel}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {props.details}
                  </Typography>
                </CardContent>
              </CardActionArea>
           </Card>
    </>
  )
}
