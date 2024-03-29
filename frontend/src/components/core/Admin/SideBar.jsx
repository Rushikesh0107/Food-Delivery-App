import React, {useState} from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
import InventoryIcon from '@mui/icons-material/Inventory';
import { logout } from '../../../services/Operations/authAPI';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

import AddFood from './AddFood';
import AddCategory from './AddCategory';
import RenderItemsToRemove from './RemoveFood';
import OrdersForAdmin from './OrdersForAdmin';
import Order from '../../../pages/Order';


const drawerWidth = 240;
const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);



export default function SideBar() {
  const dispatch = useDispatch()
  const [open, setOpen] = React.useState(false);
  const [menuData, setMenuData] = useState("Add Food") 
  const navigate = useNavigate()
  
  const handleLogout = () => {
    const token = localStorage.getItem('accessToken')
    dispatch(logout(token, navigate));
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar 
      position="fixed"
      sx={{}}
      className='bg-gradient-to-r from-gray-100 to-green-800 fonst-semibold'
      >
        <Toolbar>
          <IconButton
            color="black"
            sx={{ paddingLeft: "14px"}}
            aria-label="open drawer"
            onClick={() => {setOpen(!open)}}
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" noWrap component="div" color={'black'}>
            <h1
            className='font-bold text-2xl pl-5  md:text-3xl'
            >
            NutrifyMeals
            </h1>
          </Typography>

          <button
          onClick={() => handleLogout()}
          className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-auto'
          >
            Logout
          </button>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader />
        <Divider />

        <List>

            <ListItem 
            disablePadding sx={{ display: 'block' }}
            onClick={() => setMenuData("Add Food")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <LunchDiningIcon />
                </ListItemIcon>
                <ListItemText primary="Add Food" sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>

            <ListItem 
            disablePadding sx={{ display: 'block' }}
            onClick={() => setMenuData("Add Category")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <CategoryIcon />
                </ListItemIcon>
                <ListItemText primary="Add Category" sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>

            <ListItem 
            disablePadding sx={{ display: 'block' }}
            onClick={() => setMenuData("Remove Items")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <InventoryIcon />
                </ListItemIcon>
                <ListItemText primary="Remove Items" sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>

            <ListItem 
            disablePadding sx={{ display: 'block' }}
            onClick={() => setMenuData("Orders")}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                    <PaidIcon />
                </ListItemIcon>
                <ListItemText primary="Orders" sx={{ opacity: open ? 1 : 0 }}/>
              </ListItemButton>
            </ListItem>

        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {menuData === "Add Food" && <AddFood/>}
        {menuData === "Add Category" && <AddCategory />}
        {menuData === "Remove Items" && <RenderItemsToRemove />}
        {menuData === "Orders" && <OrdersForAdmin />}
      </Box>
    </Box>
  );
}