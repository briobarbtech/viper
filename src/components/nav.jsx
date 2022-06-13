import React from "react";

function Nav(){
    return (
        <div className="navbar">
            <div className="logo">Viper Page</div>
            <div className="nav">
                <ul className="menu-nav">
                    <li className="option-nav"><a href="#" className="button-nav">About Viper</a></li>
                    <li className="option-nav"><a href="#" className="button-nav">Maps</a></li>
                    <li className="option-nav"><a href="#" className="button-nav">Lineups</a></li>
                    <li className="option-nav"><a href="#" className="button-nav">Smokes</a></li>
                    <li className="option-nav"><a href="#" className="button-nav">Walls</a></li>
                    <li className="option-nav"><a href="#" className="button-nav">Contact me</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav;