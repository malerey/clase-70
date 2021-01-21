// const arr = [898989, 1, 2, 9999, 3, 4, 5]

// const masGrande = arr.reduce((acc, curr) => {
//   console.log('acc', acc) // 1
//   console.log('curr', curr) // 2


//   if (acc.masGrande > curr) {
//      // 
//   }
//   else {
//     acc.masGrande = curr
//   }

//   if (acc.masChico < curr) {
// //
//   }
//   else {
//     acc.masChico = curr
//   }

//   return acc
// }, {})

// console.log("mas Grande", masGrande)

// const numeros = [1, 2, 3, 4, 5]

// const suma = numeros.reduce((acc, curr) => {
//   console.log("acc", acc)
//   console.log("curr", curr)
//   return acc + curr
// }, 0)


// sort 
// modifica el array original

// utilizado sin parametros, sirve solo para arrays de strings

// const nombres = ["Sol", "Flor", "Angie"]
// nombres.sort()
// console.log(nombres)

// sort puede recibir un parametro: una funcion

const numeros = [1, 2, 54, 21, 86, 44, 90]
const alumnas = [
  {
    nombre: "Sol", 
    edad: 17
  }, {
    nombre: "Angie",
    edad: 52
  }, {
    nombre: "Flor", 
    edad: 25
  }
]

alumnas.sort((a, b) => {
  console.log("a", a)
  console.log("b", b)

  if (a.edad > b.edad) {
    console.log("1")
    return 1
  }
  else if (b.edad > a.edad) {
    console.log("- 1")
    return - 1
  }
  else {
    console.log(0)
    return 0
  }
})

console.log(alumnas)


