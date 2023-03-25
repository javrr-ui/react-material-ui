import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
function Navbar() {
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: "center" }}>
                        Crud
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                anchor="left"
                open={open}
                onClose={handleDrawerClose}
                PaperProps={{ style: { width: '300px' } }}

            >


                <List>
                    <ListItem button key="Home" component={NavLink} to="/crud" onClick={handleDrawerClose}>
                        <ListItemIcon><HomeIcon /></ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button key="Alta" component={NavLink} to="/crud/alta" onClick={handleDrawerClose}>
                        <ListItemIcon><AddIcon /></ListItemIcon>
                        <ListItemText primary="Alta" />
                    </ListItem>
                    <ListItem button key="Baja" component={NavLink} to="/crud/baja" onClick={handleDrawerClose}>
                        <ListItemIcon><RemoveIcon /></ListItemIcon>
                        <ListItemText primary="Baja" />
                    </ListItem>
                    <ListItem button key="Consulta" component={NavLink} to="/crud/consulta" onClick={handleDrawerClose}>
                        <ListItemIcon><PersonSearchIcon /></ListItemIcon>
                        <ListItemText primary="Consulta" />
                    </ListItem>
                </List>
            </Drawer>
        </>
    );
}

export default Navbar;