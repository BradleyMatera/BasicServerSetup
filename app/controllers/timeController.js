const TimeEntry = require('../models/timeEntryModel');

const clockIn = (req, res) => {
  const userId = req.user.id;

  try {
    const timesheet = TimeEntry.getTimeSheet(userId);
    timesheet.clockIn();
    res
      .status(200)
      .json({ message: 'Clocked in at ' + new Date().toISOString() });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const clockOut = (req, res) => {
  const userId = req.user.id;

  try {
    const timesheet = TimeEntry.getTimeSheet(userId);
    timesheet.clockOut();
    res
      .status(200)
      .json({ message: 'Clocked out at ' + new Date().toISOString() });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getTimesheet = (req, res) => {
  const userId = req.user.id;

  const timesheet = TimeEntry.getTimeSheet(userId);

  res.status(200).json(timesheet.entries);
};

module.exports = {
  clockIn,
  clockOut,
  getTimesheet,
};