import { Box } from '@mui/material';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';

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

export function SearchBox() {
  return (
    <Box
      sx={{
        position: 'relative',
        borderRadius: '100px',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        alignItems: 'center',
        height: '36px',
        padding: '0 16px',
        width: '300px', // Tùy chỉnh độ rộng
      }}
    >
      <InputBase
        placeholder="Search project"
        inputProps={{ 'aria-label': 'search' }}
        sx={{ width: '100%' }}
      />
      <img src="/header_img/akar-icons_search.png" />
    </Box>
  );
}