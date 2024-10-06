// In-memory timesheet store
const timesheets = {};

// Time Entry Model
class TimeEntry {
  constructor(userId) {
    this.userId = userId;
    this.entries = [];
  }

  static getTimeSheet(userId) {
    if (!timesheets[userId]) {
      timesheets[userId] = new TimeEntry(userId);
    }
    return timesheets[userId];
  }

  clockIn() {
    const lastEntry = this.entries[this.entries.length - 1];
    if (lastEntry && !lastEntry.clockOut) {
      throw new Error('Already clocked in');
    }
    this.entries.push({ clockIn: new Date(), clockOut: null });
  }

  clockOut() {
    const lastEntry = this.entries[this.entries.length - 1];
    if (!lastEntry || lastEntry.clockOut) {
      throw new Error('No active clock-in found');
    }
    lastEntry.clockOut = new Date();
  }
}

module.exports = TimeEntry;