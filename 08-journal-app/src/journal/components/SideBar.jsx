import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'

export const SideBar = ({ drawerWidth }) => {
    return (
        <Box component='nav' sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
            <Drawer
                variant='permanent' //temporary
                open={true}
                //onClose={}
                //ModalProps={}
                //keepMounted
                sx={{
                    display: { xs: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
                }} >
                <Toolbar sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '30px' }}>
                    <Typography variant='h6' noWrap component='div' sx={{ mt: 2 }}>
                        Josue
                    </Typography>
                </Toolbar>
                <Divider sx={{ width: '100%', my: 1 }} />


                <List >
                    {
                        ['Enero', 'Febrero', 'Marzo'].map(text => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton >
                                    <ListItemIcon >
                                        <TurnedInNot />
                                    </ListItemIcon>

                                    <Grid2 container>
                                        <ListItemText primary={text} />
                                        <ListItemText secondary={'Proident commodo do occaecat'} />
                                    </Grid2>

                                </ListItemButton>
                            </ListItem>
                        ))
                    }

                </List>

            </Drawer>
        </Box>
    )
}
