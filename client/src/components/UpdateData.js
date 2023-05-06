import React from "react";

export default function UpdateData(props) {
  return (
    <tr>
      <td>{props.editFormData.UserId}</td>
      <td>
        <input
          type="text"
          className="form-control"
          name="username"
          value={props.editFormData.username}
          onChange={props.handleEditChange}
          required
        />
      </td>
      <td>
        <input
          type="email"
          className="form-control"
          name="email"
          value={props.editFormData.email}
          onChange={props.handleEditChange}
          required
        />
      </td>
      <td>
        <input
          type="text"
          className="form-control"
          name="address"
          value={props.editFormData.address}
          onChange={props.handleEditChange}
          required
        />
      </td>
      <td>
        <button
          type="button"
          className="btn btn-primary btn-sm mb-sm-1"
          onClick={()=>props.updateData(props.editFormData)}
        >
          Update
        </button>
      </td>
    </tr>
  );
}
