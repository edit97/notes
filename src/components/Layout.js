import React, {useState} from "react";
import {Route, Switch} from "react-router-dom";
import Notes from "./notes/Notes";
import AddUpdateNote from "./addNote/AddUpdateNote";

const Layout = () => {
    const [items, setItems] = useState([])

    function addNotes(data){
        setItems([...items, data])
    }
    function deleteNotes(index){
        let list = items.filter((item, i) => i !== index)
        setItems(list)
    }
    function updateNotes(data, index){
        let list = items.map((item, i) => {
            return i === Number(index) ? data : item
        })
        setItems(list)
    }

    return <div>
        <Switch>
            <Route exact path="/">
                <Notes items={items} deleteNotes={deleteNotes}/>
            </Route>
            <Route exact path="/add-note">
                <AddUpdateNote addNotes={addNotes} items={items}/>
            </Route>
            <Route exact path="/update-note/:index">
                <AddUpdateNote updateNotes={updateNotes} items={items}/>
            </Route>
        </Switch>
    </div>
}

export default Layout
