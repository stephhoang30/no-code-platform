import { InputBase } from "@mui/material";
import { styled } from "@mui/material/styles";

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

export function SearchBar() {
    return (
        <Search>
        <InputBase
          placeholder="Search project"
          inputProps={{ 'aria-label': 'search' }}
          sx={{ width: '100%' }}
        />
        <img src='/header_img/akar-icons_search.png' />
      </Search>
    );
  }