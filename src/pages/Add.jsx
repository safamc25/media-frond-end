import React from 'react'
import { PlusCircle } from 'react-feather'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { addVideo } from '../service/allapi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


//using props destructure handleresponse

function Add({handleresponse}) {
    const [uploaddata, setuploaddata] = useState({
        id: "",
        caption: "",
        thumbnail: "",
        url: ""
    })

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // define setInput function
    const setInput = (e) => {
        const { name, value } = e.target
        setuploaddata({ ...uploaddata, [name]: value })
        // ... :is called spread operator, in object the data is given key value pair and if we give one data in object the other data should need to be empty so to put that empty we use spread operator
        // setuploaddata(e.target.value)
    }
    console.log(uploaddata);

    // extract embedded url from youtube original url

    const extractUrl = (e) => {
        // console.log(e.target.value);
        let youtubeurl = e.target.value

        if (youtubeurl.includes("v=")) {
            let index = youtubeurl.indexOf("v=")
            console.log(index);

            let videourl = youtubeurl.substring(index + 2, index + 13)
            console.log(videourl);

            let videodata = uploaddata

            videodata.url = `https://www.youtube.com/embed/${videourl}`

            setuploaddata(videodata)

        }
        console.log(uploaddata);
    }


    const handleAdd = async () => {

        const { id, caption, thumbnail, url } = uploaddata

        if (!id || !caption || !thumbnail || !url) {
            toast("Please fill the form completely")
        }
        else {
            // make api call
            const response = await addVideo(uploaddata)


            if (response.status >= 200 && response.status < 300) {

                // console.log(response.data);

                handleresponse(response.data)

                setShow(false);
                toast.success("New video uploaded successfully", {
                    //   from toasify
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
            }

            else {
                toast.warning("Please provide a unique id")
            }
        }
    }



    return (
        <>
            <div className='btn' onClick={handleShow}>
                <PlusCircle color='green' size={90} />
            </div>

            {/* model */}

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Upload Video Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        {/* id */}
                        <FloatingLabel className='mb-3' controlId="floatingid" label="Id">
                            <Form.Control name='id' onChange={setInput} type="text" placeholder="Uploading video id" />
                        </FloatingLabel>

                        {/* caption */}
                        <FloatingLabel className='mb-3' controlId="floatingcaption" label="Uploading Video Caption">
                            <Form.Control name='caption' onChange={setInput} type="text" placeholder="Video Caption" />
                        </FloatingLabel>

                        {/* video cover image url */}
                        <FloatingLabel className='mb-3' controlId="floatingimage" label="Video Cover Image URL">
                            <Form.Control name='thumbnail' onChange={setInput} type="text" placeholder="Video cover image URL" />
                        </FloatingLabel>

                        {/* uploading video link */}
                        <FloatingLabel className='mb-3' controlId="floatinglink" label="Uploading Video Link ">
                            <Form.Control name='url' onChange={extractUrl} type="text" placeholder="Video Link" />
                        </FloatingLabel>

                    </Form>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button onClick={handleAdd} variant="primary">Add</Button>
                </Modal.Footer>
            </Modal>

            {/* from toasity -demo */}
           
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default Add