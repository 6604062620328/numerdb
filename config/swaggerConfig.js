import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Numer Api Documentation',
      version: '1.0.0',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
  };
  
const options = {
    swaggerDefinition,
    // Paths to files containing OpenAPI definitions
    apis: ['./routers/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerSpec, swaggerUi }