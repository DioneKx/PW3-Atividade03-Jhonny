import React from "react";
import './style.css'
import axios from "axios";

export function PlaceHolderDel() {

    const [id, setId] = React.useState("")

    const updtRecurse = (e) => {
        e.preventDefault()

        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(() => {
            alert("Recurso deletado com sucesso")
        })
        .catch((error) => console.log(error))
    }

    return (
        <>
            <h2>Método Delete</h2>

            <form onSubmit={updtRecurse} className="PlaceHolderDel-form">
                <div className="PlaceHolderDel-container-input">
                    <input required
                        type="number"
                        placeholder="Digite o id de usuário..."
                        value={id}
                        maxLength={100}
                        className="PlaceHolderDel-input"
                        onChange={(e) => setId(e.target.value)}
                    />
                </div>

                <div>
                    <button type='submit'>
                        Delete Recurse
                    </button>
                </div>
            </form>
        </>
    )
}