import React, {Component} from "react";
import {Router} from "react-router-dom";

import Layout from "../components/Layout";

import {history} from "./history";

export default class Routes extends Component {
    render() {
        return <Router history={history}>
            <Layout/>
        </Router>
    }
}
