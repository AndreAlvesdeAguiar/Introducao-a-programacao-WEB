const alunosA = [
    {
        nome: "André",
        nota: 10.0
    },
    {
        nome: "Fernanda",
        nota: 10.0
    },
    {
        nome: "Fulano",
        nota: 9.8
    },
    {
        nome: "Fula",
        nota: 4.8
    }
]

const alunosB = [
    {
        nome: "Maycon",
        nota: 4.0
    },
    {
        nome: "All",
        nota: 3.0
    },
    {
        nome: "Siclano",
        nota: 2.8
    },
    {
        nome: "Siclano",
        nota: 10
    },
    {
        nome: "Siclano",
        nota: 10
    }
]

function calculoMedia(alunos) {
    //estrutura de repetição
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        soma = soma + alunos[i].nota
    }
    const media = soma /alunos.length
    return media
}

const media1 = calculoMedia(alunosA)
const media2 = calculoMedia(alunosB)

// console.log(media1)
// console.log(media2)


function enviaMensagem(media, turma) {
// se a media for maior que 5, parabenizar a turma
    if (media > 5) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns.`)
    }else{
        console.log(`A media da ${turma} é menor que 5`)
    }

}

// enviaMensagem(media1, 'alunosA')
// enviaMensagem(media2, 'turmaB')



// Marcar aluno como reprovado se a nota 
// for menor que 5
// e, tambem, enviar uma mensagem 

// outra estrutura para for

function marcarComoReprovado(aluno){
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}



function enviarMensagemReprovado(aluno){
    if (aluno.reprovado) {
        console.log(`o aluno ${aluno.nome} esta reprovado`)
    } else {
        console.log(`o aluno ${aluno.nome} esta aprovado`)
    }
}


function alunoReprovado(alunos) {
    for(let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno);
    }
}

alunoReprovado(alunosA)