import React from 'react';
import { connect } from 'react-redux'
import gravatar from '../utils/gravatar'
import userIcon from '../assets/statics/user-icon.png'
import { deleteShopping } from '../actions'
import { Navbar, Icon, NavItem, Dropdown, Button, Divider } from 'react-materialize'
import Search from './Search'
import '../assets/styles/App.scss'


const NavbarComponent = (props) => {

    const { id, user, myList } = props
    const hasUser = Object.keys(user).length > 0

    const handleDeleteShopping  = (itemId) => {
        props.deleteShopping(itemId)
    }

        return (
            <Navbar
                className="blue darken-2"
                alignLinks="right"
                brand={<a className="brand-logo" href="/">Logo</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
            >
            <NavItem>
                <Search />
            </NavItem>
            <NavItem>
                {hasUser ? 
                    <img className="responsive-image circular" src={gravatar(user.email)} alt={user.email} />:
                    <img className="responsive-image circular" src={userIcon} alt="image icon"/>
                }
            </NavItem>
                {hasUser ?
                    <NavItem href="/">
                        {user.email}
                    </NavItem>
                    : 
                    <NavItem href="/register">
                        Register
                    </NavItem>
                }
                  
                {hasUser ? 
                    <NavItem href="/">
                        Logout
                    </NavItem> :
                    <NavItem href="/login">
                        Login
                    </NavItem>
                }
                <NavItem>
                    <Dropdown
                        id="Dropdown_6"
                        options={{
                            alignment: 'left',
                            autoTrigger: true,
                            closeOnClick: true,
                            constrainWidth: true,
                            container: null,
                            coverTrigger: true,
                            hover: false,
                            inDuration: 150,
                            onCloseEnd: null,
                            onCloseStart: null,
                            onOpenEnd: null,
                            onOpenStart: null,
                            outDuration: 250
                        }}
                        trigger={<Button node="button">Carrito</Button>}
                    >
                        {myList.map(item => 
                            <a key={item.id} 
                            {...item} 
                            href={`/item-detail/${id}`}>{item.title}</a>
                            )}
                    <Divider />
                        <Button onClick={handleDeleteShopping} className="right red">Vaciar</Button>               
                    </Dropdown>
                </NavItem>
       
            </Navbar>
        )
    }


const mapStateToProps = state => {
    return {
        myList: state.myList,
        user: state.user
    }
}

const mapDispatchToProps = {
    deleteShopping,
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent)