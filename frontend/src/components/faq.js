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
import faqImage from '../images/oldheads.jpg'
import ReactMarkdown from 'react-markdown';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';





const Faq = () => {
    const navigate = useNavigate();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  
    const handleNavigation = (route) => {
      navigate(route);
      window.scrollTo(0, 0);
    };

    const greyBackground = '#f0f0f0'
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const fetchFAQs = async () => {
        try {
            const response = await fetch(faqData); // Adjust the path accordingly
            const faqsText = await response.text();
            const faqsArray = faqsText.split('\n\n').map(entry => {
            const [question, answer] = entry.split('\n');
            return { question, answer };
            });
            setFaqs(faqsArray);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
        }
        };

        fetchFAQs();
    }, []);

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
                    Frequently Asked Questions
                </Typography>
        
                <Divider></Divider>

                <img
                    src={faqImage}
                    alt="FAQ Image"
                    style={{
                        width: '80%',
                        height: '350px',
                        objectFit: 'cover',
                        display: 'block',
                        margin: '20px auto',
                    }}
                />

                <Typography variant="body1" sx={{ fontSize: '14px', textAlign: 'center' }}>
                    Send us an <Link underline="hover" color="#2c2a29" href="mailto:crew.umd@gmail.com" sx={{textDecoration:'underline'}}>email</Link> if you have any additional questions
                </Typography>

                {faqs.map((faq, index) => (
                    <div key={index} style={{ marginBottom: index === faqs.length - 1 ? '20px' : 0, marginTop: index === 0 ? '20px' : 0 }}>
                        <FAQItem {...faq} />
                    </div>
                ))}


            </Container>
        </div>
    )
}

export default Faq;