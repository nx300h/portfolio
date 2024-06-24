import app from "./app";
import sequelize from "./config/database";

const PORT = process.env.PORT || 3000; // Change 3001 to any available port number

sequelize.sync().then(() => {
  app.listen(PORT, () => {
  console.log(`Server is running on htp://localhost:${PORT}`);
});
});