import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export default function ModalMovie(props) {
    return (
        <>


            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <img src={props.movieData.poster_path} alt={props.movieData.title} />
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
