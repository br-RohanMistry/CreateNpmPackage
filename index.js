function name() {
    return 'CorporateLibraryLibrary';
  }
  function getCurrentTime() {
    return 'The current time as returned from the corporate library is ' + new Date().toTimeString();
  }
  module.exports = {name,getCurrentTime}; 