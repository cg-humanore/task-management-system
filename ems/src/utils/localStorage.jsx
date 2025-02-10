
const employees = [
    {
        "id": 1,
        "firstName":"emp1",
        "email": "humanore0@example.com",
        "password": "123",
        "taskCounts":{
            "active":2,
            "newTask":1,
            "completed":1,
            "failed":1
        },
        "tasks": [
            {
                "title": "Complete Report",
                "description": "Prepare the monthly sales report.",
                "date": "2025-02-05",
                "category": "Work",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Team Meeting",
                "description": "Attend the team sync-up meeting.",
                "date": "2025-02-06",
                "category": "Meetings",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "firstName":"emp2",
        "email": "humanore1@example.com",
        "password": "123",
        "taskCounts":{
            "active":2,
            "newTask":1,
            "completed":1,
            "failed":0
        },
        "tasks": [
            {
                "title": "Client Follow-up",
                "description": "Call the client regarding project updates.",
                "date": "2025-02-07",
                "category": "Client Work",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Submit Timesheet",
                "description": "Submit the weekly timesheet.",
                "date": "2025-02-08",
                "category": "HR",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review the new feature code.",
                "date": "2025-02-09",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 3,
        "firstName":"emp3",
        "email": "humanore2@example.com",
        "password": "123",
        "taskCounts":{
            "active":2,
            "newTask":1,
            "completed":1,
            "failed":0
        },
        "tasks": [
            {
                "title": "Client Follow-up",
                "description": "Call the client regarding project updates.",
                "date": "2025-02-07",
                "category": "Client Work",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Submit Timesheet",
                "description": "Submit the weekly timesheet.",
                "date": "2025-02-08",
                "category": "HR",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review the new feature code.",
                "date": "2025-02-09",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "firstName":"emp4",
        "email": "humanore3@example.com",
        "password": "123",
        "taskCounts":{
            "active":2,
            "newTask":1,
            "completed":1,
            "failed":0
        },
        "tasks": [
            {
                "title": "Client Follow-up",
                "description": "Call the client regarding project updates.",
                "date": "2025-02-07",
                "category": "Client Work",
                "active": true,
                "newTask": false,
                "completed": false,
                "failed": false
            },
            {
                "title": "Submit Timesheet",
                "description": "Submit the weekly timesheet.",
                "date": "2025-02-08",
                "category": "HR",
                "active": false,
                "newTask": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Code Review",
                "description": "Review the new feature code.",
                "date": "2025-02-09",
                "category": "Development",
                "active": true,
                "newTask": false,
                "completed": true,
                "failed": false
            }
        ]
    }
];


const admin=[
    {
        "id": 1,
        "email": "chaitanyaadmin@example.com",
        "password": "123"
    }
]

export const setLocalStorage=()=>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalStorage=()=>{
    const employeeData=JSON.parse(localStorage.getItem('employees'))
    const adminData=JSON.parse(localStorage.getItem('admin'))
    
    return {employeeData, adminData}
}
