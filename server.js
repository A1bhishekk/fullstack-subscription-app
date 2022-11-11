import app from './app.js';
import {connectDB} from "./config/database.js";
const PORT= 4000 || process.env.PORT;

connectDB();

app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`);
})