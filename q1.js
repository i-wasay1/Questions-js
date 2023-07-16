let merge = function(nums1, m, nums2, n) {
  const len = m + n
  nums1.splice(len-n)
  for (let i = 0; i < n; i++) {
    nums1.push(nums2[i])
  }
    
  for (let j = 1; j < len; j++) {
    if (nums1[j-1] || nums1[j-1] === 0) {
      if (nums1[j] < nums1[j-1]) {
        let tmp = nums1[j-1]
        nums1[j-1] = nums1[j]
        nums1[j] = temp
        j = j-2
      }
    }
  }
  return nums1
}
num1=[1,2,3]
num2=[4,7,6]
m=3
n=3
let a=merge(num1,m,num2,n)
console.log(a)