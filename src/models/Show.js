
export default class Show {
    constructor({ id, name, image, rating, summary, genres }) {
        this.id = id
        this.name = name
        this.genres = genres
        this.image = image.medium
        this.rating = rating.average 
        this.description = summary
     
    }
}