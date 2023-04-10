
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useRef } from 'react';



export default function FavList() {
    const [favMovies, setFavMovies] = useState([]);
    // create get function req
    async function getFavList() {

        let url = `${process.env.REACT_APP_BACKEND_URL}/getMovies`;
        let response = await fetch(url, {
            method: 'GET',

        })
        // i want to wait until i get the res.
        let recivedData = await response.json();
        setFavMovies(recivedData);


    }
    useEffect(() => {
        getFavList()
        // console.log(setFavMovies)


    }, [])

    async function handleDelete(id) {
        let url = `${process.env.REACT_APP_BACKEND_URL}/deleteMovie/${id}`;

        let response = await fetch(url, {

            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        })
        // let recivedData=await response.json();
        getFavList();
    }
    //update
    // let userComment = commentRef.current.value;

    const commentRef = useRef();

    async function handleUpdate(id, data) {

        let url = `${process.env.REACT_APP_BACKEND_URL}/updateMovie/${id}`;

        let response = await fetch(url, {


            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),

        });
        getFavList();



    }







    return (

        <>
            <h2>Your Favorite List </h2>


            {
                favMovies && favMovies.map(movie => {
                    return (
                        <Card style={{ width: "18rem" }}>
                            <Card.Body>

                                <Card.Title>{movie.moviename}</Card.Title>
                                <Card.Text>{movie.comment}</Card.Text>








                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Add New Comment </Form.Label>
                                    <Form.Control ref={commentRef} type="text" placeholder="Enter your comment" />


                                </Form.Group>




                                <Button variant="danger" onClick={() => handleDelete(movie.id)}> Delete </Button>

                                <Button variant="info" onClick={(e) => handleUpdate(e,movie.id)}> Update </Button>

                            </Card.Body>
                        </Card>
                    )
                })









            }
        </>
    )

}