export const swaggerDocument = {
  swagger: "2.0",
  info: {
    description: "Aula2.4-MongoDbAtlas",
    version: "1.0.0",
    title: "Student",
  },
  host: "localhost:3002",
  tags: [
    {
      name: "student",
      description: "Student management",
    },
  ],
  paths: {
    "/student": {
      get: {
        tags: ["student"],
        summary: "Get existing students",
        description: "Get existing students description",
        produces: ["application/json"],
        responses: {
          200: {
            description: "Successsfull operation",
            schema: {
              type: "array",
              items: {
                $ref: "#/definitions/Student",
              },
            },
          },
          400: {
            description: "Error occurred",
          },
        },
      },
      post: {
        tags: ["student"],
        summary: "Create new students",
        description: "Create new students with the received parameters",
        consumes: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Student object",
            required: true,
            schema: {
              $ref: "#/definitions/Student",
            },
          },
        ],
        responses: {
          200: {
            description: "Successsfull operation",
          },
          400: {
            description: "Error occurred",
          },
        },
      },
      patch: {
        tags: ["student"],
        summary: "Updated student",
        description: "Updated student exists.",
        produces: ["application/json"],
        parameters: [
          {
            in: "body",
            name: "body",
            description: "Student object",
            required: true,
            schema: {
              $ref: "#/definitions/StudentUser",
            },
          },
        ],
        responses: {
          400: {
            description: "Invalid user supplied",
          },
        },
      },
    },
    "/student/{id}": {
      delete: {
        tags: ["student"],
        summary: "Delete existing student",
        description: "Delete existing students description",
        parameters: [
          {
            name: "id",
            in: "path",
            description: "ID of student",
            required: true,
            type: "integer",
            format: "int64",
          },
        ],
        responses: {
          200: {
            description: "Successsfull operation",
          },
          400: {
            description: "Error occurred",
          },
        },
      },
    },
  },
  definitions: {
    Student: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Emerson Pessoa",
        },
        subject: {
          type: "string",
          example: "Javascript",
        },
        type: {
          type: "string",
          example: "Trabalho Pratico",
        },
        value: {
          type: "Number",
          example: 100,
        },
      },
    },
    AccountUser: {
      type: "object",
      properties: {
        id: {
          type: "integer",
          example: "5f06215244bc37140423c4da",
        },
        name: {
          type: "string",
          example: "Emerson Pessoa",
        },
        subject: {
          type: "integer",
          example: "JavaScript",
        },
        value: {
          type: "Number",
          example: 100,
        },
      },
    },
  },
};
