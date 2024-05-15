import { Box, Button, Divider, Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Technology from "./Technology";

const useStyles = makeStyles({
  customFont: {
    fontFamily: "DM Sans, sans-serif",
  },
});

function Home() {
  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <>
      <Box
        sx={{
          // height:"160vh",
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center",
          paddingTop:'60px'
          
        }}
      >
        <Grid container sx={{ marginTop: isSmallScreen ? '2rem' : '10rem', paddingBottom: "20px"}}>
          <Grid item sm={6} xs={12} sx={{ padding: "20px 30px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Box sx={{ fontSize: isSmallScreen ? '24px' : '40px' }}>

                <h3
                  className={classes.customFont}
                  style={{ letterSpacing: "1px" }}
                >
                  Exploring Internship Options?<span style={{color:'red'}}>{!isSmallScreen && <br/>} Start </span> Here!
                </h3>
              </Box>
              <Divider />
              <Box sx={{ fontSize: isSmallScreen ? '20px' : '24px' , fontFamily: "sans-serif" }}>
                <p className={classes.customFont} style={{lineHeight : isSmallScreen ? '22px' : '28px'}}>
                  Join our competitive internship program and gain real-world
                  experience in your field. Work alongside industry
                  professionals, develop your skills, and make valuable
                  connections. Apply today and take the first step towards a
                  successful career.
                </p>
              </Box>
              <Box>
                <Button variant="contained" color="secondary" size="large">
                  Explore Now
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Box>
              <Image
                src="/Home_Page_Banner.jpg"
                width={isSmallScreen ? 330 : 500}
                height={350}
              />
            </Box>
            <Box
              sx={{
                height: "100px",
                backgroundColor: "blue",
                display: isSmallScreen ? "none" : "block", // Conditionally set display property
              }}
            />
          </Grid>
        </Grid>
      </Box>

      {/* offred Technologies */}

      <Box sx={{ padding: "20px 30px" }}>
        <Technology/>
      </Box>

    </>
  );
}

export default Home;
