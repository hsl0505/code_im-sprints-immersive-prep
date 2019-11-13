// this is what you would do if you were one to do things the easy way:
// const parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
const parseJSON = function(json) {
  if (json === "[]") {
    return [];
  }
  if (json === "{}") {
    return {};
  }
  if (json === "true") {
    return true
  }
  if (json === "false") {
    return false
  }
  if (json === "null") {
    return null
  }

  
};

module.exports = parseJSON;
