import React, {useState, useEffect} from 'react';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StyledBadge from '@mui/material/Badge';
import {useSelector} from 'react-redux';
import NavBar from './NavBar';

const settings = ['Profile', 'Address'];
const pages = ['Home', 'Store', 'About', 'Contact'];

const Header = () => {

  const [isLoggedin, setIsLoggedin] = useState(true)
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);
  const {user} = useSelector(state => state.profile)
  const {totalItems} = useSelector(state => state.cart)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  // console.log(user);
  // console.log(totalItems);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

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
    <>
    {isMobile ? (
      <>
      <div 
    className={`w-full bg-gradient-to-r from-gray-100 to-green-900 h-16 flex items-center px-6 justify-between`}>


      <div>
      <Box sx={{ flexGrow: 1, 
        display: { xs: 'flex', md: 'none' },
        position: 'relative', // To allow absolute positioning for Menu
        }}>
            {/* MENU LOGO */}

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

            {/* MENU */}

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

            {/* LOGO */}

      <div>
        <Link to={"/"} className="flex items-center">
                <img 
                src="https://res.cloudinary.com/ddara3sez/image/upload/v1706332902/exv4dtqjsbjknadvqywq.png" alt='logo'
                className='h-28 w-28'
                />
        </Link>
      </div>


      <div
      className='flex items-center space-x-4'
      >

      {/* CART */}

        <div
        className='sm:w-12 md:w-20 lg:w-24 xl:w-28'
        >
        <Link to={"/cart"}>
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={user?.role === "user" ? totalItems : null} color="error">
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
            <div className='text-white font-semibold text-xl bg-gradient-to-r from-red-600 to-pink-500 hover:from-red-700 hover:to-pink-600 px-4 py-1 rounded-full sm:px-6 sm:py-2 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300'>
            <span>Login</span>
            </div>
          </Link>
          </>
          )}
        </div>
      </div>
    </div>
      </>) : (
      <>
      <NavBar />
      </>)}
    </>
  )
};

export default Header;
