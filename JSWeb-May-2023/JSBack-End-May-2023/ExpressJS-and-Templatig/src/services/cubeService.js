const cubes = []
const uniqid = require('uniqid')

exports.getAll = ()=>cubes.slice()

exports.getOneCube = (id)=> cubes.find(x=>x.id == id)

exports.createCube = (cubeData)=>{
const newCube = {
    id:uniqid(),
    ...cubeData
}
    cubes.push(newCube);
    return newCube;
    

}
