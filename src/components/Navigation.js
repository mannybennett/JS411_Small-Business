import React, { useState } from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Navigation = (props) => {
    // const [loggedIn, setLoggedIn] = useState(localStorage.getItem("isLoggedIn"))
    console.log(props)
    return (
        <div>
            <AppBar sx={{ backgroundColor: '#3CB270' }} position="relative">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Austin Small Business
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            {props.isLoggedIn ? <Link to="/dashboard">Listings</Link> : <Link to="/listings">Listings</Link>}
                        </li>
                        {props.isLoggedIn &&
                        <li className="nav-list-item">
                            <Link to="/addlisting">Add</Link>
                        </li>
                        }
                        {props.isLoggedIn ? 
                        <li className="nav-list-item">
                            <Link onClick={() => props.makeLoggedIn(false)} to="/login">Logout</Link>
                        </li> : 
                        <li className="nav-list-item">
                            <Link to="/login">Login</Link>
                        </li>
                        }
                    </ul>
                </Toolbar>
            </AppBar>
            <div>
                {props.updateUser && <AppBar sx={{ backgroundColor: 'grey' }} position="relative">{props.updateUser.username}</AppBar>}
            </div>
        </div>
    )
}

export default Navigation