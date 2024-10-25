import { Padding, SaveOutlined } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography } from "@mui/material"
import { light } from "@mui/material/styles/createPalette"
import { ImageGallery } from "../components"

export const Noteview = () => {
    return (
        <Grid2 container direction='column' justifyContent='flex-start' alignItems='stretch' spacing={2} sx={{ mb: 1 }}>

            {/* Top row: Date and Save Button */}
            <Grid2
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography fontSize={30} fontWeight="light">
                    28 July, 2023
                </Typography>

                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Save
                </Button>
            </Grid2>

            <Grid2 container>
                {/* title */}
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Add a title"
                    label="Title"
                    sx={{ border: 'none', mb: 1 }}
                />
                {/* desc */}
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={5}
                />

            </Grid2>

            {/* Image gallery  */}
            <ImageGallery />

        </Grid2>
    )
}
