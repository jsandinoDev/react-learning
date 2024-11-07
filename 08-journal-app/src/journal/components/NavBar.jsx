import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material'
import { useDispatch } from "react-redux";
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'
import { startLogOut } from '../../store/auth/thunks';

export const NavBar = ({ drawerWidth }) => {
    
    const dispatch = useDispatch();

    const onLogOut = () => {
       dispatch(startLogOut())
        
    }

    return (
        <AppBar
            position='fixed'
            sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` }
            }}

        >
            <Toolbar>
                <IconButton color='inherit'
                    edge="start"
                    sx={{ mr: 2, display: { sm: 'none' } }}
                >
                    <MenuOutlined />
                </IconButton>

                <Grid2 container direction='row' justifyContent='space-between' alignItems='center' sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                    <Typography variant='h6' noWrap component='div'>Journal App</Typography>
                    <IconButton color='error' sx={{ ml: 'auto' }} onClick={onLogOut}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid2>
            </Toolbar>

        </AppBar>
    )
}
