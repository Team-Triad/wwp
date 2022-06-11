import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';
import icon from './icon.webp';
import Firebase from '../Firebase/fire';

const Navbar = () => {
  const [user, setUser] = useState('');
  const handleLogout = () => {
    setUser("");
    Firebase.auth().signOut();
  };
  const authListener = () => {
    Firebase.auth().onAuthStateChanged(user =>{
      if(user){
        setUser(user);
        window.sessionStorage.setItem("ID", user.uid);
        localStorage.setItem("user",user);
      }
      else{
        setUser("");
      }
    });
  };

  function animation(){
    var tabsNewAnim = $('#navbarSupportedContent');
    var activeItemNewAnim = tabsNewAnim.find('.active');
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    
    $(".hori-selector").css({
      "top":itemPosNewAnimTop.top + "px", 
      "left":itemPosNewAnimLeft.left + "px",
      "height": activeWidthNewAnimHeight + "px",
      "width": activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click","li",function(e){
      $('#navbarSupportedContent ul li').removeClass("active");
      $(this).addClass('active');
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        "top":itemPosNewAnimTop.top + "px", 
        "left":itemPosNewAnimLeft.left + "px",
        "height": activeWidthNewAnimHeight + "px",
        "width": activeWidthNewAnimWidth + "px"
      });
    });
  }

  useEffect(() => {
    authListener();
    animation();
    $(window).on('resize', function(){
      setTimeout(function(){ animation(); }, 500);
    });
    setInterval(() => {
            const userString = localStorage.getItem("user");
            const user = JSON.parse(userString);
            setUser(user);
            }, [])
    
  }, 500);

  

  if(!user){
  return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact >
        <img alt="logo" src={icon} width={60} height={50} />
        Worthy Work Provider
      </NavLink>
    
    
      <button
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="./" exact>
                <i 
                className="fas fa-home">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="./about" exact>
                <i 
                className="far fa-address-book">
                </i>About
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="./services" exact>
                <i 
                className="far fa-clone">
                </i>Post a Job
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./signup" exact>
                <i 
                className="far fa-user">
                </i>Sign Up
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./sign" exact>
                <i 
                className="far fa-copy">
                </i>Login
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )}
  if(user){
    return (
  <nav className="navbar navbar-expand-lg navbar-mainbg">
    
      <NavLink className="navbar-brand navbar-logo" to="/" exact >
        <img alt="logo" src={icon} width={60} height={50} />
        Worthy Work Provider
      </NavLink>
    
    
      <button
        className="navbar-toggler"
        onClick={ function(){
          setTimeout(function(){ animation(); });
        }}
        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            
            <div className="hori-selector">
              <div className="left"></div>
              <div className="right"></div>
            </div>
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="./" exact>
                <i 
                className="fas fa-home">
                </i>Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="./about" exact>
                <i 
                className="far fa-address-book">
                </i>About
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="./services" exact>
                <i 
                className="far fa-clone">
                </i>Post a Job
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="./sign" exact>
                <i 
                className="far fa-user">
                </i>Profile
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" onClick={handleLogout} to="./sign" exact>
                <i 
                className="far fa-copy">
                </i>Logout
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )}
  }
export default Navbar;