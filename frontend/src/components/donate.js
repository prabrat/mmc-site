// faq.js
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
import donateImage from '../images/liftingboat.jpg';
import { useNavigate } from 'react-router-dom';




const Donate = () => {
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
                    Donate
                </Typography>
        
                <Divider></Divider>
                
                <Typography variant="body1" sx={{ marginTop: '20px', textAlign: 'center', fontSize: '30px' }}>
                    Thank you for supporting Maryland Crew
                </Typography>
                <Typography variant="body1" sx={{ marginTop: '10px', textAlign: 'center', fontSize: '14px' }}>
                    Every contribution ensures the continued growth and success of our program
                </Typography>


                <img
                    src={donateImage}
                    alt="FAQ Image"
                    style={{
                        width: '80%',
                        height: '350px',
                        objectFit: 'cover',
                        display: 'block',
                        margin: '20px auto',
                    }}
                />

                <Typography variant="h5" sx={{textAlign: 'center' }}>
                    <Link underline="always" target='_blank' rel="noopener noreferrer" href="https://www.paypal.com/donate?token=JpdsqWAWfHZ9fxpcIUuPh9xbshL3mFX6Uwd6FMc-TJsndvvsTEyrecNE13QO-SAexOhvCmslWlEUPB5d" sx={{color: '#de1d26'}}>DONATE HERE</Link>
                </Typography>

                <Typography variant="body1" sx={{textAlign: 'center', fontSize: '12px', marginTop: '20px', marginBottom: '20px' }}>
                    Maryland Men's Crew Alumni Association, Inc (MMCAA) incorporated in Prince George's County Maryland, has attained IRS 501(c)(3) non-profit status (EIN: 47-1352059). All donations to the MMCAA are tax deductible.
                    Tax-deductible receipts for individuals enrolled in recurring donations will be sent out at year-end as a summary of all donations during the year.
                    <br></br>
                    <br></br>
                    If you have any questions for MMCAA, please contact us at <Link underline="always" href="mailto:alumni@marylandcrew.org" sx={{color: '#2c2a29'}}>alumni@marylandcrew.org</Link>
                </Typography>



            </Container>
        </div>
    )
}

export default Donate;