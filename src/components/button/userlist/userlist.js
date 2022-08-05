import React, { useEffect, useState } from 'react'
import Axios from 'axios';

function  UserList() {
    let [user,setUser]= useState([]);
    const getuserList=()=>{
      alert('hi')
    }
    useEffect(()=>{
        Axios.get('https://jsonplaceholder.typicode.com/users').then((response)=>{
            console.log(response)
            setUser(response.data)
        }).catch((error)=>{
          console.log(error)
        })
    },[])
  return (
    <div>
       <h1>User List </h1>
       <button onClick={getuserList} className="btn btn-sm btn-primary">Click</button><br/><br/>
       
              <table className='table '>
                          <thead className="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>USERNAME</th>
                                    <th>EMAIL</th>
                                    <th>ADDRESS</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                               user.length>0 ?<React.Fragment>
                                {
                                    user.map((usr)=>{
                                       return(
                                        <tr>
                                            <td>{usr.id}</td>
                                            <td>{usr.name}</td>
                                            <td>{usr.username}</td>
                                            <td>{usr.email}</td>
                                            <td>{usr.address.city}</td>
                                        </tr>
                                       )

                                    })

                                }
                               </React.Fragment>:null
                            }
                            </tbody>
                </table>            
               
    </div>
  )
}
export default UserList
