import {Stack} from '@mui/material'
import {Link} from 'react-router-dom';

import {logo} from '../utils/constants';
import SearchBar from './SearchBar'

const Navbar = () =>  (
    // ajusting the nav bar (stack properties)
    <Stack direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position: 'sticky', background: '#000', top: 0, justifyContent: 'space-between'}}>
    
    {/* link to the home page  */}
    <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
    <img src={logo} alt="logo" height={90}/>
    </Link>
    <SearchBar/>
    </Stack>
  )


export default Navbar