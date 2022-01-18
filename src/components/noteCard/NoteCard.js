import {useEffect, useState} from 'react'

import styles from './notes.module.scss'
import {ReactComponent as SearchIcon} from '../../assets/images/icons/ic_search.svg'

const Notes = () => {
    const [notes, setNotes] = useState([])

    useEffect(() => {

    }, [])

    return (
        <div className={styles.root}>
            <h2 className={styles.productsTitle}>Notes</h2>
            {

            }
        </div>
    )
}

export default Notes
