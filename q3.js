let duplicate=function(nums)
{
  for(let i=0;i<nums.length;i++)
  {
    nums.sort()
     if(nums[i]===nums[i+1])
    {
     delete nums[i]
    }
  }
  return nums
}
nums=[4,1,3,2,6,5,2,6,3]
k=duplicate(nums)
console.log(k)