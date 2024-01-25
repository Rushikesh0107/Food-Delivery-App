import React, {useState, useEffect} from 'react';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from '@mui/material/Badge';
import {useSelector} from 'react-redux';

const settings = ['Profile', 'Address'];
const pages = ['Home', 'Store', 'About', 'Contact'];

const Header = () => {

  const [isLoggedin, setIsLoggedin] = useState(true)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {user} = useSelector(state => state.profile)
  const {numberOfItems} = useSelector(state => state.cart)
  //console.log(numberOfItems);
  

  const token = localStorage.getItem('accessToken')
  //console.log(token);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedin(!!token);
  }, []);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div 
    className={`w-full bg-gradient-to-r from-green-600 to-green-800 h-16 flex items-center px-6 justify-between `}>


      <div>
      <Box sx={{ flexGrow: 1, 
        display: { xs: 'flex', md: 'none' },
        position: 'relative', // To allow absolute positioning for Menu
        }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.1)', // Change background color on hover
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiMenuItem-root': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)', // Adjust background color of menu items
                  '&:hover': {
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Change background color on hover
                  },
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                key={page} 
                onClick={handleCloseNavMenu}
                sx={{ width: "40vw", display: "flex", justifyContent: "center", backdropFilter: 'blur(10px)'  }}
                >
                  <Typography 
                  textAlign="center"
                  sx={{ color: '#333', fontWeight: 600, fontSize: '1.2rem', padding: '10px', '&:hover': { color: '#000' }}}
                  >
                    <Link to={`/${page.toLowerCase()}`}>    {page}
                    </Link>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </div>

      <div>
        <Link to={"/"} className="flex items-center">
            <RestaurantMenuIcon className="text-white" 
            sx={{width: '2.5rem', height: '2.5rem'}}
            />
        </Link>
      </div>

      <div>
      <Link to={"/cart"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={numberOfItems} color="error">
            <ShoppingCartIcon 
            sx={{ color: 'white', width: '32px', height: '32px'  }}
            />
          </StyledBadge>
        </IconButton>
      </Link>
        </div>

      <div className="flex items-center space-x-4">
        {isLoggedin ? (
        <>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar 
                alt="Remy Sharp" 
                src={user?.avatar || 'https://www.pngitem.com/pimgs/m/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png'}
                sx={{ width: 32, height: 32 }} 
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} 
                onClick={handleCloseUserMenu}>
                  <Typography 
                  textAlign="center">
                    <Link to={`/${setting.toLowerCase()}`}>    {setting}
                    </Link>
                    </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </>
        ) : (
        <>
        <Link to='/login'>
          <div className='text-white font-semibold text-xl bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 px-6 py-1 rounded-full focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300'>
          <span>Login</span>
          </div>
        </Link>
        </>
        )}
      </div>
    </div>
  );
};

export default Header;
