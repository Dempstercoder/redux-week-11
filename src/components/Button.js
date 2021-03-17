 /* reset button */
const Button = ({ handleReset }) => (
<button className="btn btn-danger"
        onClick={ handleReset }>Reset</button>
        
)

export default Button;

// if the function has curly braces {} it will need a return, if it has brackets it will not need a return.