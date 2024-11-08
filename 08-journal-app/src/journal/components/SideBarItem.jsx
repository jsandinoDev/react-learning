import { TurnedInNot } from '@mui/icons-material'
import { Grid2, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useMemo } from 'react'


export const SideBarItem = ({note}) => {

    const newTitle = useMemo( () => {
        return note.title.length > 17
        ? note.title.substring(0,17) + '...'
        : note.title
    }, [note.title])
    
    return (
        <ListItem  disablePadding>
            <ListItemButton >
                <ListItemIcon >
                    <TurnedInNot />
                </ListItemIcon>
                <Grid2 container>
                    <ListItemText primary={note.title} />
                    <ListItemText secondary={note.body} />
                </Grid2>

            </ListItemButton>
        </ListItem>
    )
}
