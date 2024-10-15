import express from "express";
import addSocietyInfo from "../controllers/society/addSocietyInfo.js";
import updateSocietyInfo from "../controllers/society/updateSocietyInfo.js";
import { deleteTeam } from "../controllers/society/DeleteInformation/deleteTeamInfo.js";
import { deleteAchievement } from "../controllers/society/DeleteInformation/deleteAchievInfo.js";
import { deleteAlumni } from "../controllers/society/DeleteInformation/deleteAlumniInfo.js";
import { deleteAnnouncement } from "../controllers/society/DeleteInformation/deleteAnnouceInfo.js";
import { deleteFAQ } from "../controllers/society/DeleteInformation/deleteFAQInfo.js";
import { deleteGallery } from "../controllers/society/DeleteInformation/deleteGalleryInfo.js";

const router = express.Router();

router.delete("/:societyId", (req, res) => {
  const { table } = req.query;

  switch (table) {
    case "team":
      return deleteTeam(req, res);
    case "gallery":
      return deleteGallery(req, res);
    case "announcement":
      return deleteAnnouncement(req, res);
    case "achievement":
      return deleteAchievement(req, res);
    case "faq":
      return deleteFAQ(req, res);
    case "alumni":
      return deleteAlumni(req, res);
    case "student": 
      return deleteStudent(req, res);
    default:
      return res.status(400).json({ error: "Invalid table specified" });
  }
});
router.post("/:societyId", addSocietyInfo);
router.put("/:societyId", updateSocietyInfo);

export default router;
