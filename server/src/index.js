// Application entry, setting up server
console.log("Hello")
import app from './app'; // The express app we just created

console.log("Test")

const port = parseInt(process.env.PORT, 10) || 5555;
app.set('port', port);

// 0.0.0.0 makes it available on your local network
// app.listen(port, '0.0.0.0');
app.listen(port);
