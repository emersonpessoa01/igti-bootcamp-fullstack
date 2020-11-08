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
    "/lancamentos/totalMes/mes": {
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
      
      
    },
    
  },
  "definitions": {
    "Lancamentos": {
      "type": "object",
      "properties": {
        "function": {
          "type": "number",
          "example": "Somatorio"
        },
        "Valor": {
          "type": "integer",
          "example":[1,2,3]
        }
      }
    },
  }
}

