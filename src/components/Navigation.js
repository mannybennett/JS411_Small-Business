import React from 'react'
import { AppBar, Toolbar,
  Typography
} from '@mui/material'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <AppBar sx={{ backgroundColor: '#3CB270' }} position="relative">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: "1" }}>
                    Austin Small Business
                </Typography>
                <ul className="nav-list">
                    <li className="nav-list-item">
                        <Link to="/dashboard">Listings</Link>
                    </li>
                    <li className="nav-list-item">
                        <Link to="/login">{document.cookie ? 'Logout' : 'Login'}</Link>
                    </li>
                </ul>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation