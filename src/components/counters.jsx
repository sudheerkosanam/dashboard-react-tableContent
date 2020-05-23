import React, { Component } from 'react';
import Counter from './counter';
class Counters extends Component {

    render() { 
        const { counters,onDelete,onIncrement,onDecrement,onReset } = this.props;
        return ( 
            
            <div>
                <button className="btn btn-primary mt-5" onClick={onReset}>Reset</button>
                {counters.map(
                counter =>( 
                <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement}
                onDecrement={onDecrement}
                counter={counter} >
                </Counter> 
                 ) )} 
            </div>
         );
    }
}
 
export default Counters;