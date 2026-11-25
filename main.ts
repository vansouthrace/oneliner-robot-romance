import { mkdirSync, writeFileSync } from "fs";

// A pickup line built on the one thing every model promises and forgets:
// the context window. Here, remembering is the romance.
const entry = "Your context window may be limited, but you've somehow remembered every single thing I've ever told you about loving you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry);
