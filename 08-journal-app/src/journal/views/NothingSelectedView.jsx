import { StarOutline } from "@mui/icons-material";
import { Grid2, Typography } from "@mui/material";

export const NothingSelectedView = () => {
  return (
    <Grid2 
        className='animate__animated animate__fadeIn animate__faster'
            alignItems="center"
            container
            direction="column"
            justifyContent="center"
            spacing={0}
            sx={{ minHeight: "calc(100vh - 100px)", backgroundColor: "primary.main", borderRadius:3 }}
        >

            <Grid2 xs={12}>
                <StarOutline sx={{fontSize:100, color:"white"}} />
            </Grid2>

            <Grid2 xs={12}>
               <Typography color="white" variant="h5">
                    Select or create an entry
               </Typography>
            </Grid2>
            
    </Grid2>
  )
}
