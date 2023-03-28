// fubnção tradiconal

function soma(num1, num2){
    return num1 + num2
}
console.log(soma(2,3));

//arrow function

const soma1=(num3,num4)=>{
    return num3 + num4
}
console.log(soma1(5,9))

const texto="ola mundo"
function sepaTexto (texto) {
    return texto.split('')
}
console.log(sepaTexto(texto))

//arrow function
const texto1 ="mundo"
const sepaTexto1=texto =>{
    return texto1.split('')
}
console.log(sepaTexto1(texto1))

//arrow function com array

const usuarios=[
    {id:1,nome:"Huguinho"},
    {id:2,nome:"Zezinho"},
    {id:3,nome:"Luizinho"},
]
 const usuario = usuarios.find(usuario=>usuario.id === 3)

 document.write (`o usuario é: ${usuario.nome}`);


 //exemplo com filter , map e reduce 

 const funcionarios =[
    {nome:'Huginho', salario:1500, dataNascimento:1999},
    {nome:'Zezinho', salario:500, dataNascimento:2000},
    {nome:'Luizinho', salario:1000, dataNascimento:2001},
    {nome:'Donald', salario:1300, dataNascimento:1969},
    {nome:'Patinhas', salario:1100, dataNascimento:1963},
 ]

const dataNascimento = funcionarios.filter(funcionario =>(
 funcionario.dataNascimento > 1980));

 console.log(dataNascimento);


 const exibeInfo = funcionarios.map( funcionario =>
 `${funcionario.nome}` + 'tem salario de:' + `${funcionario.salario}`);
 console.log(exibeInfo)

 const total = funcionarios.reduce((resultado, valorTotal)=>{
    return (resultado + valorTotal.salario)
 },0)
console.log(total)



