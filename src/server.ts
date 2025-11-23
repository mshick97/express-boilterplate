import "dotenv/config";
// @ts-expect-error require the .ts extension explicitly
import app from "./app.ts";

const PORT = process.env["PORT"] || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
