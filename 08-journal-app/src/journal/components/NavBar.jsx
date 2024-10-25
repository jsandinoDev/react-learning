import { AppBar, Grid2, IconButton, Toolbar, Typography } from '@mui/material'
import { LogoutOutlined, MenuOutlined } from '@mui/icons-material'

export const NavBar = ({ drawerWidth }) => {
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
                    <IconButton color='error' sx={{ ml: 'auto' }}>
                        <LogoutOutlined />
                    </IconButton>
                </Grid2>
            </Toolbar>

        </AppBar>
    )
}
