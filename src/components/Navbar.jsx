import { React, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar1.css';

const Navbar = () => {

    const navigate = useNavigate();

    const goto_courses = () => {
        navigate('/courses');
    };

    const [isCls1Active, changeIsCls1Active] = useState(0);
    const [isCls3Active, changeIsCls3Active] = useState(false);
    const tglIsCls1Active = (e) => {
        console.log(e.target.innerText);
        if (e.target.innerText == 'Home')
            return
        else if (e.target.innerText == 'Practice')
            changeIsCls1Active(2)
        else if (e.target.innerText == 'Resources')
            changeIsCls1Active(3)
        else if (e.target.innerText == 'Contact')
            changeIsCls1Active(4)
        else
            changeIsCls1Active(0)
        console.log(changeIsCls1Active);
        changeIsCls3Active(!isCls3Active);
    };


    return (<>
        <div className='navHeight'></div>
        <nav className="navbar">
            <h2 className="logo">E-LearningX</h2>
            <div className={`nav-links ${isCls3Active ? "hamburger-toggle" : ""}`}>
                <ul>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>Home</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 1 ? "expanded" : ""}`}>
                            <a href="">Home 1</a>
                            <a href="">Home 2</a>
                            <a href="">Home 3</a>
                            <a href="">Home 4</a>
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>Practice</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 2 ? "expanded" : ""}`}>
                            <a href="">Quiz Tests</a>
                            <a href="">Coding Problems</a>
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>Resources</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 3 ? "expanded" : ""}`}>
                            <a href="">RoadMaps</a>
                            <a onClick={goto_courses} href="">Courses</a>
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>Contact</button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 4 ? "expanded" : ""}`}>
                            <a href="">Discord</a>
                            <a href="">Submit Query</a>
                        </div>
                    </li>
                    <li className="search-box">
                        <button className="searchBtn"
                            onClick={tglIsCls1Active}>
                            <i className={`fas
                                ${isCls3Active ? "fa-xmark" : "fa-user "}`}
                                onClick={tglIsCls1Active}>
                            </i></button>
                        <div className={`searchText search-bar 
                        ${isCls3Active && isCls1Active == 0 ? "expanded" : ""}`}>
                            <a href="">Log in</a>
                            <a href="">Sign Up</a>
                            <a href="">My Profile</a>
                            <a href="">Log Out</a>
                        </div>
                    </li>
                </ul>

            </div >
            <i className={`fa-solid fa-lg menu-hamburger
                ${isCls3Active ? "fa-xmark" : "fa-bars"}`}
                onClick={tglIsCls1Active}></i>
        </nav >
    </>
    )
}

export default Navbar