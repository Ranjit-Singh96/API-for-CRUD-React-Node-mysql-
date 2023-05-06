import React from "react";

export default function ReadData(props) {
  return (
    <tr key={props.item.user_id}>
      <td>{props.item.user_id}</td>
      <td>{props.item.username}</td>
      <td>{props.item.email}</td>
      <td>{props.item.address}</td>
      <td>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => props.handleEditClick(props.item)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-primary btn-sm mx-1"
          onClick={() => props.deleteUser(props.item.user_id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
