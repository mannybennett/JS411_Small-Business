import React from 'react'
import { AppBar, Toolbar,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import { checkAuth } from '../Router';

const Navigation = (props) => {
    console.log(checkAuth())
    return (
        <div>
            <AppBar sx={{ backgroundColor: '#3CB270' }} position="relative">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Austin Small Business
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            {checkAuth() ? <Link to="/dashboard">Listings</Link> : <Link to="/listings">Listings</Link>}
                        </li>
                        {checkAuth() &&
                        <li className="nav-list-item">
                            <Link to="/addlisting">Add</Link>
                        </li>
                        }
                        {checkAuth() ? 
                        <li className="nav-list-item">
                            <Link to="/login">Logout</Link>
                        </li> : 
                        <li className="nav-list-item">
                            <Link to="/login">Login</Link>
                        </li>
                        }
                    </ul>
                </Toolbar>
            </AppBar>
            <div>
                {checkAuth() && <AppBar sx={{ backgroundColor: 'grey' }} position="relative">{props.user}</AppBar>}
            </div>
        </div>
    )
}

export default Navigation