import React from "react";

export default function Form(props) {
  return (
    <>
      <h3 className="login">LOGIN</h3>
      <form
        className="form"
        onSubmit={(e) =>
          props.formSubmit(e, props.username, props.email, props.address)
        }
      >
        <div className="m-3">
          <label htmlFor="username" className="form-label">
            User Name:
          </label>
          <input
            type="text"
            className="form-control "
            value={props.username}
            name="username"
            onChange={(e) => props.setUsername(e.target.value)}
            required
          />
        </div>
        <div className="m-3">
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            className="form-control "
            value={props.email}
            name="email"
            onChange={(e) => props.setEmail(e.target.value)}
            required
          />
        </div>
        <div className="m-3">
          <label htmlFor="address" className="form-label">
            Address:
          </label>
          <input
            type="text"
            className="form-control"
            value={props.address}
            name="address"
            onChange={(e) => props.setAddress(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-3 px-4">
          SignUp
        </button>
      </form>
      <button
        type="button"
        onClick={props.showAllUsers}
        className="btn btn-primary m-3"
      >
        Show Users List
      </button>
      {/* <h3>{props.message}</h3> */}
    </>
  );
}
