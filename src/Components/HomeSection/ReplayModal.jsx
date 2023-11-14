import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Avatar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import logo from '../../images/logo.png';
import ImageIcon from '@mui/icons-material/Image';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import { useFormik } from 'formik';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: 'none',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
    outline: 'none',
};

export default function ReplayModal({ handleClose, open }) {
    const navigate = useNavigate();
    const [uploadingImage, setUploadingImage] = React.useState(false);
    const [selectImage, setSelectedImage] = React.useState("");

    const handleSubmit = (values) => {
        console.log("handleSubmit", values)
    }
    const handleSelectImage = (event) => {
        setUploadingImage(true);
        const imgUrl = event.target.files[0]
        formik.setFieldValue("image", imgUrl);
        setSelectedImage(imgUrl);
        setUploadingImage(false);
    }

    const formik = useFormik({
        initialValues: {
            content: "",
            image: "",
            tweetId: 4
        },
        onSubmit: handleSubmit
    })

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
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
                                    <img
                                        className='ml-2 w-5 h-5'
                                        src="https://img.icons8.com/fluency/48/instagram-check-mark.png"
                                        alt="verify-mark"
                                    />
                                </div>

                            </div>
                            <div className='mt-2'>
                                <div className='cursor-pointer' onClick={() => navigate(`/tweet/${3}`)}>
                                    <p className='mb-2 p-0'>
                                        Tweeter clone - full stack project with spring boot and react -
                                        Tweeter clone - full stack project with spring boot and react
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <section className={`py-10`}>
                        <div className='flex space-x-5'>
                            <Avatar
                                alt='username'
                                src={logo}
                                sx={{ width: 50, height: 50 }} />

                            <div className='w-full'>
                                <form onSubmit={formik.handleSubmit}>
                                    <div>
                                        <input className={`border-none outline-none text-xl bg-transparent`}
                                            type="text" name='content' placeholder='What is happening?'
                                            {...formik.getFieldProps("content")}
                                            {...formik.errors.content && formik.touched.content && (
                                                <span className='text-red-500'>{formik.errors.content}</span>
                                            )} />
                                    </div>

                                    <div>
                                        <img src="" alt="" />
                                    </div>

                                    <div className='flex justify-between items-center mt-5'>
                                        <div className='flex space-x-5 items-center'>
                                            <label className='flex items-center space-x-2 rounded-md cursor-pointer'>
                                                <ImageIcon className='text-[#1d9bf0]' />
                                                <input type="file" name='imageFile' className='hidden'
                                                    onChange={handleSelectImage} />
                                            </label>
                                            <FmdGoodIcon className='text-[#1d9bf0]' />
                                            <TagFacesIcon className='text-[#1d9bf0]' />
                                        </div>
                                        <div>
                                            <Button
                                                sx={{
                                                    width: "100%",
                                                    borderRadius: "20px",
                                                    paddingX: "20px",
                                                    paddingY: "8px",
                                                    bgcolor: "#1e88e5"
                                                }}
                                                variant='contained'
                                                type='submit'
                                            >
                                                Tweet
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </section>
                </Box>
            </Modal>
        </div>
    );
}