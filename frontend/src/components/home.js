import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import mainImage from "../images/mainpage.png";
import fall24 from "../images/fall24.png";
import Grid from "@mui/material/Grid";
import joinTeam from "../images/fours.png";
import boathouse from "../images/boathouse.jpg";
import ergroom from "../images/ergroom.jpg";
import regatta from "../images/d3_champs.jpeg";
import funteam from "../images/funteam.JPG";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ background: "white", minHeight: "80vh", display: "flex" }}>
      <Container
        style={{
          background: "white",
          marginTop: "90px",
          marginBottom: "30px",
          borderRadius: "0",
          boxShadow: "0 0px 0px rgba(0, 0, 0, 0.1)",
        }}
        maxWidth="md"
      >
        <div
          style={{
            width: "100%",
            margin: "20px auto",
            height: "450px",
            overflow: "hidden",
          }}
        >
          <img
            src={fall24}
            alt="home Image"
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        <Divider></Divider>

        {/* Join the Team Section */}
        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid item xs={12} md={6}>
            <img
              src={joinTeam}
              alt="Join the Team"
              style={{
                width: "auto",
                height: "300px",
                objectFit: "cover",
                display: "block",
                borderRadius: "15%",
                marginRight: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                  maxWidth: "400px",
                  fontWeight: "bold",
                }}
              >
                Join the Team
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                  maxWidth: "400px",
                }}
              >
                We are actively recruiting for the Fall 2024 season. If you
                are interested in joining the team, please visit our{" "}
                <Link component={RouterLink} to="/recruiting">
                  recruitment page
                </Link>{" "}
                to learn more.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Divider></Divider>

        {/* Our Boathouse Section */}
        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                  maxWidth: "400px",
                  fontWeight: "bold",
                }}
              >
                Where We Row
              </Typography>
              <Typography
                variant="body1"
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                  maxWidth: "400px",
                }}
              >
                We row out of{" "}
                <Link
                  href="https://www.google.com/maps/dir/College+Park,+MD/Bladensburg+Waterfront+Park,+Annapolis+Road,+Bladensburg,+MD/@38.963739,-76.9697506,13z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x89b7c41e0d714699:0xeb8c0de36dd36d95!2m2!1d-76.93776!2d38.9896967!1m5!1m1!1s0x89b7c74066dda7b3:0xb4ed947ae86da71d!2m2!1d-76.939375!2d38.9377957!3e0?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bladensburg Waterfront Park,
                </Link>{" "}
                located on the Anacostia River in Bladensburg, Maryland. The
                park is around a 15 min drive from campus.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={boathouse}
              alt="boathouse"
              style={{
                width: "auto",
                height: "300px",
                objectFit: "cover",
                display: "block",
                borderRadius: "15%",
                marginLeft: "auto",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Grid>
        </Grid>

        <Divider></Divider>

        {/* Continue this pattern for other sections */}
        {/* Erg room */}

        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid item xs={12} md={6}>
            <img
              src={ergroom}
              alt="ergroom"
              style={{
                width: "auto",
                height: "300px",
                objectFit: "cover",
                display: "block",
                borderRadius: "15%",
                marginRight: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
              <Typography
                variant="h6"
                style={{
                  textAlign: "center",
                  margin: "20px 0",
                  maxWidth: "400px",
                  fontWeight: "bold",
                }}
              >
                Indoor Training Facility
              </Typography>
              <Typography variant="body1" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
                  When we can't go out on the water, we train at the team's Erg Room in Cole Field House. Training on the erg allows us to put in work off the water and stay in shape during the winter months.
              </Typography>
            </div>
          </Grid>
        </Grid>

        <Divider></Divider>
        
        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid item xs={12} md={6}>
            <div>
              <Typography variant="h6" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px', fontWeight: 'bold' }}>
                Regattas
              </Typography>
              <Typography variant="body1" style={{textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
                Each season, the team competes at several regattas. They are perfect opportunities for us to show off our hard work and represent the University. Check out our schedule for the season <Link component={RouterLink} to="/schedule">here</Link>.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <img
              src={regatta}
              alt="regatta"
              style={{
                width: "auto",
                height: "300px",
                objectFit: "cover",
                display: "block",
                borderRadius: "15%",
                marginLeft: "auto",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Grid>
        </Grid>

        <Divider></Divider>

        <Grid container spacing={2} alignItems="center" direction="row">
          <Grid item xs={12} md={6}>
            <img
              src={funteam}
              alt="fun Team"
              style={{
                width: "400px",
                height: "300px",
                objectFit: "cover",
                display: "block",
                borderRadius: "15%",
                marginRight: "20px",
                marginTop: "20px",
                marginBottom: "20px",
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <div>
            <Typography variant="h6" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px', fontWeight: 'bold' }}>
                Social
            </Typography>
            <Typography variant="body1" style={{ textAlign: 'center', margin: '20px 0', maxWidth: '400px' }}>
              When we are not training or competing, we spend plenty of time together as a team. In addition to hanging out around campus, we host social events with other clubs, and a formal at the end of the year. 
            </Typography>
            </div>
          </Grid>
        </Grid>




      </Container>
    </div>
  );
};

export default Home;
