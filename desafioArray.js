const mensagensecreta = [
'Aprender',
'não',
'é',
'sobre',
'o',
"que",
'você',
'consegue',
'facilmente',
'na',
'primeira',
'vez,',
'mas',
'sobre',
'o',
"que",
'você',
'pode',
'descobrir.',
'-2015',
'Chris',
'Pine,',
'Aprenda',
'JavaScript',
];
mensagensecreta.pop();
mensagensecreta.push('a', 'programar.');
mensagensecreta.splice();
mensagensecreta[8] = 'certo';
mensagensecreta.shift();
mensagensecreta.unshift('Programação');
mensagensecreta[7] = 'sabe,';
mensagensecreta[8] = 'é';
mensagensecreta.splice(9, 4);
var string = mensagensecreta.join(' ');
console.log(string);

/* Programação não é sobre o que você sabe, é sobre o que você pode descobrir.
 -2015, Chris Pine, Aprenda a programar.*/