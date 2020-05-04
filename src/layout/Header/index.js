import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux'

import './styles.css';
import logoutService from '../../services/logout.service';



export default function Header() {
	const {isAuthenticated} = useSelector(state=> state.auth)
	const dispatch = useDispatch()
	function authLoginButton(){
		isAuthenticated && dispatch(logoutService())
	}

	const length = useSelector(state => state.cart.length)
	
	return (
		<nav className="l-header navbar navbar-expand-lg navbar-dark bg-primary">
			<NavLink to="/list" activeClassName="active" className="navbar-brand">
				Shopping-Car
			</NavLink>

			<div className="collapse navbar-collapse" id="navbarColor01">
				<ul className="navbar-nav mr-auto">
					<li className="nav-item">
						<NavLink to="/list" activeClassName="active" className="nav-link">
							Listar
						</NavLink>
					</li>
					{isAuthenticated && <li className="nav-item">
						<NavLink to="/add" activeClassName="active" className="nav-link">
							Adicionar 
						</NavLink>
					</li>}
				</ul>
			</div>
			<ul className="navbar-nav ml-md-auto">
				<NavLink to="/login" activeClassName="active" onClick={authLoginButton} className="nav-item mr-3 mt-2">
					<i className="fa fa-user fa-2x" aria-hidden="true"></i>
				</NavLink>
				<NavLink to="/cart" activeClassName="active" className="nav-item">
					<i className="fa fa-shopping-cart fa-3x" aria-hidden="true">
						<span className="fa-counter">{length}</span>
					</i>
				</NavLink>
			</ul>
		</nav>
	);
}
