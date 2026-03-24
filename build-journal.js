const fs = require("fs");
const path = require("path");

const JOURNAL_DIR = "./journal";
const OUTPUT_FILE = "./journal.json";

function buildJournal() {
  const files = fs.readdirSync(JOURNAL_DIR);

  const entries = files
    .filter((file) => file.endsWith(".json"))
    .map((file) => {
      const fullPath = path.join(JOURNAL_DIR, file);
      const content = fs.readFileSync(fullPath, "utf-8");
      return JSON.parse(content);
    });

  // Sort newest first
  entries.sort((a, b) => new Date(b.date) - new Date(a.date));

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(entries, null, 2));

  console.log(`✅ Built journal.json with ${entries.length} entries`);
}

buildJournal();
