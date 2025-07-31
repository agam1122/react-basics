function Props({user}){
    return(
        <div>
            <hr />
            <h1>Name: {user.name}</h1>
            <h1 style={{color:"blue", border:"5px solid blue", width:"200px"}}>Age: {user.age}</h1>
            <h1>Age: {user.email}</h1>
        </div>
    )
}

export function Wrapper({children}){
    return(
        <div style={{color:"green", border:"10px solid green", width:"500px"}}>
            {children}
        </div>
    )
}

export default Props;