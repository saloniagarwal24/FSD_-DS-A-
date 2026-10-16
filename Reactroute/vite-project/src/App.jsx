import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Home from './component/home';
import About from './component/ABOUTUS';
import Fees from './component/fee';
import Courses from './component/course';

function App() {
    return (
        <div>

            <BrowserRouter>

                <nav>
               <Link to="/">HOME</Link>
            <Link to="/about">ABOUT US</Link>
             <Link to="/fees">FEES</Link>
             <Link to="/courses">COURSES</Link>
            </nav>

         <Routes>
           <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />

                    <Route path="/fees" element={<Fees />} />

                    <Route path="/courses" element={<Courses />} />

                </Routes>

            </BrowserRouter>

        </div>
    );
}

export default App;