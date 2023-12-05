import React from 'react'
import { Button, Grid } from '@mui/material'
import { GoogleLogin } from '@react-oauth/google'

const Authentication = () => {
    return (
        <div>
            <Grid className='overflow-y-hidden' container>
                <Grid className='hidden lg:block' item lg={7}>
                    <img className='w-full h-screen' src="https://iili.io/JIBuyn1.md.jpg" allow="autoplay" alt="login" />
                    <div className='absolute top-[26%] left-[19%]'>
                        <img
                            width={300}
                            height={300}
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            src='https://upload.wikimedia.org/wikipedia/commons/5/53/X_logo_2023_original.svg'
                            alt='x-logo' />
                    </div>
                </Grid>

                <Grid className='px-10' lg={5} xs={12}>
                    <h1 className='font-bold text-7xl mt-10'>Happening Now</h1>

                    <h1 className='font-bold text-3xl py-16'>Join Tweeter Today</h1>

                    <div className='w-[60%]'>
                        <div className='w-full'>
                            <GoogleLogin width='100%' />
                            <p className='py-5 text-center'>OR</p>
                            <Button fullWidth variant='contained' size='large' sx={{ borderRadius: "25px", py: "7px" }}>
                                Sign Up with Email
                            </Button>
                            <p className='text-sm mt-2'>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.</p>
                        </div>

                        <div className='mt-10'>
                            <h1 className='font-bold text-xl mb-5'>Already have an account?</h1>
                            <Button fullWidth variant='outlined' size='large' sx={{ borderRadius: "25px", py: "7px" }}>
                                Log In
                            </Button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Authentication