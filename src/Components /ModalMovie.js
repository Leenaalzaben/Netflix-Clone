import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRef } from 'react';

export default function ModalMovie(props) {
    const commentRef = useRef();
    const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + props.movieData.poster_path;
    // To stop auto refreshing the page
    function submitHandler(e) {
        e.preventDefault();
        let userComment = commentRef.current.value;

        // create copy of data + add new element usercomment
        let newMovie = { ...props.movieData, userComment }
        console.log(newMovie);

        props.commentHandler(newMovie, newMovie.id);
    }
    async function addMovieToFavListHandler(e) {
        // send req to my server (fetch with POST req to server)
        e.preventDefault();

        let url = `${process.env.REACT_APP_BACKEND_URL}/addMovie`;
        // data send to my BE
        let data = {
            // actual send not thunder
            // [moviename, comment]
            moviename:props.movieData.title,
            comment: props.movieData.comment
           
        }
        console.log(data);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

            
        })
        // console.log(props);
        console.log(response);

     
    }







    return (
        <>
            <Modal show={props.show} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.movieData.title}</Modal.Title>
                </Modal.Header>
                <img src={full_path} alt={props.movieData.title} />
                <Modal.Body>{props.movieData.overview}
                    <br /><br />
                    {props.movieData.comment ? props.movieData.comment : "No comment Added "}
                    <br /><br /><br />
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Add Comment </Form.Label>
                            <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />
                            <Form.Text className="text-muted">
                                Please write your comment here !
                            </Form.Text>
                        </Form.Group>
                        <Button variant="success" type="submit" onClick={(e) => submitHandler(e)}>
                            Submit
                        </Button>
                        <Button variant="warning" type="submit" onClick={(e) => addMovieToFavListHandler(e)}>
                            Add to My List
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="dark" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal >
        </>

    )


}
