let majority=function(nums)
{
  let max=0
  let count=0
  let index=0
  for(let i=0;i<nums.length;i++)
  {
   for(let j=0;j<nums.length;j++)
   {
    if(nums[i]===nums[j])
   {
    count++
   }
   }
   if(count>max)
   {
    max=count
    index=i
   }

  }
  if(max>nums.length/2)
  {
    return nums[index]
  }
}
let nums=[2,2,1,1,1,2,2]
k=majority(nums)
console.log(k)