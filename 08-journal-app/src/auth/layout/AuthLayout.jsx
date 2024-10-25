import { Grid2, Typography } from "@mui/material";


export const AuthLayout = ({ children, title = '' }) => {
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
                className="box-shadow"
                size={{ xs: 4, sm: 4, md: 6 }}
                sx={{ 
                    width: {sm: '450px'},
                    backgroundColor: "white", padding: 2, borderRadius: 2 
                }}
            >
                <Typography variant="h5" sx={{ mb: 1 }}>
                    {title}
                </Typography>
                {children}


            </Grid2>
        </Grid2>
    )
}
