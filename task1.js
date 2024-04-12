let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};
//convert to stingify
let a = JSON.stringify(obj1,Object.keys(obj1).sort());
let b = JSON.stringify(obj2,Object.keys(obj2).sort());
/*console.log(a)
console.log(b)*/
if(a===b)
{
    console.log("two json are equal")
}
else
{
    console.log("two jsons are not equal")
}