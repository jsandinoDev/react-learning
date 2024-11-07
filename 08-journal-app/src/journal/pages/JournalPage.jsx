import { IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { Noteview, NothingSelectedView } from '../views'
import { AddOutlined } from '@mui/icons-material'

export const JournalPage = () => {
    return (
        <JournalLayout >
            {/* <Typography >Nostrud tempor do consectetur aute excepteur officia incididunt deserunt sit irure amet. Laborum laborum mollit fugiat nostrud minim. Amet qui est sint sunt eu proident nostrud laborum mollit veniam cupidatat minim. Sit est incididunt irure ea et elit est sit non aliquip incididunt. Amet reprehenderit ipsum est fugiat culpa culpa est nisi irure. Ipsum ullamco consectetur pariatur deserunt dolore duis quis ad.</Typography> */}

            {/* NothingSelected */}
            {/* <NothingSelectedView /> */}

            {/* NoteView */}
            <Noteview />

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
            >
                <AddOutlined sx={{ fontSize: 30 }} />
            </IconButton>

        </JournalLayout>
    )
}
