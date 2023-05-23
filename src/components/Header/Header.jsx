import { NavLink, Link } from 'react-router-dom';
import { useState } from 'react';
import NavLinks from '../NavLinks/NavLinks';
import MyMovies from '../MyMovies/MyMovies';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

//import './header.css';

const Header = props => {
  const { window } = props;

  const drawerWidth = 240;
  const navItems = [
    { name: 'Movies', to: '/' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(prevState => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Movie<span>DB</span>
      </Typography>
      <Divider sx={{ color: '#767070' }} />
      <List>
        {navItems.map(item => (
          <Link to={item.to} key={item.name}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <>
      <Box sx={{ display: 'flex' }} component="header">
        <AppBar component="nav" sx={{ backgroundColor: '#000000' }}>
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'block' } }}
            >
              <Link to="/">
                Movie<span>DB</span>
              </Link>
            </Typography>

            <NavLinks
              handleDrawerToggle={handleDrawerToggle}
              navItems={navItems}
            />

            <MyMovies />
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            anchor="right"
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
