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

// 2 - Restes Chinois

const euclide_étendue = (a,b) => {
  const initial_res = [[a,1,0],[b,0,1]]
  let i = 1
  while(initial_res[initial_res.length -1][0] !== 0) {
    const r = initial_res[i-1][0] - (Math.floor(initial_res[i-1][0] / initial_res[i][0]) * initial_res[i][0])
    const u = initial_res[i-1][1] - (Math.floor(initial_res[i-1][0] / initial_res[i][0]) * initial_res[i][1])
    const v = initial_res[i-1][2] - (Math.floor(initial_res[i-1][0] / initial_res[i][0]) * initial_res[i][2])
    initial_res.push([r,u,v])
    i += 1
  }

  return initial_res[initial_res.length - 2]
}


const firstNumber = parseInt(input[0])
const equations = [[0,firstNumber]]
for (let i =1; i < input.length; ++i) {
  if (input[i] !== 'x') {
    equations.push([(input[i] - (i % input[i])) % input[i] ,  parseInt(input[i])])
  }
}

const N = equations.reduce((acc,x) => acc * x[1], 1)

let result = 0

for (const equation of equations) {
  const ai = equation[0]
  const Ni = equation[1]
  const Ni_cap = N / Ni

  const res_euclide = euclide_étendue(Ni, Ni_cap )

  let ei = res_euclide[2] * Ni_cap

  result =  result + (ei * ai)
}

while (result < 0) {
  result = result + N
}

result = result % N

console.log(`Résultat 2 : ${result}`)

console.log('Si ça ne marche pas aller sur https://www.dcode.fr/restes-chinois et utiliser : ')
console.table(equations)
