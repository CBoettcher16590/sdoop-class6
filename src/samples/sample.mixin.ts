// definition of a constructable class
export type Constructor = new (...args: any[]) => {};

// function takes an argument that is a Parent class to mix ON
function with1080P<Parent extends Constructor>( MixOn:Parent ){
    
    // return a class that is dynamically extended
    return class extends MixOn {

        resolution = "1080P";

    }

}

function with4k<Parent extends Constructor>( MixOn:Parent ){
    
    // return a class that is dynamically extended
    return class extends MixOn {

        resolution = "4k";

    }

}

function withSpeakers<Parent extends Constructor>( MixOn:Parent ){
    
    // return a class that is dynamically extended
    return class extends MixOn {

        speakers = true;

    }

}

class Television {

    resolution = "480i";

}

class SmartTV extends Television {

    // code that makes a television a smarttv

}

// Lg4kSmartTv -> Speakers -> 4k -> SmartTV -> Television
class Lg4kSmartTv extends withSpeakers( with4k( SmartTV )) {

}

// Samsung -> 1080P -> SmartTV -> Television
class SamsungModelY extends with1080P( SmartTV ){

}

// Haeir -> Speakers -> 1080P -> Television
class HaeirModelZ extends withSpeakers( with1080P( Television )){

}

// ChildClass -> Mixin2 -> Mixin -> ParentClass