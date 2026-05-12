// This module provides a function to create a login tracker for user authentication attempts.
const createLoginTracker = (userInfo) => {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;
    if (passwordAttempt === userInfo.password && attemptCount <= 3) {
      return "Login successful";
    } else if (passwordAttempt !== userInfo.password || attemptCount > 3) {
      if (attemptCount <= 3) {
        return `Attempt ${attemptCount}: Login failed`;
      } else {
        return "Account locked due to too many failed login attempts";
      }
    }
  };
};

module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};