import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import InputBase from '@mui/material/InputBase';
import Box from '@mui/material/Box';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from 'react';

// Tùy chỉnh thanh tìm kiếm
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: '#F5F5F5',
  display: 'flex',
  height: '36px',
  alignItems: 'center',
  padding: '10px 24px',
  width: 'var(--search-box--width)',
}));

export function Header() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        backgroundColor: 'white', // Màu nền của header
        color: 'black', // Màu chữ
        boxShadow: 'none', // Xóa bóng mặc định
      }}
    >
      <Toolbar
        sx={{
          justifyContent: 'space-between', // Căn các phần tử đều 2 bên
          backgroundColor: 'white', // Màu nền header
          borderBottom: '1px solid #E0E0E0', // Đường viền dưới
        }}
      >
        {/* Tiêu đề */}
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          Project
        </Typography>
        
        {/* Thanh tìm kiếm */}
        <Search>
          <InputBase
            placeholder="Search project"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ width: '100%' }}
          />
          <img src='/header_img/akar-icons_search.png' />
        </Search>

        {/* Các biểu tượng bên phải */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <IconButton color="inherit">
          <NotificationsIcon />
          </IconButton>
          <Box
            display={'flex'}
            flexDirection={'row'}
            gap={3}
            onClick={handleMenuOpen}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label="account"

            >
              <img
                src="/header_img/Ellipse 1.png" // Đường dẫn tới ảnh icon người dùng
                alt="User Icon"
                style={{ width: 32, height: 32, borderRadius: '50%' }} // Ảnh tròn
              />

            </IconButton>
            <Box
              display={'flex'}
              flexDirection={'row'}
              alignItems={'center'}
              gap={1}
            >
              <span style={{ fontSize: '16px', fontWeight: 'bold' }}>Account</span>
              <KeyboardArrowDownIcon/>
              
            </Box>
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            PaperProps={{
              sx: { mt: 1, minWidth: 150 }, // Tùy chỉnh giao diện menu
            }}
          >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </Box>
  );
}
