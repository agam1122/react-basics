// function callFunc(name){
//         alert("Fruit " + name);
//     }

function Login() {
    function callFunction(){
        alert("function called");
    }

    function callFunc(name){
        alert(name);
    }

    return(
        <div>
            <h1>Login User</h1>
            <button onClick={callFunction}>Click me</button>
            <button onClick={() => callFunc("apple")}>Apple</button>
            <button onClick={() => callFunc("banana")}>Banana</button>
        </div>
    )
}

export function Register() {
    return(
        <h1>Register User</h1>
    )
}

export function Setting() {
    return(
        <h1>Setting</h1>
    )
}

export const userKey = 5;

export default Login