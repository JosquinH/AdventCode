const timeStamp = 1013728
const input = [
    '23','x','x','x','x','x','x','x','x','x','x','x','x','41','x','x','x','x','x','x','x','x','x','733','x','x','x','x','x','x',
    'x','x','x','x','x','x','13','17','x','x','x','x','19','x','x','x','x','x','x','x','x','x','29','x','449','x','x','x','x','x','x',
    'x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','x','37'
]

const currentInput = input.filter(x => x !== 'x')

let minTimeToWait = 732
let idBus = 0

// 1

for (const curTime of currentInput) {
  const curIntTime = parseInt(curTime)
  const timeToWait= timeStamp  % curIntTime === 0 ? 0 : curTime - (timeStamp  % curIntTime)
  
  if ( timeToWait < minTimeToWait) {
    minTimeToWait = timeToWait
    idBus = curIntTime
  }
} 

console.log(`Le Temps d'Attente Minimal est de ${minTimeToWait} minutes avec le Bus ${idBus}`)
console.log(`Le Résultat est de : ${minTimeToWait * idBus}`)

// 2

const firstNumber = parseInt(input[0])
const equations = [["Reste A", "Modulo B"],[0,firstNumber]]
for (let i =1; i < input.length; ++i) {
  if (input[i] !== 'x') {
    equations.push([-1 * i,  parseInt(input[i])])
  }
}

console.table(equations)
console.log("Aller sur https://www.dcode.fr/restes-chinois")