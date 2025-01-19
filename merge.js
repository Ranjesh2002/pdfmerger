import PDFMerger from "pdf-merger-js";
// import path from "path";

export const mergepdfs = async (p1, p2, outputPath) => {
  const merger = new PDFMerger();
  try {
    await merger.add(p1);
    await merger.add(p2);
    await merger.save(outputPath);
    console.log(`Merged PDF saved to ${outputPath}`);
  } catch (error) {
    console.error("Error merging PDFs:", error);
    throw error;
  }
};
