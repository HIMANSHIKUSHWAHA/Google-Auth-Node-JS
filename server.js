const express = require('express');
const passport = require('./config/passport'); // Assuming passport.js is in the root directory
const authRoutes = require('./routes/authRoutes'); // Assuming authRoutes.js is in a 'routes' directory

const app = express();

// Set up view engine, static files, and sessions...

// Use passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use authRoutes
app.use('/auth', authRoutes);

// Start server...
