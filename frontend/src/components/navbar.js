import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import marylandImage from '../images/Maryland_logo.png'
import menscrew from '../images/menscrew.png'
import {Link} from 'react-router-dom';

const theme = createTheme({
    typography: {
        fontFamily: '"source-sans-pro", sans-serif'
    },
});
const drawerWidth = 240;
const navItems = ['Roster', 'Schedule', 'Recruiting', 'FAQ', 'Donate'];

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            {/* <Typography variant="h6" sx={{ my: 2}}>
            Mui
            </Typography> */}
            <Link to='/'>
                <img
                    src={marylandImage}
                    alt="Adb Logo"
                    style={{ display: { xs: 'none', md: 'flex' }, marginRight: 20, marginTop: 15, height: '48px' }}
                />
            </Link>
            <Divider />
            <List>
            {navItems.map((item) => (
                <ListItem key={item} disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        {/* <ListItemText primary={item} /> */}
                        <Link 
                            style={{ textDecoration: 'none', color: 'black' }}
                            to={`/${item}`}>
                                {item}
                        </Link>
                    </ListItemButton>
                </ListItem>
            ))}
            </List>
        </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex'}}>
        <CssBaseline />
        <AppBar component="nav" sx={{backgroundColor: '#de1d26'}}>
            <Toolbar>
            <IconButton
                disableRipple
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />
            </IconButton>
            
            <Link to="/">
                <img
                    src={menscrew}
                    alt="Adb Logo"
                    style={{ display: { xs: 'none', md: 'flex' }, marginRight: 20, height: '48px' }}
                />
            </Link>
            
            <Typography
                variant="h5"
                component="div"
                sx={{ 
                    textTransform: 'none', 
                    flexGrow: 1, 
                    display: { xs: 'none', sm: 'block' },
                    fontWeight: 'bold',
                }}
            >
                {/* Men's Crew */}
            </Typography>
            <Box sx={{display: { xs: 'none', sm: 'block' } }}>
                {navItems.map((item) => (
                <Button disableRipple key={item} sx={{ 
                        fontWeight: 'bold', 
                        textTransform: 'none',
                        color: '#fff' }}>

                    {/* {item} */}
                    <Link 
                        style={{ textDecoration: 'none', color: 'white' }}
                        to={`/${item}`}>
                            {item}
                    </Link>
                </Button>
                ))}
            </Box>
            </Toolbar>
        </AppBar>
        <nav>
            <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
                keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
            >
            {drawer}
            </Drawer>
        </nav>
        
        </Box>
    </ThemeProvider>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;