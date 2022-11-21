console.clear();

let nome = "Valéria Cabral";

{
  nome = "Stephanie";
  {
    let nome = "André";
    console.log("1", nome)
  }
}

let saudacao;

if (true) {
  if (false) {
    saudacao = "Que lindo dia"
  } else {
    saudacao = "que chato"
  }
}

console.log("final", saudacao);
