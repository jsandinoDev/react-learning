import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { Noteview, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { startNewNote } from '../../store/journal'

export const JournalPage = () => {

    const dispatch = useDispatch();

    const { isSaving, isActive } = useSelector(state => state.journal)

    const onClickNewNote = () => {
        dispatch(startNewNote());
    }

    return (
        <JournalLayout >
            {/* <Typography >Nostrud tempor do consectetur aute excepteur officia incididunt deserunt sit irure amet. Laborum laborum mollit fugiat nostrud minim. Amet qui est sint sunt eu proident nostrud laborum mollit veniam cupidatat minim. Sit est incididunt irure ea et elit est sit non aliquip incididunt. Amet reprehenderit ipsum est fugiat culpa culpa est nisi irure. Ipsum ullamco consectetur pariatur deserunt dolore duis quis ad.</Typography> */}

            {
                (!!isActive) 
                ? <Noteview /> 
                : <NothingSelectedView />
            }

            <IconButton
                size='large'
                sx={{
                    color: 'white',
                    backgroundColor: 'error.main',
                    ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
                    position: 'fixed',
                    bottom: 50,
                    right: 50
                }}
                onClick={onClickNewNote}
                disabled={isSaving}
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>
    )
}
