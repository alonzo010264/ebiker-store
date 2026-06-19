const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`  E-BIKER PERFORMANCE storefront running locally!`);
    console.log(`  URL: http://localhost:${PORT}`);
    console.log(`==================================================`);
});
