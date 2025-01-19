import express from "express";
import path from "path";
import multer from "multer";
import { fileURLToPath } from "url";
import { mergepdfs } from "./merge.js";

const upload = multer({ dest: "uploads/" });
const app = express();
app.use("/static", express.static("public"));
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "templates/index.html"));
});

app.post("/merge", upload.array("pdfs", 2), async (req, res, next) => {
  try {
    console.log(req.files);

    // Generate a unique file name using the current timestamp
    let d = Date.now(); // Current time in milliseconds
    const outputFileName = `${d}.pdf`; // Example: 1668007839615.pdf
    const outputFilePath = path.join(__dirname, "public", outputFileName);

    // Call mergepdfs with correct parameters
    await mergepdfs(
      path.join(__dirname, req.files[0].path),
      path.join(__dirname, req.files[1].path),
      outputFilePath
    );

    // Redirect to the dynamically named file
    res.redirect(`http://localhost:3000/static/${outputFileName}`);
  } catch (error) {
    console.error("Error in merging PDFs:", error);
    res.status(500).send("An error occurred while merging the PDFs.");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
