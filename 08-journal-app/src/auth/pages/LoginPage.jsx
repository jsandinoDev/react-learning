import { Link as RouterLink } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { checkingAuthentication, startGoogleSignIn } from "../../store/auth/thunks";

export const LoginPage = () => {

    const dispatch = useDispatch();

    const { email, password, onInputChange } = useForm({
        email: 'jsandino@gmail.com',
        password: '123456'
    });

    const onSubmit = (event) => {
        event.preventDefault();
        console.log({ email, password });
        dispatch(checkingAuthentication());
    }

    const onGoogleSignIn = () => {
        console.log('google sign in')
        dispatch(startGoogleSignIn());
    }

    return (
        <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid2 container spacing={2}>
                    {/* email */}
                    <Grid2 container spacing={2} sx={{ mt: 2 }}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mb: 2 }}>
                            <TextField
                                fullWidth
                                id="email"
                                label="Email"
                                name="email"
                                placeholder="correo@google.com"
                                type="email"
                                variant="outlined"
                                onChange={onInputChange}
                                value={email}
                            />
                        </Grid2>
                        {/* password */}
                        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>
                            <TextField
                                fullWidth
                                id="password"
                                label="Password"
                                name="password"
                                placeholder="password"
                                type="password"
                                variant="outlined"
                                value={password}
                                onChange={onInputChange}
                            />
                        </Grid2>
                    </Grid2>

                    {/* Botones */}
                    <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                            <Button variant="contained" fullWidth type="submit">
                                Login
                            </Button>
                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={onGoogleSignIn}>
                                <Google />
                                <Typography sx={{ ml: 1 }}>Google</Typography>
                            </Button>
                        </Grid2>
                    </Grid2>

                    <Grid2 container direction="row" justifyContent="end" size={12}>
                        <Link color="inherit" component={RouterLink} to="/auth/register">
                            Crear una cuenta
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    );
};