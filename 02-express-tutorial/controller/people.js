const {people} = require('../data')



const getPeople = (req,res)=>{
   res.status(200).json( {success : true, data : people})
}

const createPerson = (req,res)=>{
    const {name } = req.body

    if(!name){
        return res.status(404).send({success : false , msg : 'please provide name value'})
    }
    res.status(404).send(`Hi ${name}`)
}
const createPersonPostman = (req,res)=>{
    const {name} = req.body
    if(!name){
        return res.status(404).send({success : false , msg : 'please provide name value'})
    }
    res.status(200).send({success : true , data : [...people , name]})
}

const updatePerson = (req,res)=>{
    const {name} = req.body
    const {id} = req.params
    const newPeople = [...people]
    const UpdatedPeople = newPeople.map((p)=>{
      return  p.id ===Number(id) ? {...p , name : name } : p
    })
    res.status(200).send({success : true , data : UpdatedPeople})
}

const deletePerson = (req,res)=>{
    
    const {id} = req.params
    const newPeople = [...people]
    const UpdatedPeople = newPeople.filter((p)=>{
        return p.id !== Number(id)
    })
    res.status(200).send({success : true , data : UpdatedPeople})
}

module.exports = {getPeople , createPerson , createPersonPostman , updatePerson , deletePerson}
