import React from "react";
import './style.css'
import axios from "axios";

export function PlaceHolderPut() {

    const [title, setTitle] = React.useState("")
    const [body, setBody] = React.useState("")
    const [userId, setUserId] = React.useState("")

    const updtRecurse = (e) => {
        e.preventDefault()
        
        const recurse = {id: 1, title, body, userId}

        axios.put('https://jsonplaceholder.typicode.com/posts/1', recurse)
        .then((res) => {
            alert("Recurso atualizado com sucesso")
            console.log({update: res.data})
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
            <h2>Método Update</h2>

            <form onSubmit={updtRecurse} className="PlaceHolderPut-form">
                <div className="PlaceHolderPut-container-input">

                    <input required
                        type='text'
                        placeholder='Digite o título...'
                        value={title}
                        maxLength={100}
                        className="PlaceHolderPut-input"
                        onChange={(e) => { setTitle(e.target.value) }}
                    />

                    <input required
                        type="text"
                        placeholder="Digite o 'corpo' da mensagem..."
                        value={body}
                        maxLength={100}
                        className="PlaceHolderPut-input"
                        onChange={(e) => setBody(e.target.value)}
                    />

                    <input required
                        type="number"
                        placeholder="Digite o id de usuário..."
                        value={userId}
                        maxLength={100}
                        className="PlaceHolderPut-input"
                        onChange={(e) => setUserId(e.target.value)}
                    />
                </div>

                <div>
                    <button type='submit'>
                        Update Recurse
                    </button>
                </div>
            </form>
        </>
    )
}