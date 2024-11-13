import { SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { Button, Grid2, IconButton, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useMemo, useRef } from "react";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSaveNote, startUploadingFiles } from "../../store/journal/thunks";
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css';

export const Noteview = () => {

    const dispatch = useDispatch();

    const { isActive: note, messageSaved, isSaving } = useSelector(state => state.journal);
    const { body, title, date, onInputChange, formState } = useForm(note);

    const dateString = useMemo(() => {
        const newDate = new Date(date)
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
        dispatch(setActiveNote(formState))
    }, [formState])

    const onSaveNote = () => {
        dispatch(startSaveNote());
    }

    const fileInputRef = useRef();
    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire('Note Updated', messageSaved, 'success')
        }
    }, [messageSaved])

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files))
    }

    return (
        <Grid2
            className='animate__animated animate__fadeIn animate__faster'
            container direction='column' justifyContent='flex-start' alignItems='stretch' spacing={2} sx={{ mb: 1 }}>

            {/* Top row: Date and Save Button */}
            <Grid2
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
            >
                <Typography fontSize={30} fontWeight="light">
                    {dateString}
                </Typography>

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}
                />
                <IconButton color="primary" 
                    disabled={isSaving} 
                    onClick={() => fileInputRef.current.click()}
                    >
                    <UploadOutlined />
                </IconButton>

                <Button color="primary" sx={{ padding: 2 }}
                    onClick={onSaveNote}
                    disabled={isSaving}>
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
                    name="title"
                    value={title || ""}
                    onChange={onInputChange}
                />
                {/* desc */}
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="What happened today?"
                    minRows={5}
                    name="body"
                    value={body || ""}
                    onChange={onInputChange}
                />

            </Grid2>

            {/* Image gallery  */}
            <ImageGallery />

        </Grid2>
    )
}
