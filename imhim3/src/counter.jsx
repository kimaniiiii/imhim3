import { useState } from 'react';

function Counter(){
    const [count, setCount] = useState(0);


    return(
        <div>
            <p>
                You clicked {count} times
                <button onClick={() => setCount(count + 1)}> Click me !</button>
            </p>
        </div>
    ) ;
}

export default Counter