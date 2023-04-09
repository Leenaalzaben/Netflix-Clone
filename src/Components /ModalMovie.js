import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Movie from './Movie';

export default function ModalMovie(props) {

// const baseUrl = 'https://www.themoviedb.org/t/p/w220_and_h330_face';

const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movieData.poster_path;


    return (
        <>


            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>


                <img src={full_path} alt={props.movieData.title} />
                <Modal.Body>{props.movieData.overview}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={props.handleClose}>
                        Saved
                    </Button>
                </Modal.Footer>
            </Modal>





        </>


    )





}
