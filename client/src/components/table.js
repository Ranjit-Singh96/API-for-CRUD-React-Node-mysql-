import React from "react";
import ReadData from "./ReadData";
import UpdateData from "./UpdateData";
// import _ from "lodash";

export default function Table(props) {
  
  const searchValue = (e) => {
    props.setSearchData(e.target.value);
    props.setSearchStatus(true);
  };

  return (
    <>
      <h4 className="text-center text-white mt-4">All users</h4>
      <table className="mb-2">
        <thead>
          <tr>
            <th>UserId</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.isEdit === false && (
            <>
              {props.allUsers.map((item) => {
                return (
                  <ReadData
                    item={item}
                    deleteUser={props.deleteUser}
                    handleEditClick={props.handleEditClick}
                  />
                );
              })}
            </>
          )}
          {props.isEdit === true && (
            <UpdateData
              updateData={props.updateData}
              editFormData={props.editFormData}
              handleEditChange={props.handleEditChange}
              handleUpdate={props.handleUpdate}
            />
          )}
        </tbody>
      </table>
      {props.isEdit === false && (
        <div className="row">
          <div className="col-md-12">
            <div className="data-search">
              <input
                type="search"
                placeholder="Enter name for search.."
                className="form-control"
                value={props.searchData}
                onChange={searchValue}
              />
            </div>
          </div>
        </div>
      )}
      {props.searchStatus === true && props.searchData !== "" && props.isEdit===false && (
        <>
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center text-white mt-4">Search User</h4>
              <table className="mb-2">
                <thead>
                  <tr>
                    <th>UserId</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {props.allUsers
                    .filter((user) =>
                      user.username.toLowerCase().includes(props.searchData)
                    )
                    .map((data) => {
                      return (
                        <tr key={data.user_id}>
                          <td>{data.user_id}</td>
                          <td>{data.username}</td>
                          <td>{data.email}</td>
                          <td>{data.address}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </>
  );
}
