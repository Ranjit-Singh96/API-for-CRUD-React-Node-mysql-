import React, { useEffect, useState } from "react";
import "./Main.css";
import Form from "./components/form";
import Table from "./components/table";
import { API } from "./API/ApiLinks";
import "bootstrap/dist/css/bootstrap.css";

export default function Main() {
  const [allUsers, setAllUsers] = useState([]);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [searchStatus, setSearchStatus] = useState(false);
  const [searchData, setSearchData] = useState("");
  const [address, setAddress] = useState("");
  const [isEdit,setIsEdit]=useState(false);
  const [editFormData, setEditFormData] = useState({
    UserId:"",
    username: "",
    email: "",
    address: "",
  }); 

  const handleEditClick=(item)=>{
    setIsEdit(true);
    // console.log("Data before update:",item);
    // console.log(userid);
    const editFormValues = {
      UserId:item.user_id,
      username: item.username,
      email: item.email,
      address: item.address,
    };
    // console.log(editFormValues);
    setEditFormData(editFormValues);
  }


  const handleEditChange = (e) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };


// Function for prevent data losing on refreshing ..
useEffect(()=>{
  showAllUsers();
},[])

  const formSubmit = (e, username, email, address) => {
    e.preventDefault();

    // API for insert user details..
    API.RegisterUser({ username: username, email: email, address: address });
    setUsername("");
    setEmail("");
    setAddress("");
    showAllUsers();
  };

  const showAllUsers = () => {

    // API for fetch all users details..
    API.FetchUser().then((response) => {
      setAllUsers(response.result);
    })
    setIsEdit(false);
    setSearchStatus(false);
    setSearchData("");
  };
 
  const updateData=(edited_data)=>{
    // console.log("Data after updated:",edited_data);
    // API for update data..
    API.UpdateUser(edited_data);
    showAllUsers();
  }
  const deleteUser = (userid) => {

    // API for delete user record...
    API.DeleteUser(userid);
    showAllUsers();
  }

  return (
    <>
      <div className="container-fluid mt-2 mb-3">
        <div className="row g-0">
          <div className="col-md-4 mt-3">
            <Form
              formSubmit={formSubmit}
              username={username}
              email={email}
              address={address}
              setUsername={setUsername}
              setEmail={setEmail}
              setAddress={setAddress}
              showAllUsers={showAllUsers}
            />
          </div>
          <div className="col-md-8 mt-3">
            {allUsers.length !== 0 ? (
            <Table allUsers={allUsers}
             deleteUser={deleteUser}
              isEdit={isEdit} 
              handleEditClick={handleEditClick}
              handleEditChange={handleEditChange}
              editFormData={editFormData}
              updateData={updateData}
              searchStatus={searchStatus}
              setSearchStatus={setSearchStatus}
              searchData={searchData}
              setSearchData={setSearchData}
              />
             ) : ( 
            <div className="table-messege"> 
             No data will be available currently.. 
             </div> 
             )
             }
          </div>
        </div>
      </div>
    </>
  );
}
