// Import packages
import React, {Component} from "react";
import {Route, Switch, Router, Redirect} from "react-router-dom";

// Import utils
import {history} from "../configs/history";
import {ProtectedRoute} from "./protectedRoute";

// Import pages
import Layout from "../containers/Layout";
import NotFound from "../containers/notFound/NotFound";
import SignIn from "../containers/signIn/SignIn";
import SignUp from "../containers/signUp/SignUp";
import VerifyEmail from "../containers/verifyEmail/VerifyEmail";
import DirectorInformation from "../containers/directorInformation/DirectorInformation";
import CompanyInformation from "../containers/companyInformation/CompanyInformation";
import Profile from "../containers/profile/Profile";
import Branches from "../containers/branches/Branches";
import Payments from "../containers/payments/Payments";
import History from "../containers/history/History";
import AddEditBranch from "../containers/branches/AddEditBranch";
import Employers from "../containers/employers/Employers";
import EmployerDetails from "../containers/employers/employerDetails/EmployerDetails";
import Cards from "../containers/cards/Cards";
import AddCard from "../containers/cards/AddCard";
import CardDetails from "../containers/cards/cardDetails/CardDetails";
import CardItemDetails from "../containers/cards/cardItemDetails/CardItemDetails";
import ForgotPassword from "../containers/forgotPassword/ForgotPassword";
import ResetPassword from "../containers/forgotPassword/ResetPassword";
import BankHistory from "../containers/bankHistory/BankHistory";

export default class Routes extends Component {
    render() {
        return <Router history={history}>
            <Layout>
                <Switch>
                    <Redirect exact from="/" to="/sign-in"/>
                    <Route exact path="/sign-in" component={SignIn}/>
                    <Route exact path="/sign-up" component={SignUp}/>
                    <Route exact path="/sign-up/verify" component={VerifyEmail}/>
                    <Route exact path="/company-information" component={CompanyInformation}/>
                    <Route exact path="/director-information" component={DirectorInformation}/>
                    <Route exact path="/forgot-password" component={ForgotPassword}/>
                    <Route exact path="/forgot-password/verify" component={VerifyEmail}/>
                    <Route exact path="/reset-password" component={ResetPassword}/>
                    <ProtectedRoute exact path="/profile" component={Profile}/>
                    <ProtectedRoute exact path="/branches" component={Branches}/>
                    <ProtectedRoute exact path="/branches/add" component={AddEditBranch}/>
                    <ProtectedRoute exact path="/branches/edit/:id" component={AddEditBranch}/>
                    <ProtectedRoute exact path="/history" component={History}/>
                    <ProtectedRoute exact path="/bank-history" component={BankHistory}/>
                    <ProtectedRoute exact path="/card" component={Cards}/>
                    <ProtectedRoute exact path="/card/add" component={AddCard}/>
                    <ProtectedRoute exact path="/card/:id" component={CardDetails}/>
                    <ProtectedRoute exact path="/card/:id/card-details/:userId" component={CardItemDetails}/>
                    <ProtectedRoute exact path="/payments" component={Payments}/>
                    <ProtectedRoute exact path="/employers" component={Employers}/>
                    <ProtectedRoute exact path="/employers/:id" component={EmployerDetails}/>
                    <Route exact path="/404" component={NotFound}/>
                    <Route exact path="*" component={NotFound}/>
                </Switch>
            </Layout>
        </Router>
    }
}
