import { baseUrl } from "./ApiBaseUrl";
// import Axios from "axios";

export const API = {
  RegisterUser: async (jsonbody) => {
    try{
      const response = await fetch(baseUrl + "add-user", {
        method: "post",
        body: JSON.stringify(jsonbody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch(error){
      return error;
    }
    
  },

  FetchUser: async () => {
    try{
      const response=await fetch(baseUrl + "all-users", {
        method: "get",
      });
      const data= await response.json();
      return data;
    } catch(error){
      return error;
    }   
  },

  UpdateUser: async (editdata) => {
    try{
      const response= await fetch(baseUrl + "update-user/" + editdata.UserId,
      {
        method:"put",
        body:JSON.stringify(editdata),
        headers:{
          "Content-Type":"application/json; charset=utf-8",
        },
      });
      const data= await response.json();
      // console.log(data);
      return data;
    } catch(error){
      return error;
    }
  },
  DeleteUser: async (userid) => {
    try{
      const response= await fetch(baseUrl + "delete-user/" + userid, {
        method: "DELETE",
      });
      if(response.status===200){
        return response.message
      }
    } catch(error){
      return error;
    }
    // Api call using axios....
    // try{
    //   let result = await Axios.delete(baseUrl + "delete-user/"+userid)
    //   console.log("Api response: ",result);
    //   return result;
    // }
    // catch(error){
    //   console.log("Something went wrong:",error)
    // }
  },
};
