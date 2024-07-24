// function one(){
//   return 1;
// }
// function two(){
//   return one() + one();
// }
// function three(){
//   let ans =  two() + one();
//   console.log(ans);
// }
// three();
let url = "https://catfact.ninja/fact";

fetch(url)
.then((res)=>{
  console.log(res);
  return  res.json();
  // console.log(res.json);
})
.then((data)=>{
  console.log(data);
})
.catch((err)=>{
  console.log(err);
});