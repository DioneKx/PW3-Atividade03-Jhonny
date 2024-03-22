import React from "react";
import './style.css'
import axios from "axios";

export function PlaceHolderPost() {

    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")
    const [userId, setUserId] = React.useState("")

    const createRecurse = (e) => {
        e.preventDefault()
        const recurse = { title, body, userId }

        axios.post('https://jsonplaceholder.typicode.com/posts', recurse)
            .then((res) => {
                alert("Recurso criado com sucesso.")
                console.log({create: res.data})
            })
            .catch((error) => console.log(error))
    }

    return (
        <>
            <h2>Método Post</h2>

            <form onSubmit={createRecurse} className="PlaceHolderPost-form ">
                <div className="PlaceHolderPost-container-input">

                    <input required
                        type='text'
                        placeholder='Digite o título...'
                        value={title}
                        maxLength={100}
                        className="PlaceHolderPost-input"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />

                    <input required
                        type="text"
                        placeholder="Digite o 'corpo' da mensagem..."
                        value={body}
                        maxLength={100}
                        className="PlaceHolderPost-input"
                        onChange={(e) => setBody(e.target.value)}
                    />

                    <input required
                        type="number"
                        placeholder="Digite o id de usuário..."
                        value={userId}
                        maxLength={100}
                        className="PlaceHolderPost-input"
                        onChange={(e) => setUserId(e.target.value)}
                    />

                </div>

                <div>
                    <button type='submit'>
                        Create Recurse
                    </button>
                </div>
            </form>
        </>
    )
} 