
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

        // const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + poster_path;

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

    const updatedCommentRef = useRef("");

    async function handleUpdate(id) {
        {
            const updatedComment = updatedCommentRef.current.value;
            let url = `${process.env.REACT_APP_BACKEND_URL}/updateMovie/${id}`;

            let response = await fetch(url, {


                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment: updatedComment }),

            });

        }


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

                                <Card.Img variant="top" src={movie.image} alt={movie.id} />


                                <Card.Title>{movie.moviename}</Card.Title>
                                <Card.Text>{movie.comment}</Card.Text>
                                {/* image */}










                                {/* 
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Add New Comment </Form.Label>
                                    <Form.Control ref={updatedCommentRef} type="text" placeholder="Enter your comment" />
                                </Form.Group> */}




                                <div>
                                    <Form.Label>Add New Comment </Form.Label>
                                    <input type="text" ref={updatedCommentRef} />
                                    <Button variant="info" onClick={() => handleUpdate(movie.id)}> Update </Button>
                                    <Button variant="danger" onClick={() => handleDelete(movie.id)}> Delete </Button>


                                </div>



                            </Card.Body>
                        </Card>
                    )
                })









            }
        </>
    )

}