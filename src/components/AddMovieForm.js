import React,{useState} from 'react';
import {Modal,Button} from 'react-bootstrap';

function AddMovieForm ({addMovie}) {

    
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
    const [posterURL,setPosterURL]=useState("")
    const [rating, setRating]=useState(0)

    //state for modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //event handlers
    function handleTitle (e) {setTitle(e.target.value)}
    function handleDescription (e) {setDescription(e.target.value)}
    function handlePosterURL (e) {setPosterURL(e.target.value)}
    function handleRating (e) {setRating(e.target.value)}

    const resetValues=()=> {setTitle(""); setDescription("");setPosterURL("");setRating(0)}

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
            Add a Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Add a Movie:</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <span>Title: </span>
                    <input value={title} onChange={handleTitle}/><br/>
                    <span>Description: </span>
                    <input value={description} onChange={handleDescription}/><br/>
                    <span>Poster URL: </span>
                    <input value={posterURL} onChange={handlePosterURL}/><br/>
                    <span>Rating: </span>
                    <input value={rating} onChange={handleRating}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                    <Button variant="primary" onClick={ ()=>{
                        addMovie(title,description,posterURL,rating);
                        resetValues()
                     }} >
                    Save
                    </Button>
                </Modal.Footer>

            </Modal>
        </div>
    )
}

export default AddMovieForm;