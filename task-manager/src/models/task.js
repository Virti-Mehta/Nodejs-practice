const mongoose = require('mongoose');

// Challenge: Create a model for tasks
// Challenge: Add validation and sanitization to task
// Challenge: Refactor task model to add timestamps

const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    trim: true,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  }
}, {
  timestamps: true
})

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;