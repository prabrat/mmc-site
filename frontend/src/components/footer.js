import React from 'react';
import Container from '@mui/material/Container';
import instagram from '../images/instagram.png';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Link from '@mui/material/Link';
import recwell from '../images/recwell.png';
import { Link as RouterLink } from 'react-router-dom';



import marylandlogo from '../images/Maryland_logo.png';




const Footer = () => {
    const greyBackground = '#f0f0f0';
    const email = 'crew.umd@gmail.com';
    const marylandRed = '#de1d26';
  
    return (
    //<ThemeProvider theme={theme}>
    <div style={{ background: greyBackground, minHeight: '20vh'}}>
      <Container maxWidth="md" sx={{ background: greyBackground, textAlign: 'center', marginTop: '0px', marginBottom: '0px', padding:'20px' }}>
        <Box
            display="flex"
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={{ xs: 'center', md: 'space-between' }}
            alignItems={{ xs: 'center', md: 'center' }}
            gap={2} // Adjust this value for spacing
        >
          {/* Left Section */}
          <div  sx= {{marginBottom: { xs: '100px', md: '0' } }}>
            <Typography variant="body1" sx={{ fontSize: '14px', color: '#2c2a29', fontWeight: 'bold' }}>
                Contact Us:
            </Typography>
            <Typography sx={{color: '#2c2a29'}}>
                <Link
                    underline="always"
                    href={`mailto:${email}`}
                    sx={{ fontSize: '14px', color: '#2c2a29' }}
                >
                    {email}
                </Link>
            </Typography>
          </div>
  
          {/* Middle Section (Donate) */}
          <Link component={RouterLink} to="/donate">
            <Button
              disableRipple
              variant="contained"
              sx={{
                  backgroundColor: marylandRed,
                  borderRadius: '50px',
                  fontSize: '1.5rem',
                  padding: '16px 24px',
                  width: '200px',
                  textTransform: 'none',
                  '&:hover': {
                  backgroundColor: marylandRed, 
                  marginBottom: { xs: '30px', md: '0' }// You can set it to the same color to disable the default hover effect
                  },
              }}
            >
              Donate
            </Button>
          </Link>
        
          <a
            href="https://recwell.umd.edu/programs-activities/club-sports"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ textDecoration: 'none', boxShadow: 'none', marginBottom: { xs: '30px', md: '0' } }}
            >
                <img src={recwell} alt="Your Image" style={{ height: '55px', width: 'auto' }} />
        </a>
  
          {/* Right Section (instagram) */}
        <div>
            <a
                href="https://www.instagram.com/marylandrowing/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ textDecoration: 'none', boxShadow: 'none', marginBottom: { xs: '30px', md: '0' } }}
            >
                <img src={instagram} alt="Your Image" style={{ height: '75px', width: 'auto' }} />
            </a>
        </div>
        </Box>
      </Container>
    </div>
    //</ThemeProvider>
    );
  };
  

export default Footer;