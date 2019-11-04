"use strict";

//------------String---------------
let name = "Roby Afrizal Palmendha";
let email = "robyafrizal86@gmail.com";
let nextJob = "Full Stack Javascript";
let nextSkill = "ReactJS and NodeJS";
const biodata = name + "\n" + email + "\n" + nextJob;

console.log("Hello all..");
console.warn("Let Me Introduce my self");
console.error("Any question for me!");

console.info(biodata);
alert(biodata);

const myDream = `I want to master in ${nextSkill}`;
console.log(myDream);
alert(myDream + ` \n I hope as fast as to be master in ${nextJob}`);

//------------Number---------------
const gaji = 10000000;
console.info(`I want to have salary ${gaji}`);

//------------Object---------------
const myMom = {
  nameMom: "Rosita Jamilah",
  age: 61,
  job: "The Best Mother",
  superpower: true
};
const bioMom = `
        Nama : ${myMom.nameMom} \n
        Umur : ${myMom.age} \n
        Pekerjaan : ${myMom.job} \n
        SuperAbility : ${myMom.superpower} `;
alert(`About Mama\n ${bioMom}`);

//------------Array---------------
const myFather = ["Bunyamin Usman", 67, "The Best Father", true];
const bioFather = `
    Nama : ${myFather[0]} \n
    Umur : ${myFather[1]} \n
    Pekerjaan : ${myFather[2]} \n
    SuperAbility : ${myFather[3]}`;
alert(`About Papa \n ${bioFather}`);
