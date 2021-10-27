import React, { Component } from "react";

export default class Counter extends Component {
   formatBadge = () => {
      return this.props.counter.value === 0 ? "zero" : this.props.counter.value;
   };

   formatClass = () => {
      return this.props.counter.value === 0
         ? "badge bg-warning fs-4 btn-lg"
         : "badge bg-secondary fs-4 btn-lg";
   };
   render() {
      return (
         <>
            <div className="p-2 m-2 d-flex align-items-center ">
               <span className={this.formatClass()}>{this.formatBadge()}</span>
               <button
                  className="btn btn-primary m-2 btn-lg"
                  onClick={() => this.props.handleIncrement(this.props.counter)}
               >
                  +
               </button>
               <button
                  className="btn btn-primary m-2 btn-lg"
                  onClick={() => this.props.handleDecrement(this.props.counter)}
                  disabled={this.props.counter.value === 0 ? "disabled" : ""}
               >
                  -
               </button>
               <button
                  className="btn btn-danger btn-lg"
                  onClick={() => this.props.handleDelete(this.props.counter.id)}
               >
                  Delete
               </button>
            </div>
         </>
      );
   }
}
