const fs = require('fs');
const path = require('path');
const swaggerSpec = require('../swagger.config');

// Create output directory
const outputDir = path.join(__dirname, '../../../docs/static/api-docs');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Write OpenAPI spec
fs.writeFileSync(
  path.join(outputDir, 'openapi.json'),
  JSON.stringify(swaggerSpec, null, 2)
);

// Create simple HTML file that loads Swagger UI
const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <title>TubeVault API Documentation</title>
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist@4.15.5/swagger-ui.css" />
</head>
<body>
  <div id="swagger-ui"></div>
  <script src="https://unpkg.com/swagger-ui-dist@4.15.5/swagger-ui-bundle.js"></script>
  <script>
    SwaggerUIBundle({
      url: './openapi.json',
      dom_id: '#swagger-ui',
      presets: [
        SwaggerUIBundle.presets.apis,
        SwaggerUIBundle.presets.standalone
      ]
    });
  </script>
</body>
</html>
`;

fs.writeFileSync(path.join(outputDir, 'index.html'), htmlContent);

console.log('API documentation built successfully!');
console.log(`Output: ${outputDir}`);
