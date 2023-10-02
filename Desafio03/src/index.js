class Hero {
    constructor(name, age, type){
        this.name = name
        this.age = age
        this.type = type
    }
    typeHero(type){
        let attack = ""
        switch (type) {
            case "Guerreiro": 
                attack = "espada"
                console.log("O " + type + " atacou usando " + attack)
                break;
            case "Mago":
                attack = "magia"
                console.log("O " + type + " atacou usando " + attack)
                break;
            case "Monge":
                attack = "artes marciais"
                console.log("O " + type + " atacou usando " + attack)
                break;
            case "Ninja":
                attack = "shuriken"
                console.log("O " + type + " atacou usando " + attack)
                break;
            default: "Escolha um herói válido!"
                break;
        }
    }
}

let actionHero = new Hero()


actionHero.typeHero("Guerreiro")
actionHero.typeHero("Mago")
actionHero.typeHero("Monge")
actionHero.typeHero("Ninja")