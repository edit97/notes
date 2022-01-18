import {Link} from "react-router-dom";

import styles from './notes.module.css'

import NoteCard from "../noteCard/NoteCard";

const Notes = ({items, deleteNotes}) => {
    return (
        <div className={'root'}>
            <div className={styles.header}>
                <h2 className={styles.title}>Notes</h2>
                <Link to={'/add-note'} className={styles.addBtn}>Add</Link>
            </div>
            <div className={styles.notesList}>

                {
                    !!items.length && items.map((item, index) => {
                        return <NoteCard note={item} key={index}
                                         deleteNotes={deleteNotes}
                                         index={index}/>
                    })
                }
            </div>
        </div>
    )
}

export default Notes
