import express from "express";
import addSocietyInfo from "../controllers/society/addSocietyInfo.js";
import updateSocietyInfo from "../controllers/society/updateSocietyInfo.js";
import { deleteTeam } from "../controllers/society/DeleteInformation/deleteTeamInfo.js";
import { deleteAchievement } from "../controllers/society/DeleteInformation/deleteAchievInfo.js";
import { deleteAlumni } from "../controllers/society/DeleteInformation/deleteAlumniInfo.js";
import { deleteAnnouncement } from "../controllers/society/DeleteInformation/deleteAnnouceInfo.js";
import { deleteFAQ } from "../controllers/society/DeleteInformation/deleteFAQInfo.js";
import { deleteGallery } from "../controllers/society/DeleteInformation/deleteGalleryInfo.js";

import { addTeam } from "../controllers/society/AddInformation/addTeamInfo.js";
import { addAchievement } from "../controllers/society/AddInformation/addAchievInfo.js";
import { addAlumni } from "../controllers/society/AddInformation/addAlumniInfo.js";
import { addAnnouncement } from "../controllers/society/AddInformation/addAnnouceInfo.js";
import { addFAQ } from "../controllers/society/AddInformation/addFAQInfo.js";
import { addGallery } from "../controllers/society/AddInformation/addGalleryInfo.js";

import { updateTeam } from "../controllers/society/UpdateInformation/updateTeamInfo.js";
import { updateAchievement } from "../controllers/society/UpdateInformation/updateAchievInfo.js";
import { updateAlumni } from "../controllers/society/UpdateInformation/updateAlumniInfo.js";
import { updateAnnouncement } from "../controllers/society/UpdateInformation/updateAnnouceInfo.js";
import { updateFAQ } from "../controllers/society/UpdateInformation/updateFAQInfo.js";
import { updateGallery } from "../controllers/society/UpdateInformation/updateGalleryInfo.js";
import multer from 'multer';

const upload = multer({ dest: 'uploads/', limits: { fileSize: 5 * 1024 * 1024 }});
const router = express.Router();
try {
  router.post("/:societyId", upload.single('imageUrl'), async (req, res) => {
  const  table = req.headers['table-name'];
  console.log("Form Fields:", req.body);  // Should show form fields like `id`, `question`, `answer`
  switch (table) {
    case "team":
      return await addTeam(req, res);
    case "gallery":
      return await addGallery(req, res);
    case "announcement":
      return await addAnnouncement(req, res);
    case "achievement":
      return await addAchievement(req, res);
    case "faq":
      return await addFAQ(req, res);
    case "alumni":
      return await addAlumni(req, res);
    default:
      return res.status(400).json({ error: "Invalid table specified" });
    }
  });
} catch (error) {
  console.log(error)
}

router.delete("/:societyId", async (req, res) => {
  const table = req.headers['table-name'];

  try {
    switch (table) {
      case "team":
        return await deleteTeam(req, res);
      case "gallery":
        return await deleteGallery(req, res);
      case "announcement":
        return await deleteAnnouncement(req, res);
      case "achievement":
        return await deleteAchievement(req, res);
      case "faq":
        return await deleteFAQ(req, res);
      case "alumni":
        return await deleteAlumni(req, res);
      case "student":
        return await deleteStudent(req, res);
      default:
        return res.status(400).json({ error: "Invalid table specified" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to delete", details: error.message });
  }
});

router.put("/:societyId", upload.single('imageUrl'), async (req, res) => {
  const  table = req.headers['table-name'];
  try {
    switch (table) {
      case "team":
        return await updateTeam(req, res);
      case "gallery":
        return await updateGallery(req, res);
      case "announcement":
        return await updateAnnouncement(req, res);
      case "achievement":
        return await updateAchievement(req, res);
      case "faq":
        return await updateFAQ(req, res);
      case "alumni":
        return await updateAlumni(req, res);
      case "student":
        return await updateStudent(req, res);
      default:
        return res.status(400).json({ error: "Invalid table specified" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Failed to update", details: error.message });
  }
});

export default router;
