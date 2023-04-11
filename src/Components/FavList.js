
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import { useRef } from 'react';
import { backendURL } from '../utilize'
import './fav.css'

export default function FavList() {

    const [favMovies, setFavMovies] = useState([]);
    // create get function req
    const updatedCommentRef = useRef("");
    async function getFavList() {

        let url = `${backendURL}/getMovies`;
        let response = await fetch(url, {
            method: 'GET',

        })
        // i want to wait until i get the res.
        let recivedData = await response.json();
        setFavMovies(recivedData);
        console.log(recivedData);

        // const full_path = 'https://www.themoviedb.org/t/p/w220_and_h330_face' + poster_path;

    }
    useEffect(() => {
        getFavList()
        // console.log(setFavMovies)


    }, [])

    async function handleDelete(id) {
        let url = `${backendURL}/deleteMovie/${id}`;

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


    async function handleUpdate(id) {
        {
            const updatedComment = updatedCommentRef.current.value;
            console.log(updatedComment);
            let url = `${backendURL}/updateMovie/${id}`;

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
            <h2  >Your Favorite List </h2>
            <div className={'fav-cards'}>



                {
                    favMovies && favMovies.map((movie) => {
                        console.log(movie);
                        return (

                            <Card style={{ width: "18rem" }}  >
                                <Card.Body>

                                    <Card.Img variant="top" src={movie.imageurl} alt={movie.id} />

                                    {movie.moviename ? movie.moviename : movie.moviename = 'Name not avilable'}
                                    <Card.Title>{movie.moviename}</Card.Title>
                                    <Card.Text>{movie.comment}</Card.Text>
                                    {/* image */}










                                    {/* 
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Add New Comment </Form.Label>
                                    <Form.Control ref={updatedCommentRef} type="text" placeholder="Enter your comment" />
                                </Form.Group> */}




                                    <div >
                                        <Form.Label>Add New Comment </Form.Label>
                                        <input type="text" ref={updatedCommentRef} />
                                        <div className='buttons'>
                                            <Button variant="info" onClick={() => handleUpdate(movie.id)}> Update </Button>
                                            <Button variant="danger" onClick={() => handleDelete(movie.id)}> Delete </Button>
                                        </div>

                                    </div>



                                </Card.Body>
                            </Card>
                        )
                    })









                }
            </div>
        </>
    )

}