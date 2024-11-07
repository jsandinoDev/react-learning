import { CircularProgress, Grid2, Typography } from "@mui/material";

export const CheckingAuth = () => {
    return (
        <Grid2
            alignItems="center"
            container
            direction="column"
            justifyContent="center"
            spacing={0}
            sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
        >
            <Grid2
                container
                direction="row"
                justifyContent="center"
                sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}
            >
                <CircularProgress color="warning" />

            </Grid2>
        </Grid2>
    )
}
