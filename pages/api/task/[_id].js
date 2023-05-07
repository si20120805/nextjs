import { checkAuth } from "../../../utils/features";
import { connecgtDB } from "../../../utils/features";
import { Task } from "../../../models/Task";
import { errorHandler } from "../../../features/error";

const handler = async (req, res) => {
  const user = await checkAuth(req);
  // ---only specific user can be login and update the data

  if (!user) errorHandler(res, 400, "Please Login");
  //Herew we set the Folder like _id so that the req.query output will look like {_id:84u5u8345u3}
  // so that we can use the findById method and get the task id
  const TaskId = req.query;
  await connecgtDB();
  const task = await Task.findById(TaskId);
  if (!task) return errorHandler(res, 400, "Could'nt Find any Task");

  if (req.method === "PUT") {
    

    task.isCompleted = !task.isCompleted;

    await task.save();

    res.json({
      msg: "Task updated Sucessful",  
      sucess:true  
    });
  } 
  else if (req.method === "DELETE") {
    await task.deleteOne();

    res.json({
      msg: "sucessful Delete the Task",
      sucess:true
    });
  }
  else{
    res.json({msg:"Only Put and Delete method are allowed"})
  }
};

export default handler;
