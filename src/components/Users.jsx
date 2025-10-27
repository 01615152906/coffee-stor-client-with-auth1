import React, { useState } from 'react';
import { data, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const Users = () => {
    const initialUsers = useLoaderData();
    console.log(initialUsers)

    const [users, setUsers] = useState(initialUsers)

//     const {_id, photo, phone, name, lastSignInTime, 
// email, creationTime, address } = users;


const handleDelete = ( id ) =>{


  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

fetch(`https://coffee-store-server-beta-mocha.vercel.app/users/${id}`,{
  method: 'DELETE'
})
.then(res => res.json())
.then(data => {
  console.log('after delete', data)

  if(data.deletedCount){

    const remainingUsers = users.filter(user => user._id !== id)

setUsers(remainingUsers);

     Swal.fire({
      title: "Deleted!",
      text: "Your user has been deleted.",
      icon: "success"
    });
  }



})


    // Swal.fire({
    //   title: "Deleted!",
    //   text: "Your file has been deleted.",
    //   icon: "success"
    // });
  }
});

}
    return (


        <div>
            <h2 className='text-3xl'> Users: {users.length}</h2>



<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          no
        </th>
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {/* <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">United States</div>
            </div>
          </div>
        </td>
        <td>
          Zemlak, Daniel and Leannon
          <br />
          <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
        </td>
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr> */}

{
    users.map((user, index) => 
    <tr key={user._id} >
        <th>
 {
  index + 1
 }
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={user.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{user.name}</div>
              <div className="text-sm opacity-50">{user.address}</div>
            </div>
          </div>
        </td>
        <td>
          {user.phone}
          
        </td>
        <td>{user.email}</td>
        <th>
          <button className="btn  btn-xs">V</button>
            <button className="btn  btn-xs">E</button>
              <button onClick={() => handleDelete (user._id)} className="btn  btn-xs">X</button>
        </th>
      </tr> )
}


    </tbody>

  </table>
</div>



        </div>
    );
};

export default Users;