var name = prompt("Enter your name");
console.log(name)
var wtclass = prompt(" Please Choose Warrior or Thief");
var wtclasslower = wtclass.toLowerCase();
console.log(wtclasslower);
if (wtclasslower === ("warrior"||"thief")){
    console.log(`Congrtulations ${name} the ${wtclasslower}`)
}
else {
    prompt("Learn to Spell scrub")
}
// while(wtclasslower !==("warrior"||"thief")){
//     prompt("Learn to spell Scrub")
var river = prompt(`you come to a river do you want to `)