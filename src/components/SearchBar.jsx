import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  return (
    <Paper
    component="form"
    onSubmit={() => {}}
    sx={{
        borderRadius: 20, 
        border: '1px solid #000000',
         pl: 2, 
         boxShadow: 'none',
          mr: {sm: 5}}}
    >
        <input
            className="search-bar"
            placeHolder="Search"
            value=""
            onChange={() => {}}

        />
        <IconButton className='search-icon' type="submit" sx={{
            p: '15px', color: '#000000', backgroundColor: 'rgb(239, 135, 177)'
        }}>
            <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar