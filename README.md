# Simple ToDo App

**Simple ToDo App** is a modular to-do list application that organizes tasks using reusable components. It features a `Todo` class for rendering items and a `FormValidator` class for real-time form validation, all structured for scalability and clean code architecture.

## Functionality

### 1. Render Initial To-Dos

- Loads a predefined array of to-do items
- Each item is passed to the `Todo` class, which generates a DOM element using a template
- Items are appended to the list with correct data, checkbox state, and delete functionality

### 2. Add New To-Do

- Clicking the “Add” button opens a popup form
- User enters a task name and optional due date
- On submission:
  - A unique ID is generated using `uuidv4()`
  - A new `Todo` instance is created and rendered
  - The item is added to the list
  - The form is reset and validation cleared

### 3. Form Validation

- Real-time validation is handled by the `FormValidator` class
- Invalid inputs show error messages and disable the submit button
- Validation resets only after successful submission (not on popup close)

### 4. Delete To-Do

- Each item includes a delete button
- Clicking it removes the item from the DOM instantly

### 5. Checkbox Toggle

- Each item includes a checkbox to mark completion
- Toggling the checkbox updates the visual state (e.g., strike-through or styling)

### 6. Due Date Formatting

- If a due date is provided, it’s parsed and displayed in a readable format

## Technology

- **JavaScript (ES6+)**: Core language used for logic, DOM manipulation, and class based architecture
- **HTML5 Templates**: `<template>` elements are used to dynamically clone and render to-do items
- **CSS**: Handles layout, styling, and visual feedback for form validation and task states
- **UUID (via CDN)**: Imported from `https://jspm.dev/uuid` to generate unique IDs for each to-do item
- **Modular File Structure**: Code is organized into separate files: `Todo.js`, `FormValidator.js`, and `index.js` for clarity and maintainability

## Deployment

This project is deployed on GitHub Pages:  
 [Simple ToDo App](https://skipmenow.github.io/se_project_todo-app/)
