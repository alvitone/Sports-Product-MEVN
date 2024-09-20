const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const productRoutes = require('./src/routes/product.routes.js');  
const logger = require('./src/middleware/logger.js'); 
const cors = require('cors');

const app = express();

// CORS setup
app.use(cors({
    origin: 'http://localhost:8080', // Allow requests from your Vue app
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // Allow credentials if needed
}));

app.use(logger); 
app.use(express.json());

// Database connection
mongoose.connect("mongodb+srv://alvitone1090:cAdHZW9nN8l01bq2@cluster0.88jyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => console.log("Connected to database"))
    .catch((err) => console.error("Error connecting to database:", err));

// Product routes
app.use('/api/products', productRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack); // Log the error stack
    res.status(500).json({ message: 'Internal Server Error' });
});

// Start the server
app.listen(4000, () => {
    console.log("Server is running on port 4000");
});
