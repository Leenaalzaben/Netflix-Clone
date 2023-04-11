import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ModalMovie from './ModalMovie';
import { useState } from 'react';
import "./Movie.css"



export default function Movie(props) {
    // console.log(props.movie.poster_path);
    const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movie.poster_path;




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (

        <>
            <div className={'Movie-cards'} style={{ display: 'flex',flexDirection:'row', justifyContent: 'space-between',padding:'10px' , margin: '0 -10px'}}>

                <Card style={{  width: '18rem', margin: '1rem',padding:'10px' }}>
                    <Card.Img variant="top" src={full_path} />
                    <Card.Body>

                        <Card.Title style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>{props.movie.title}</Card.Title>
                        <Card.Text style={{ fontSize: '0.9rem' }}>{props.movie.release_date}</Card.Text>

                        
                        <Button variant="warning" onClick={handleShow} style={{ width: '100%', marginTop: '1rem' }}>More Details</Button>
                    </Card.Body>
                </Card >
            </div>

            <ModalMovie show={show} handleClose={handleClose} movieData={props.movie} commentHandler={props.commentHandler} />






        </>




    )

}