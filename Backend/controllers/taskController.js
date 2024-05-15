// taskController.js
const db = require('../config/db');

// Controller methods
const taskController = {
  // Get all tasks
  getAllTasks: (req, res) => {
    db.query('SELECT * FROM tasks', (error, results) => {
      if (error) {
        console.error('Error fetching tasks:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        res.json(results);
      }
    });
  },
  // Get task by ID
  getTaskById: (req, res) => {
    const taskId = req.params.id;
    db.query('SELECT * FROM tasks WHERE id = ?', [taskId], (error, results) => {
      if (error) {
        console.error('Error fetching task:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.length === 0) {
        res.status(404).json({ message: 'Task not found' });
      } else {
        res.json(results[0]);
      }
    });
  },
  // Create a new task
  createTask: (req, res) => {
    const newTask = req.body;
    db.query('INSERT INTO tasks SET ?', [newTask], (error, results) => {
      if (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else {
        newTask.id = results.insertId;
        res.status(201).json(newTask);
      }
    });
  },
  // Update task by ID
  updateTaskById: (req, res) => {
    const taskId = req.params.id;
    const updatedTask = req.body;
    db.query('UPDATE tasks SET ? WHERE id = ?', [updatedTask, taskId], (error, results) => {
      if (error) {
        console.error('Error updating task:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Task not found' });
      } else {
        res.json(updatedTask);
      }
    });
  },
  // Delete task by ID
  deleteTaskById: (req, res) => {
    const taskId = req.params.id;
    db.query('DELETE FROM tasks WHERE id = ?', [taskId], (error, results) => {
      if (error) {
        console.error('Error deleting task:', error);
        res.status(500).json({ message: 'Internal server error' });
      } else if (results.affectedRows === 0) {
        res.status(404).json({ message: 'Task not found' });
      } else {
        res.json({ message: 'Task deleted successfully' });
      }
    });
  }
};

module.exports = taskController;
