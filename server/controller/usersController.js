const con = require("../config");

const InsertData = async (req, res) => {
  const data = req.body;
  con.query("Insert into users_data set ?", data, (err, result) => {
    if (err) {
      console.log("error:" + err);
    } else {
      res.json({
        status: "true",
        message: "Data added successfully",
        Data: result,
      });
    }
  });
};

const FetchData = async (req, res) => {
  con.query("select * from users_data", (err, result) => {
    if (err) {
      console.log("Error: ", err);
    } else {
      res.json({ result });
    }
  });
};

const UpdateData = async (req, res) => {
 const data=[req.body.username, req.body.email, req.body.address, req.body.UserId]
  // console.log(req.body.UserId);
  con.query(
    "Update users_data set username=?,email=?, address=? where user_id =?",data,
    (err, result) => {
      if (err) {
        console.log("database error:" + err);
      } else {
        res.json({
          status: "true",
          message: "Data updated successfully",
          Data: result
        });
        // console.log("Rows affected:",result.affectedRows)
      }
    }
  );
};

const DeleteUser = async (req, res) => {
  const id = req.params.id;
  con.query("Delete from users_data where user_id=" + id, (err, result) => {
    if (err) {
      res.json({
        status: false,
        message: "Some error occured",
        Data: [],
      });
    } else {
      res.json({ result });
    }
  });
};
module.exports = { InsertData, FetchData, DeleteUser, UpdateData };
