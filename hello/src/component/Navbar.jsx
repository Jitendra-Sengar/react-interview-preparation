import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to={"/"}> List of Items </Link></li>
        <li><Link to={"/counter"}> Counter </Link></li>
        <li><Link to={"/showuserinput"}> Show user Input </Link></li>
        <li><Link to={"/fetch"}> Fetch </Link></li>
        <li><Link to={"/timer"}> Timer </Link></li>
        <li><Link to={"/todo"}> Todo </Link></li>
        <li><Link to={"/toggleswitch"}> Toggle Switch </Link></li>
        <li><Link to={"/uploadimage"}> Upload Image </Link></li>
        <li><Link to={"/auth"}> Authentication </Link></li>
        <li><Link to={"/pagination"}> Pagination </Link></li>
        <li><Link to={"/weather"}> Weather </Link></li>
      </ul>
    </nav>
  )
}
export default Navbar;
