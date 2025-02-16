
# Grouped Users API

This is a **TypeScript-based Express API** that fetches user data from [DummyJSON API](https://dummyjson.com/users) and transforms it into a structured format grouped by department. The API also includes **Swagger UI** for easy documentation and testing.

## Features

- **Fetch & Transform Data**: Retrieves users and groups them by department.
- **Data Includes**:
  - Male/Female count
  - Age range
  - Hair color summary
  - Address-user mapping
- **Swagger UI**: Auto-generated API documentation at `/docs`
- **TypeScript & Modular Design**
- **Performance Optimized**

## Getting Started

### 1. Clone the Repository

```bash
https://github.com/theinhtet00/create-data-from-api.git
cd create-data-from-api
```

### 2. Install Dependencies

```bash
npm install or yarn
```
### 3. Start the Server
```bash
npm run dev or yarn dev
```

### API Endpoints
### GET /users/group-by-department
Fetch and group users by department

Response Example:
```bash
{
  "Engineering": {
    "male": 2,
    "female": 2,
    "ageRange": "26-40",
    "hair": {
      "Brown": 1,
      "White": 1,
      "Red": 1,
      "Gray": 1
    },
    "addressUser": {
      "EmilyJohnson": "29112",
      "AlexanderJones": "86684",
      "NoahHernandez": "73696",
      "MadisonCollins": "62091"
    }
  }
}
```

### Swagger UI documentation
### URL http://localhost:3000/docs

### 🚀 Happy Coding!


