import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import gravatar from '../utils/gravatar'
import { logoutRequest } from '../actions'
import classNames from 'classnames' 
import Search from './Search'
import '../assets/styles/components/Header.scss'
import menuIcon from '../assets/statics/home-menu.png'
import homeIcon from '../assets/statics/home.png'


const Header = props => {
    const { user, isLogin, isRegister } = props
    const hasUser = Object.keys(user).length > 0

    const handleLogout = () => {
        props.logoutRequest({})
    }

    const headerClass = classNames('header', {
        isLogin,
        isRegister,       
    })

    return (
        <header className={headerClass}>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <Link to="/">
                        <img src={homeIcon} alt="home icon" />
                    </Link>
                </div>
            </div>
        <Search isHome />
        <div className="header__menu">
            <div className="header__menu--profile">
                {hasUser ? 
                    <img src={gravatar(user.email)} alt={user.email} />:
                    <img src={menuIcon} alt="menu icon" />
                }
            </div>
            <ul>
                {hasUser ?
                    <li><Link to="/">{user.name}</Link></li>
                    : null
                }

                {hasUser ?
                    <li>
                        <Link 
                            to="/"
                            onClick={handleLogout}>
                            Cerrar Seción
                        </Link>
                    </li>
                    :
                    <li>
                        <Link to="/login">
                            Iniciar Seción
                        </Link>
                    </li>
                }
            </ul>
        </div>
    </header>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)