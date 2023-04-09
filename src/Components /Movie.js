import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';


export default function Movie(props) {
    // console.log(props.movie.poster_path);
    const full = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movie.poster_path;




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={full} />
                <Card.Body>

                    <Card.Title>{props.movie.title}</Card.Title>
                    <Card.Text>{props.movie.release_date}</Card.Text>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Add Your Comment</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                









                <Button variant="primary" onClick={handleShow}>More Details</Button>
            </Card.Body>
        </Card >


            <ModalMovie show={show} handleClose={handleClose} movieData={props.movie} />






        </>




    )

}