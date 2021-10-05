var ordemCrescente = [25, 23, 11, 55, 30, 6, 4, 21, 34, 89, 56];
ordemCrescente.sort();
console.log(ordemCrescente);

console.log('2º)');// 2º)

var times = ['Santos', 'Sport', 'Santa Cruz', 'Vasco', 'Chapecó'];
times.push('Flamengo');
times.shift();
times.unshift('Palmeiras');
times.push('Grêmio');
times.push("São Paulo", "Santos");
console.log("Quantidade de elementos no array times: " + times.length);
times.pop();
times.sort();
console.log(times);


console.log('3º)')// 3º)

var emCasa = ['Escovar os dentes', 'Fora a cama', 'Toma café', 'Estudar', 'Lava os pratos', 'Lancha', 'Tomar banho'];
var mais = ['Dormi', 'Jogar'];
emCasa.reverse();
console.log("Elemento na posição 3: " + emCasa[3]);
console.log("Elemento na posição 6: " + emCasa[6]);
console.log(emCasa.join(' - '));
console.log(emCasa.concat(mais));

console.log('4º)')// 4º) 

var cidade = ['Estocolmo', 'Singapura', 'Seul', 'Viena', 'Londres'];
cidade.shift();
cidade.pop();
cidade.sort();
console.log(cidade);
