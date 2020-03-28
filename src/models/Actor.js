export default class Actor {
    constructor(cast) {
        this.id = cast.person.id;
        this.name = cast.person.name;
        this.image = cast.person.image.medium
        
    }
}