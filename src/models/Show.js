class Show {
    constructor(showData) {
        this.id = showData.id,
        this.name = showData.name,
        this.genre = showData.genres,
        this.officalSite = showData.officalSite,
        this.rating = showData.rating.average,
        this.imageMedium = showData.image.medium,
        this.imageOriginal = showData.image.original,
        this.summary = showData.summary
    }
}

export default Show;