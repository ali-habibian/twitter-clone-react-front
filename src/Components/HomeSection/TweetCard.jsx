import React from 'react'
import { Avatar, Button } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../images/logo.png';
import { useNavigate } from 'react-router-dom';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarChartIcon from '@mui/icons-material/BarChart';
import RepeatIcon from '@mui/icons-material/Repeat';

const TweetCard = () => {

    const navigate = useNavigate();

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDeleteTweet = () => {
        console.log("delete tweet")
        handleClose();
    }

    const handleEditTweet = () => {

    }

    const handleOpenReplyModel = () => {
        console.log("open model")
    }

    const handleCreateRetweet = () => {
        console.log("handle Create Retweet")
    }

    const handleLikeTweet = () => {
        console.log("handle Like Tweet")
    }

    return (
        <div className=''>

            {/* <div className='flex items-center font-semibold text-gray-700 py-2'>
            <RepeatIcon />
            <p>You Retweet</p>
        </div> */}

            <div className='flex space-x-5'>
                <Avatar
                    onClick={() => navigate(`/profile/${6}`)}
                    className='cursor-pointer'
                    alt='username'
                    src={logo}
                    sx={{ width: 50, height: 50 }} />

                <div className='w-full'>
                    <div className='flex justify-between items-center'>
                        <div className='flex cursor-pointer items-center space-x-2'>
                            <span className='font-semibold'>Code With Ali Habibian</span>
                            <span className='text-gray-600'>@alihabibian . 2m</span>
                            <img className='ml-2 w-5 h-5' src="https://img.icons8.com/fluency/48/instagram-check-mark.png" alt="verify-mark" />
                        </div>

                        <div>
                            <Button
                                id="basic-button"
                                aria-controls={open ? 'basic-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                                onClick={handleClick}
                            >
                                <MoreHorizIcon />
                            </Button>
                            <Menu
                                id="basic-menu"
                                anchorEl={anchorEl}
                                open={open}
                                onClose={handleClose}
                                MenuListProps={{
                                    'aria-labelledby': 'basic-button',
                                }}
                            >
                                <MenuItem onClick={handleDeleteTweet}>Delete</MenuItem>
                                <MenuItem onClick={handleEditTweet}>Edit</MenuItem>
                            </Menu>
                        </div>
                    </div>
                    <div className='mt-2'>
                        <div className='cursor-pointer'>
                            <p className='mb-2 p-0'>Tweeter clone - full stack project with spring boot and react - Tweeter clone - full stack project with spring boot and react</p>
                            <img
                                className='w-[28rem] border border-gray-400 rounded-md'
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQs6svVG0vNnM1qMy2JD57YQ0nFGQRuMdCEKg&usqp=CAU"
                                alt="tweet pic" />
                        </div>

                        <div className='py-5 flex flex-wrap justify-between items-center'>
                            <div className='space-x-3 flex items-center text-gray-600'>
                                <ChatBubbleOutlineIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>43</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                <RepeatIcon className='cursor-pointer' onClick={handleCreateRetweet} />
                                <p>54</p>
                            </div>

                            <div className={`${true ? "text-pink-600" : "text-gray-600"} space-x-3 flex items-center`}>
                                {true ? <
                                    FavoriteIcon className='cursor-pointer' onClick={handleLikeTweet} />
                                    :
                                    <FavoriteBorderIcon className='cursor-pointer' onClick={handleLikeTweet} />}

                                <p>54</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <BarChartIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                                <p>430</p>
                            </div>

                            <div className='space-x-3 flex items-center text-gray-600'>
                                <FileUploadIcon className='cursor-pointer' onClick={handleOpenReplyModel} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TweetCard