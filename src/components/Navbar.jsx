import React, { Component } from "react";

export default class Navbar extends Component {
   render() {
      return (
         <div>
            <nav className="navbar navbar-light bg-light">
               <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                     Navbar
                     <div className="badge bg-secondary m-2">{this.props.totalCount}</div>
                  </a>
               </div>
            </nav>
         </div>
      );
   }
}
