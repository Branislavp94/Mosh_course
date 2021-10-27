import React, { Component } from "react";
import Navbar from "./components/Navbar.jsx";
import Counters from "./components/Counters";

export default class App extends Component {
   state = {
      counter: [
         {
            id: 1,
            value: 4,
         },
         {
            id: 2,
            value: 0,
         },
         {
            id: 3,
            value: 4,
         },
         {
            id: 4,
            value: 4,
         },
      ],
   };

   handleIncrement = (counter) => {
      const counters = [...this.state.counter];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value++;
      this.setState({ counter: counters });
   };

   handleDecrement = (counter) => {
      const counters = [...this.state.counter];
      const index = counters.indexOf(counter);
      counters[index] = { ...counter };
      counters[index].value--;
      this.setState({ counter: counters });
   };

   handleDelete = (id) => {
      const deleteItem = this.state.counter.filter((item) => item.id !== id);
      this.setState({ counter: deleteItem });
   };

   handleReset = () => {
      const counters = this.state.counter.map((item) => {
         item.value = 0;
         return item;
      });
      this.setState({ counter: counters });
   };

   render() {
      return (
         <div>
            <Navbar totalCount={this.state.counter.length} />
            <Counters
               counters={this.state.counter}
               handleIncrement={this.handleIncrement}
               handleDecrement={this.handleDecrement}
               handleDelete={this.handleDelete}
               handleReset={this.handleReset}
            />
         </div>
      );
   }
}
