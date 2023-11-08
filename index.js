class heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        if (this.tipo === 'mago') {
            this.ataque = 'magia'
        } else if (this.tipo === 'guerreiro') {
            this.ataque = 'espada'
        } else if (this.tipo === 'monge') {
            this.ataque = 'artes marciais'
        } else if (this.tipo === 'ninja') {
            this.ataque = 'shuriken'
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${this.ataque}!`)
    }
}

let heroi1 = new heroi('Dumbledore', 352, 'mago')
let heroi2 = new heroi('Naruto', 16, 'ninja')
let heroi3 = new heroi('Aang', 12, 'monge')
let heroi4 = new heroi('Aragorn', 34, 'guerreiro')

heroi1.atacar()
heroi2.atacar()
heroi3.atacar()
heroi4.atacar()