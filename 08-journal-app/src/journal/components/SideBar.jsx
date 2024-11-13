import { TurnedInNot } from '@mui/icons-material'
import { Box, Divider, Drawer, Grid2, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material'
import { useSelector } from 'react-redux';
import { SideBarItem } from './SideBarItem';

export const SideBar = ({ drawerWidth }) => {
    const { displayName } = useSelector(state => state.auth);
    const { notes } = useSelector(state => state.journal);

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
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider sx={{ width: '100%', my: 1 }} />


                <List >
                    {
                        notes.map(note => (
                            <SideBarItem key={note.id} {...note} />
                        ))
                    }

                </List>

            </Drawer>
        </Box>
    )
}
