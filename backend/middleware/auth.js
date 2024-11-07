const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Extract the token from the Authorization header
    const token = req.header('Authorization')?.split(' ')[1]; // Expecting format: 'Bearer <token>'
    
    // If no token is provided, return an error
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        // Assign user ID based on their role
        if (decoded.role === 'admin') {
            req.admin = decoded.id; // Store admin ID in request object
        } else if (decoded.role === 'teacher') {
            req.teacher = decoded.id; // Store teacher ID in request object
        } else {
            return res.status(403).json({ message: 'Access denied. Invalid role.' });
        }

        // Proceed to the next middleware or route handler
        next();
    } catch (err) {
        // Handle token verification error
        res.status(401).json({ message: 'Token is not valid' });
    }
};
