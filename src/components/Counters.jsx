import React, { Component } from "react";
import Counter from "./Counter";

export default class Counters extends Component {
   render() {
      return (
         <div>
            <button className="btn btn-lg btn-primary m-3" onClick={this.props.handleReset}>
               Reset
            </button>

            {this.props.counters.map((counter) => (
               <Counter
                  key={counter.id}
                  counter={counter}
                  handleIncrement={this.props.handleIncrement}
                  handleDecrement={this.props.handleDecrement}
                  handleDelete={this.props.handleDelete}
               />
            ))}
         </div>
      );
   }
}
