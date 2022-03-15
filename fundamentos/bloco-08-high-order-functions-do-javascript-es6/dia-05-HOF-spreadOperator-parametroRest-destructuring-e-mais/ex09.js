
const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };

const months = ({spring, summer, autumn, winter}) => [winter[1], winter[2], ...spring, ...summer, ...autumn, winter[0]];

console.log(months(yearSeasons));