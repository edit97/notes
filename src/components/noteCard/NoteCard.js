import {Link} from "react-router-dom";
import styles from './noteCard.module.css'
import {ReactComponent as DeleteIcon} from '../../assets/ic_delete.svg'
import {ReactComponent as EditIcon} from '../../assets/ic_edit.svg'

const NoteCard = ({note, index, deleteNotes}) => {
    function deleteNote(){
        deleteNotes(index)
    }

    return (
        <div className={styles.noteCard}>
            <div className={styles.noteTitle}>{note?.title}</div>
            <div className={styles.noteDescription}>{note?.description}</div>
            <div className={styles.actions}>
                <Link to={{
                    pathname: `update-note/${index}`,
                }}><EditIcon/></Link>
                <DeleteIcon className={styles.delete}
                            onClick={deleteNote}/>
            </div>
        </div>
    )
}

export default NoteCard
