function Loops(){

    // const userData=[
    //     {
    //         name:"Agam",
    //         age:21,
    //         email:"agam@test.com",
    //         id:1
    //     },
    //     {
    //         name:"Sam",
    //         age:22,
    //         email:"sam@test.com",
    //         id:2
    //     },
    //     {
    //         name:"Anil",
    //         age:23,
    //         email:"anil@test.com",
    //         id:3
    //     },
    //     {
    //         name:"Bruce",
    //         age:24,
    //         email:"bruce@test.com",
    //         id:4
    //     },
    // ]

    // return(
    //     <div>
    //         <h1>Loop in JSX using map function</h1>
    //         <table border="1">
    //             <thead>
    //                 <tr>
    //                     <td>Id</td>
    //                     <td>Name</td>
    //                     <td>Email</td>
    //                     <td>Age</td>
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {/* <tr>
    //                     <td>1</td>
    //                     <td>Agam</td>
    //                     <td>agam@test.com</td>
    //                     <td>21</td>
    //                 </tr> */}
    //                 {
    //                     userData.map((user) => (
    //                         <tr key={user.id}>
    //                         <td>{user.id}</td>
    //                         <td>{user.name}</td>
    //                         <td>{user.email}</td>
    //                         <td>{user.age}</td>
    //                     </tr>
    //                     ))
    //                 }
    //             </tbody>
    //         </table>
    //     </div>
    // )

    const items = Array.from({ length: 10 }, (_,i) => i + 1);

  return (
    <div>
      <h1>Loop Example</h1>
      <ul>
        {items.map((num) => (
          <li key={num}>Item {num}</li>
        ))}
      </ul>
    </div>
  );
}

export default Loops