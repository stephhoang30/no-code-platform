import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const items = [
  { text: 'Project', icon: '/header_img/akar-icons_folder.png' }, // Đường dẫn tới ảnh 1
  { text: 'Your Template', icon: '/header_img/carbon_template.png' }, // Đường dẫn tới ảnh 2
  { text: 'Learn', icon: '/header_img/fluent_learning-app-24-regular.png' }, // Đường dẫn tới ảnh 3
];

export function Sidebar() {
  return (
    <Box sx={{
      width: 'var(--side-bar--width)',
      backgroundColor: 'var(--side-bar--bg)',
      color: 'white',
    }} role="presentation" >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <img
                src="/header_img/Group 12519.png"
                alt="Custom Icon"
                style={{ width: 24, height: 24 }}
              />
            </ListItemIcon>
            <ListItemText primary="Ranoar" />
          </ListItemButton>
        </ListItem>
      </List>
      <List>
        {items.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <img
                  src={item.icon} // Hiển thị ảnh tùy chỉnh
                  alt={item.text} // Văn bản thay thế
                  style={{ width: 24, height: 24 }} // Kích thước ảnh
                />
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );
}
