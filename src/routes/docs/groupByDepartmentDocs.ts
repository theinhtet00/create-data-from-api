// src/swagger.ts
import { OpenAPIV3 } from "openapi-types";

const swaggerDocument: OpenAPIV3.Document = {
  openapi: "3.0.0",
  info: {
    title: "Grouped Users API",
    version: "1.0.0",
    description: "API documentation for grouping users by department.",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Development server",
    },
  ],
  components: {
    schemas: {
      // Schema for a single department's data
      DepartmentData: {
        type: "object",
        properties: {
          male: {
            type: "integer",
            description: "Count of male users",
            example: 2,
          },
          female: {
            type: "integer",
            description: "Count of female users",
            example: 2,
          },
          ageRange: {
            type: "string",
            description: "Age range of users in the department",
            example: "26-40",
          },
          hair: {
            type: "object",
            description: "Summary of hair color counts",
            additionalProperties: {
              type: "integer",
            },
            example: {
              Brown: 1,
              White: 1,
              Red: 1,
              Gray: 1,
            },
          },
          addressUser: {
            type: "object",
            description:
              "Mapping of user full name (firstName + lastName) to postal code",
            additionalProperties: {
              type: "string",
            },
            example: {
              EmilyJohnson: "29112",
              AlexanderJones: "86684",
              NoahHernandez: "73696",
              MadisonCollins: "62091",
            },
          },
        },
      },
      // Schema for the entire response object where keys are departments
      GroupedUsersResponse: {
        type: "object",
        additionalProperties: {
          $ref: "#/components/schemas/DepartmentData",
        },
        example: {
          Engineering: {
            male: 2,
            female: 2,
            ageRange: "26-40",
            hair: {
              Brown: 1,
              White: 1,
              Red: 1,
              Gray: 1,
            },
            addressUser: {
              EmilyJohnson: "29112",
              AlexanderJones: "86684",
              NoahHernandez: "73696",
              MadisonCollins: "62091",
            },
          },
        },
      },
    },
  },
  paths: {
    "/users/grouped": {
      get: {
        summary: "Retrieve grouped users by department",
        description:
          "Retrieve users grouped by department including gender counts, age range, hair color counts, and address mappings.",
        responses: {
          "200": {
            description: "A grouped users object.",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/GroupedUsersResponse",
                },
              },
            },
          },
          "500": {
            description: "Internal server error",
          },
        },
      },
    },
  },
};

export default swaggerDocument;
