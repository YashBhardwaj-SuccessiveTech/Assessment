import express from "express"
import addstudent from "../controllers/addstudent";
import studentbyid from "../controllers/studentbyid";
import deletebyid from "../controllers/deletebyid";
import updatestudent from "../controllers/updatestudent";
import getallstudents from "../controllers/getallstudents";
import addstudentmidd from "../middlewares/addstudentmidd";
import register from "../controllers/register";

const router= express.Router();


router.get("/",(req,res)=>{
    res.json({
        success:true,
        message:"server working fine"
    });
})

router.post("/register",register);
router.get("/students",getallstudents);
router.post("/students",addstudentmidd,addstudent);
router.get("/students/:id",studentbyid);
router.delete("/students/:id",deletebyid);
router.put("/student/:id",updatestudent);

export default router;