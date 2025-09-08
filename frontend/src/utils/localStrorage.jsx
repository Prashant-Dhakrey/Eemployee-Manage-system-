
const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Fix login bug",
        "description": "Resolve the issue preventing users from logging in",
        "date": "2025-09-05",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Write unit tests",
        "description": "Add unit tests for authentication module",
        "date": "2025-09-06",
        "category": "Testing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "title": "Update README",
        "description": "Improve project documentation",
        "date": "2025-09-07",
        "category": "Documentation",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Vihaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Design homepage",
        "description": "Create wireframe and design mockups",
        "date": "2025-09-05",
        "category": "Design",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Client meeting",
        "description": "Discuss project requirements",
        "date": "2025-09-06",
        "category": "Communication",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 2,
      "failed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Ishaan",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Database backup",
        "description": "Perform full DB backup",
        "date": "2025-09-05",
        "category": "Maintenance",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Optimize queries",
        "description": "Improve performance of slow SQL queries",
        "date": "2025-09-06",
        "category": "Database",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    }
  },
  {
    "id": 4,
    "firstName": "Advait",
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Test payment gateway",
        "description": "Ensure PayPal and Stripe work correctly",
        "date": "2025-09-05",
        "category": "Testing",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "Fix CSS bugs",
        "description": "Resolve styling issues on mobile",
        "date": "2025-09-07",
        "category": "UI/UX",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 3,
      "failed": 1
    }
  },
  {
    "id": 5,
    "firstName": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Write blog post",
        "description": "Publish weekly blog post on company site",
        "date": "2025-09-05",
        "category": "Content",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "title": "SEO optimization",
        "description": "Improve Google ranking for main keywords",
        "date": "2025-09-06",
        "category": "Marketing",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ],
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 0,
      "failed": 1
    }
  }
]

const admin = [
  {
    "id": 101,
    "firstName": "Rohan",
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  return { employees, admin }
}
