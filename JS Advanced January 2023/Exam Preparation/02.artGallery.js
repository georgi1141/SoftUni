class ArtGallery{
    constructor(creator){
        this.creator=creator,
        this,possibleArticles - { "picture":200,"photo":50,"item":250 },
        this.listOfArticles = [],
        this.guests =[]
    }

    addArticle( articleModel, articleName, quantity ){
        articleModel = articleModel.toLowerCase()
        
        if(!this.listOfArticles.includes(articleModel)){
            throw new Error("This article model is not included in this gallery!")
        }

    }



}



const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));