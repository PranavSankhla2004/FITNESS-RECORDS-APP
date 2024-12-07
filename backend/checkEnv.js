require('dotenv').config(); // Load environment variables from .env file

// Check if MONGO_URI is loaded
if (process.env.MONGO_URI) {
    console.log("MONGO_URI is set:", process.env.MONGO_URI);
} else {
    console.log("MONGO_URI is not set. Check your .env file.");
}
