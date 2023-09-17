
//first solution
const findElements = (nums, target) => {
  const elementsSum = {};
  for (let i = 0; i < nums.length; i++) {
    if (elementsSum != null) {
      let subValue = target - nums[i];

      if (subValue in elementsSum) {
        return [elementsSum[subValue], i];
      }
      if (!elementsSum.hasOwnProperty(elementsSum)) {
        elementsSum[nums[i]] = i;
      }
    } else {
      elementsSum[nums[i]] = i;
    }
  }
  return null;
};



//another solution
const findSumIndexes = (nums, target) => {
  var answer = [];
  for (let i = 0; i < nums.length; i++) {
    let subValue = target - nums[i];

    if (nums.includes(subValue)) {
      answer.push(i);
      answer.push(nums.indexOf(subValue));
      return answer;
    } else if (nums.includes(-1 * subValue)) {
      answer.push(i);
      answer.push(nums.indexOf(-1 * subValue));

      return answer;
    }
  }

  if (answer.length == 0) {
    return null;
  }
};


//first method
console.log(findElements([2,7,11,15], 9));

//second method
console.log(findSumIndexes([2,7,11,15], 9));

