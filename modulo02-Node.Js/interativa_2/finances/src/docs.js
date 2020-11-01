export const swaggerDocument = {
  "swagger": "2.0",
  "info": {
    "description": "Finances description",
    "version": "1.0.0",
    "title": "Finances API"
  },
  "host": "localhost:3015",
  "tags": [
    {
      "name": "lancamentos",
      "description": "Lancamentos management"
    }
  ],
  "paths": {
    "/lancamentos": {
      "get": {
        "tags": [
          "lancamentos"
        ],
        "summary": "Get existing lancamentos",
        "description": "Get existing lancamentos description",
        "produces": [
          "application/json"
        ],
        "responses": {
          "200": {
            "description": "Successsfull operation",
            "schema": {
              "type": "array",
              "items": {
                "$ref": "#/definitions/Lancamentos"
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
          "lancamentos"
        ],
        "summary": "Create new lancamentos",
        "description": "Create new lancamentos with the received parameters",
        "consumes": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Lancamentos object",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Lancamentos"
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
          "lancamentos"
        ],
        "summary": "Updated lancamentos",
        "description": "Updated lancamentos exists.",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "lancamentos object",
            "required": true,
            "schema": {
              "$ref": "#/definitions/lancamentosUser"
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
    "/lancamentos/{id}": {
      "get": {
        "tags": [
          "lancamentos"
        ],
        "summary": "Get existing lancamentos",
        "description": "Get existing lancamentos description",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of lancamentos",
            "required": true,
            "type": "integer",
            "format": "int64"
          }
        ],
        "responses": {
          "200": {
            "description": "Successsfull operation",
            "schema": {
              "$ref": "#/definitions/Lancamentos"
            }
          },
          "400": {
            "description": "Error occurred"
          }
        }
      },
      "delete": {
        "tags": [
          "lancamentos"
        ],
        "summary": "Delete existing lancamentos",
        "description": "Delete existing lancamentos description",
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "description": "ID of lancamentos",
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
    "Lancamentos": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "example": "Emerson Pessoa"
        },
        "balance": {
          "type": "integer",
          "example": 100
        }
      }
    },
    "LancamentosUser": {
      "type": "object",
      "properties": {
        "id": {
          "type": "integer",
          "example": 1
        },
        "name": {
          "type": "string",
          "example": "Emerson Pessoa"
        },
        "balance": {
          "type": "integer",
          "example": 100
        }
      }
    }
  }
}

