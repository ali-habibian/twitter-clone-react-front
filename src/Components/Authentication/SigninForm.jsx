import { Button, Grid, TextField } from '@mui/material'
import { blue } from '@mui/material/colors'
import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { loginUser } from '../../Store/Auth/Action'

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required")
})

const SigninForm = () => {

    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values))
            console.log(values)
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        type='email'
                        fullWidth
                        label="Email"
                        name='email'
                        variant='outlined'
                        size='large'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>

                <Grid item xs={12}>
                    <TextField
                        type='password'
                        fullWidth
                        label="Password"
                        name='password'
                        variant='outlined'
                        size='large'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>

                {/* Login Button in Grid */}
                <Grid className='mt-20' item xs={12}>
                    <Button
                        type='submit'
                        fullWidth
                        variant='contained'
                        size='large'
                        sx={{ borderRadius: "25px", py: "15px", bgcolor: blue[500] }}
                    >
                        Login
                    </Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SigninForm