// this is what you would do if you liked things to be easy:
// const stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

const stringifyJSON = obj => {
  if (typeof obj === "string") {
    return '"' + obj + '"'; // `"${obj}"` , 단순 string!!
  }

  if (Array.isArray(obj)) {
    // 배열 입력 받을 시,
    if (obj.length === 0) {
      // 빈배열 일 경우
      return "[" + "]";
    } else {
      // 빈배열 아닐 경우
      let arr = [];
      for (let i = 0; i < obj.length; i = i + 1) {
        if (obj[i] === undefined || typeof obj[i] === "function") {
          // 배열에서 undefined와 function은 null 문자열로 표시된다
          arr.push("null");
        } else {
          arr.push(stringifyJSON(obj[i])); // 배열 안에 element를 JSON으로 변환해서 배열에 넣음
        } // 즉, 앞서 했던 단순 type들 (number,string,null,boolean)을 해서 넣는 재귀
      }
      return "[" + arr + "]"; // 배열 앞 뒤로 [] 표시를 붙여서 강제로 문자열 형태로 변환
    }
  }

  if (typeof obj === "object" && obj !== null) {
    // 객체 입력 받을 시, null type 검사는 'object'로 나온다!
    let keysOfObj = Object.keys(obj);
    if (keysOfObj.length === 0) {
      // 빈 객체 일 경우
      return "{" + "}";
    } else {
      // 빈 객체가 아닐 경우
      let result = [];
      let keysToJson = [];
      let valsToJson = [];

      for (let key in obj) {
        if (obj[key] === undefined || typeof obj[key] === "function") {
          // 객체에서는 undefined나 function은 skip
        } else {
          keysToJson.push(stringifyJSON(key));
          valsToJson.push(stringifyJSON(obj[key])); // 객체의 key와 value를 각 각 JSON화 (단순 type들)해서 각각 넣음
        }
      }

      for (let i = 0; i < keysToJson.length; i = i + 1) {
        result.push(`${keysToJson[i]}:${valsToJson[i]}`); // 마치 객체안의 키값 페어 형태로 배열안에 넣고
      }

      return "{" + result + "}"; // 배열 앞뒤에 강제로 객체표시를 넣어서 문자열 형태로
    }
  }

  return "" + obj; // `${obj}` , 단순 number,null,boolean!!
};

module.exports = stringifyJSON;
