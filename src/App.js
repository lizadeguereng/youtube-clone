import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Box} from '@mui/material';
import {Navbar, Feed, SearchFeed, ChannelDetail, VideoDetail} from './components'
const App = () => (
    <BrowserRouter>
        <Box sx = {{ backgroundColor: '#000'}}>
            <Navbar/>
            {/* built in component */}
            <Routes> 
                {/* individual route components */}
                {/* root route and has an elemnt that is giong to render a feed component */}
                <Route path="/" exact element={<Feed/>} />
                {/* is a specfic video and its details */}
                <Route path="/video/:id" element={<VideoDetail/>} />
                {/* is a specfic channel */}
                <Route path="/channel/:id" element={<ChannelDetail/>} />
                {/* search route */}
                <Route path="/search/:searcTerm" element={<SearchFeed/>} />
                
            </Routes>
        </Box>
    </BrowserRouter>
  )

export default App