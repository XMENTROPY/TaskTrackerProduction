import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AddList } from '../../AddList/AddList';
import { Dashboard } from '../../Dashboard/Dashboard';
import { Login } from '../../Login/Login';

//Need to dynamically change what is returned here based on the tables.
//Format will be `baseurl`/<ListName>

export const DynamicRouter = () => {

	return (
		<BrowserRouter>
            <Switch>
                <Route path='/' exact component = {Login} />
                <Route path='/Dashboard' exact component = {Dashboard} />
                <Route path='/AddList' component = {AddList} />
            </Switch>
		</BrowserRouter>
	)
}
