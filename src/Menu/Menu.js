import React from 'react'
import menuClose from '../images/header/menuClose.png'
import { items } from './MenuItems'
import './Menu.scss'
const Menu = ({ isMenuOpen, onChange }) => {
	return (
		<div className={`menu ${isMenuOpen && 'open'}`}>
			<div className='menuContent'>
				<img
					src={menuClose}
					className='menuClose'
					alt=''
					onClick={() => onChange(false)}
				></img>
				<div className='menuItems'>
					{items.map((item, index) => (
						<a href={item.itemLink} key={index} onClick={() => onChange(false)}>
							{item.itemText}
						</a>
					))}
				</div>
			</div>
		</div>
	)
}

export default Menu
