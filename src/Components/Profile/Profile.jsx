import React from 'react'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Tab } from '@mui/material';
import logo from '../../images/logo.png';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import TweetCard from '../HomeSection/TweetCard';

const Profile = () => {

    const [tabValue, setTabValue] = React.useState('1');

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);

        if (newValue === 4) {
            console.log("likes tweet")
        } else if (newValue === 1) {
            console.log("users tweet")
        }
    };

    const navigate = useNavigate()

    const handleBack = () => navigate(-1)

    const handleOpenProfileModel = () => {
        console.log("handleOpenProfileModel")
    }

    const handleFollowUser = () => {
        console.log("handleFollowUser")
    }

    return (
        <div>
            <section className='z-50 flex items-center sticky top-0 bg-opacity-95'>
                <KeyboardBackspaceIcon className='cursor-pointer' onClick={handleBack} />
                <h1 className='py-5 text-xl font-bold opacity-90 ml-5'>Code With Ali Habibian</h1>
            </section>

            <section>
                <img className='w-[100%] h-[15rem] object-cover' src="https://cdn.pixabay.com/photo/2023/10/06/18/59/toad-8298947_640.jpg" alt="" />
            </section>

            <section className='pl-6'>
                <div className='flex justify-between items-start m-5 h-[5rem]'>
                    <Avatar
                        className='transform -translate-y-24'
                        alt='code with habibian'
                        src={logo}
                        sx={{ width: "10rem", height: "10rem", border: "4px solid white" }}
                    />

                    {true ?
                        <Button
                            onClick={handleOpenProfileModel}
                            variant='contained'
                            sx={{ borderRadius: "20px" }}
                        >
                            Edit Profile
                        </Button>
                        :
                        <Button
                            onClick={handleFollowUser}
                            variant='contained'
                            sx={{ borderRadius: "20px" }}
                        >
                            {true ? "Follow" : "Unfollow"}
                        </Button>
                    }
                </div>
                <div>
                    <div className='flex items-center'>
                        <h1 className='font-bold text-lg'>Code With Ali Habibian</h1>
                        {true && <img
                            className='ml-2 w-5 h-5'
                            src="https://img.icons8.com/fluency/48/instagram-check-mark.png"
                            alt="verify-mark"
                        />}
                    </div>

                    <h1 className='text-gray-500'>@alihabibian</h1>
                </div>

                <div className='m-2 space-y-3'>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto magnam iste amet asperiores minus ut.</p>

                    <div className='py-1 flex space-x-5'>
                        <div className='flex items-center text-gray-500'>
                            <BusinessCenterIcon />
                            <p className='ml-2'>Education</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <LocationOnIcon />
                            <p className='ml-2'>Iran</p>
                        </div>

                        <div className='flex items-center text-gray-500'>
                            <CalendarMonthIcon />
                            <p className='ml-2'>Joind Jun 2023</p>
                        </div>
                    </div>

                    <div className='flex items-center space-x-5'>
                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>120</span>
                            <span className='text-gray-500'>Following</span>
                        </div>

                        <div className='flex items-center space-x-1 font-semibold'>
                            <span>590</span>
                            <span className='text-gray-500'>Followers</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className='py-5'>
                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab label="Tweets" value="1" />
                                <Tab label="Replies" value="2" />
                                <Tab label="Media" value="3" />
                                <Tab label="Likes" value="4" />
                            </TabList>
                        </Box>
                        <TabPanel value="1">
                            {[1, 1, 1, 1].map((item) => <TweetCard />)}
                        </TabPanel>
                        <TabPanel value="2">users replies</TabPanel>
                        <TabPanel value="3">media</TabPanel>
                        <TabPanel value="4">likes</TabPanel>
                    </TabContext>
                </Box>
            </section>
        </div>
    )
}

export default Profile