import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Container from '@mui/material/Container';
import FAQItem from "./faq_item";
import faqData from '../static/faq_text.txt';
import ReactMarkdown from 'react-markdown';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';

import recruitingImage from '../images/pairs.jpeg';

const Recruiting = () => {
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const handleNavigation = (route) => {
      navigate(route);
      window.scrollTo(0, 0);
    };

    const greyBackground = '#f0f0f0';

    return (
      <div style={{ background: greyBackground, minHeight: '80vh', display: 'flex' }}>
      <Container 
          style={{ 
          background: 'white',  
          marginTop: '90px',
          marginBottom: '30px', 
          borderRadius: '0', 
          boxShadow: '0 0px 0px rgba(0, 0, 0, 0.1)' }}
          maxWidth="md"
      >

          <Typography variant="h6" style={{ 
              color: '#2c2a29',  
              marginBottom: '10px', 
              marginTop: '10px',
              fontFamily: '"source-sans-pro", sans-serif',
              fontWeight: '700',
              }}
          >
              Compete as a Maryland Rower
          </Typography>
  
          <Divider></Divider>

          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '20px', marginBottom: '20px' }}>
            Maryland Crew is seeking motivated and hard-working athletes to join our team for the upcoming season. 
            If you're interested in representing the University of Maryland in the sport of Rowing alongside other dedicated student-athletes, please fill out our recruiting form.
            Joining Maryland Crew will instill in you discipline, toughness, and camaraderie that will last a lifetime. 
            You will be a part of something bigger than yourself and gain that sense of purpose that so many young men crave.
            <br></br>
            <br></br>
            <div style={{ textAlign: 'center', fontWeight: 'bold' }}>
              No experience necessary! In fact, most of our athletes had never rowed before college.
            </div>
          </Typography>


            <img
              src={recruitingImage}
              alt="recruiting Image"
              style={{
                width: '80%',
                height: '350px',
                objectFit: 'cover',
                display: 'block',
                margin: '20px auto',

              }}
            />

          <Typography variant="h5" sx={{textAlign: 'center' }}>
            <Link underline="always" target='_blank' rel="noopener noreferrer" href="https://bit.ly/MarylandRowing" sx={{color: '#de1d26'}}>RECRUITMENT FORM</Link>
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '14px', marginTop: '20px', marginBottom: '20px' }}>
              Rowing for Maryland requires a high level of commitment. We practice 5 days/week for 2 hours/day. 
              Because of the nature of the sport, attending every practice is required.
              During the season, many of our weekends are spent attending regattas.
              Please keep this mind when considering joining our team.
          </Typography>

      </Container>
    </div>
    )
}

export default Recruiting;