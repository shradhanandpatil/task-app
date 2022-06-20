import { Grid, Box, Typography, Paper } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
// import DashboardCard from "./Card";
function Dashboard() {
  const [data, setData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const result = await res.json();
      console.log(result.products);
      setData(result.products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  },[]);

  return (
    <>
      <Grid container>
        <Grid item lg={2}>
          <Box>
            <Paper elevation={24} sx={{ height: "100vh" }}>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                User Details
              </Typography>
            </Paper>
          </Box>
        </Grid>
        <Grid item lg={10}>
          <Box sx={{ textAlign: "center", padding: "1rem" }}>
            <Typography variant="h3">Dashboard Page</Typography>
               {
                  data.map((products) => (
                    <div key={products.id}>
                      <Typography variant="h1">{products.title}</Typography>
                    </div>
                  ))
                  };
            </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
