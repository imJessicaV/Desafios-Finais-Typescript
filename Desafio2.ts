// Como podemos melhorar o esse código usando TS? 
interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
} 

enum Profissao { 
    Atriz,
    Bailarina,
    Padeiro
}
const maria: {nome:string, idade:number, profissao:Profissao}={
    nome:' Maria',
    idade: 29,
    profissao: Profissao.Atriz
}

const roberto: {nome:string, idade:number, profissao:Profissao}={
    nome:' Roberto',
    idade: 19,
    profissao: Profissao.Padeiro
    
}

const laura: {nome:string, idade:number, profissao:Profissao}={
    nome:' Laura',
    idade: 32,
    profissao: Profissao.Atriz
    
}

const carlos: {nome:string, idade:number, profissao:Profissao}={
    nome:' Carlos',
    idade: 19,
    profissao: Profissao.Padeiro
    
}
