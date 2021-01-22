interface IDecorated {
    operation(): string
}

class Decorated implements IDecorated {
    operation(){
        return "I am decorated";
    }
}



class Decorator implements IDecorated {

    constructor( protected decorate:IDecorated ){

    }

    operation(){
        return this.decorate.operation();
    }

}

class LoudDecorator extends Decorator {

    operation():string {
        return `${this.operation()}!`;
    }

}

class QuestionDecorator extends Decorator {

    operation():string {
        return `${this.operation()}?`;
    }

}