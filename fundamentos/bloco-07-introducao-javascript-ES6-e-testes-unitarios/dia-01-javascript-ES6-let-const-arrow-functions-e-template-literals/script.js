const replaceX = (frase, palavra) => frase.replace(/ x /g, ` ${palavra} `);
const frase = `Tryber x aqui!`;
const palavra = `RTC`;
const string1 = (replaceX(frase, palavra));

const fiveSkills = ['HTML', 'CSS', 'JavaScript', 'Github', 'Slack'];

const sortSkills = skills => skills.sort();

// const skills = sortSkills(fiveSkills);

const concatPhrase = string => `${string} Minhas cinco principais habilidades são: 
${fiveSkills[0]};
${fiveSkills[1]};
${fiveSkills[2]};
${fiveSkills[3]};
${fiveSkills[4]}; #goTrybe.`


console.log(concatPhrase(string1));