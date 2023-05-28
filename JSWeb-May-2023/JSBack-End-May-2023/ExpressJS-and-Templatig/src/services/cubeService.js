const cubes = [
    {
         id:"v3c244trd",
         imageUrl:"https://images.pexels.com/photos/19677/pexels-photo.jpg?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-19677.jpg&fm=jpg",
         name:"Rubic cube",
         difficultyLevel:"3",
         description:"Most popular cube among all cubes."
    }
]
const uniqid = require('uniqid')

exports.getAll = (search,from,to)=>{
    let result = cubes.slice()

    if(search){

        result = result.filter(cube=>cube.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(from){
        result = result.filter(cube=>cube.difficultyLevel>=Number(from))
    }
    if(to){
        result = result.filter(cube=>cube.difficultyLevel<=Number(to))
    }

    return result
}

exports.getOneCube = (id)=> cubes.find(x=>x.id == id)

exports.createCube = (cubeData)=>{
const newCube = {
    id:uniqid(),
    ...cubeData
}
    cubes.push(newCube);
    return newCube;
    

}
