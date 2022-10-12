function sum(nums) {
  let firstNum = Number(nums[0])
  let lastNum = Number(nums.pop())
  let sum = firstNum + lastNum
  console.log(sum);

}

sum(['20', '30', '40'])