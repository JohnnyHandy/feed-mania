import React from 'react'
import {Navbar,NavbarBrand,Button} from 'reactstrap'


const navbar = ()=>{
    return(
        <Navbar>
            <Button id='toggler'>Toggle</Button>
            <NavbarBrand>Rss-Feed</NavbarBrand>
        </Navbar>
    )
}

export default navbar