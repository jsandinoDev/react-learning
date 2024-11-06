import { AuthLayout } from '../layout/AuthLayout'
import { Button, Grid2, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from '../../hooks/useForm';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks';


const formData = {
    displayName: '',
    email: '',
    password: ''
}

const formValidations = {
    email: [(value) => value.includes('@'), 'Email must have a @'],
    password: [(value) => value.length >= 6, 'Password must contain 6 chars'],
    displayName: [(value) => value.length >= 1, 'Name is required'],

}

export const RegisterPage = () => {

    const dispatch = useDispatch();

    const [formSubmited, setFormSubmited] = useState(false)

    const { displayName, email, password, onInputChange, formState,
        displayNameValid, emailValid, passwordValid, isFormValid } = useForm(formData, formValidations);

    const onSubmit = (e) => {
        e.preventDefault();

        setFormSubmited(true);

        if (!isFormValid) return;

        dispatch(startCreatingUserWithEmailPassword(formState))
    }

    return (
        <AuthLayout title='Register'>
            <form onSubmit={onSubmit}>
                <Grid2 container spacing={2}>
                    {/* email */}
                    <Grid2 container spacing={2} sx={{ mt: 2 }}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mb: 2 }}>

                            <TextField
                                fullWidth
                                label="Display Name"
                                name="displayName"
                                value={displayName}
                                onChange={onInputChange}
                                placeholder="Your Name"
                                type="text"
                                variant="outlined"
                                error={!!displayNameValid && formSubmited}
                                helperText={displayNameValid}
                            />

                        </Grid2>
                        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }} sx={{ mb: 2 }}>

                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                value={email}
                                onChange={onInputChange}
                                placeholder="correo@google.com"
                                type="email"
                                variant="outlined"
                                error={!!emailValid && formSubmited}
                                helperText={emailValid}
                            />

                        </Grid2>

                        <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12 }}>

                            <TextField
                                fullWidth
                                label="Password"
                                name="password"
                                value={password}
                                onChange={onInputChange}
                                placeholder="password"
                                type="password"
                                variant="outlined"
                                error={!!passwordValid && formSubmited}
                                helperText={passwordValid}
                            />

                        </Grid2>
                    </Grid2>

                    {/* Botones */}
                    <Grid2 container size={12} spacing={2} sx={{ mb: 2, mt: 1 }}>
                        <Grid2 size={{ xs: 12, sm: 12, md: 6 }}>
                            <Button
                                variant="contained"
                                fullWidth
                                type='submit'
                            >
                                Create Account
                            </Button>
                        </Grid2>

                    </Grid2>

                    <Grid2 container direction="row" justifyContent="end" size={12}>
                        <Typography sx={{ mg: 1 }}>Already have an account?</Typography>
                        <Link color="inherit" component={RouterLink} to="/auth/login">
                            LogIn
                        </Link>
                    </Grid2>
                </Grid2>
            </form>
        </AuthLayout>
    )
}
