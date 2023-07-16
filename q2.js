let remove=function(nums,val)
{
 
  for(let i=0;i<nums.length;i++)
  {
   if(nums[i]===val)
   {
    val=nums.splice(i,0)
    delete nums[i]
   }
  }
  return nums
}
nums=[1,2,4,3,5,6]
val=4
let k=remove(nums,val)
console.log(k)
