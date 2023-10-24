import app from "./App.js";
import { PORT } from "./Config";

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});