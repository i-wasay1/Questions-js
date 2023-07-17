let alternatestring=function(word1,word2)
{
  x=word1.length+word2.length
  let merge=""
  for(let i=0;i<x;i++)
  {
    if(i<word1.length)
    {
      merge=merge+word1[i]
    }
    if(i<word2.length)
    {
      merge=merge+word2[i]
    }
  }
  return merge
}
word1="abc"
word2="pqr"
k=alternatestring(word1,word2)
console.log(k)