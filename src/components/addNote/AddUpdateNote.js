import {useParams} from "react-router-dom";
import {useEffect, useState} from 'react'

import {history} from "../../routing/history";

import styles from './addNote.module.css'

const AddUpdateNote = ({items, addNotes, updateNotes}) => {
    const [note, setNote] = useState({
        title: '',
        description: '',
    })
    const { index } = useParams();


    useEffect(() => {
        if(index){
            let updatedNote = items[index]
            setNote({
                ...updatedNote
            })
        }
    }, [])

    function getInputValue({target}){
        const {name, value} = target
        setNote({
            ...note,
            [name]: value
        })
    }

    function addNote (){
        if (note.title || note.description) {
            index ? updateNotes(note, index) : addNotes(note)
            history.push('/')
        }
    }

    return (
        <div className={styles.addNote}>
            <h2 className={styles.productsTitle}>{index ? 'Edit' : 'Add'} Note</h2>
            <input
                type="text"
                name={'title'}
                value={note.title}
                onChange={getInputValue}
                placeholder={'Title'}
            />
            <textarea
                type="text"
                name={'description'}
                value={note.description}
                onChange={getInputValue}
                placeholder={'Description'}
            />
            <button onClick={addNote}>Save</button>
        </div>
    )
}

export default AddUpdateNote
