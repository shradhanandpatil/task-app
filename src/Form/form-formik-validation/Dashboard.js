import { Grid, Box, Typography, Paper,Card , CardActionArea,CardMedia,CardContent,Button} from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
function Dashboard() {
  const navigate=useNavigate();
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      setData(result.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  },[]);
  const userName=localStorage.getItem('firstName');
  const name= userName.replaceAll("\""," ");
  const lastName=localStorage.getItem('lastname');
  const lname= lastName.replaceAll("\""," ");
  const email=localStorage.getItem('email');
  const mail= email.replaceAll("\""," ");

  const handelClick=()=>{
    localStorage.clear();
    navigate('/login');
  }
  return (
    <>
      <Grid container>
        <Grid item lg={2}>
          <Box>
            <Paper elevation={24} sx={{ height: "100vh" }}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                User Details
              </Typography>
              <Typography style={{margin:"1rem"}} variant="p">Name :{name}{lname}</Typography><br></br>
              <Typography style={{margin:"1rem"}} variant="p">Email :{mail}</Typography><br></br>
              <Button onClick={handelClick} style={{margin:"1rem"}} variant="contained">LogOut</Button>
            </Paper>
          </Box>
        </Grid>
        <Grid item lg={10}>
          <Box sx={{ textAlign: "center", padding: "1rem" }}>
            <Typography variant="h3">Dashboard Page</Typography>
            <Grid item p={2} >
              <Box sx={{display:'grid',gridTemplateColumns: 'repeat(3,1fr)',gap: '15px'}}>
               {
                  data.map((products) => (
                    <Grid container key={products.id}>
                        <Card sx={{ maxWidth: 390 }}>
                              <CardActionArea>
                                  <CardMedia
                                    component="img"
                                    height="200"
                                    image={products.thumbnail}
                                    alt="green iguana"
                                  />
                                  <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                      {products.titel}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                      {products.description}
                                    </Typography>
                                  </CardContent>
                              </CardActionArea>
                          </Card>
                  </Grid>
                  ))
                 };
              </Box>
            </Grid>
            </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
