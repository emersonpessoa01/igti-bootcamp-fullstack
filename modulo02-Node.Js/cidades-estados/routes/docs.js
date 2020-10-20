export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "description": "Desafio1 API description",
    "version": "1.0.0",
    "title": "Desafio1 API"
  },
  "host": "localhost:3000",
  "tags": [
    {
      "name": "grade",
      "description": "Grade management"
    }
  ],
  "paths": {
    "/grade": {
      "get": {
        "tags": [
          "grade"
        ],
        "summary": "Get existing grades",
        "description": "Get existing grades description",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Successsfull operation",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Grade"
              }
            }
          },
          "400": {
            "description": "Error occurred"
          }
        }
      },
      "post": {
        "tags": [
          "grade"
        ],
        "summary": "Create new grades",
        "description": "Create new grades with the received parameters",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Grade object",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Grade"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "Successsfull operation"
          },
          "400": {
            "description": "Error occurred"
          }
        }
      },
      "put": {
        "tags": [
          "grade"
        ],
        "summary": "Updated grade",
        "description": "Updated grade exists.",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Grade object",
            "required": true,
            "schema": {
              "$ref": "#/definitions/GradeUser"
            }
          }
        ],
        "responses": {
          "400": {
            "description": "Invalid user supplied"
          }
        }
      }
    },
    "/grade/{id}": {
      "get": {
        "tags": [
          "grade"
        ],
        "summary": "Get existing grades",
        "description": "Get existing grades description",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of grade",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successsfull operation",
            "schema": {
              "$ref": "#/definitions/Grade"
            }
          },
          "400": {
            "description": "Error occurred"
          }
        }
      },
      "delete": {
        "tags": [
          "grade"
        ],
        "summary": "Delete existing grades",
        "description": "Delete existing grades description",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of grade",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successsfull operation"
          },
          "400": {
            "description": "Error occurred"
          }
        }
      }
    }
  },
  "definitions": {
    "Grade": {
      "type": "object",
      "properties": {
        "student": {
          "type": "string",
          "example": "Loiane Groner"
        },
        "subject": {
          "type": "integer",
          "example": "01 - JavaScript"
        },
        "type":{
          "type": "integer",
          "example": "Fórum",
        },
        "value":{
          "type": "integer",
          "example": 15,
        },

      }
    },
    "GradeUser": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "example": 1
        },
        "student": {
          "type": "string",
          "example": "Loiane Groner"
        },
        "subject": {
          "type": "integer",
          "example": "01 - JavaScript"
        },
        "type":{
          "type": "integer",
          "example": "Fórum",
        },
        "value":{
          "type": "integer",
          "example": 15,
        },
      }
    }
  }
}

