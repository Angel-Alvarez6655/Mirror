const viejasModel = require('../Models/viejas.model');
const viejasController = {}

// GET
viejasController.getViejas = async (req, res)=>{
    const viejas = await viejasModel.find()
    // Error Handler so my app don't fking stop working xd
    .then((data)=>res.json(data))
    .catch((err)=>res.json({message: err}))
}

// GET BY ID
viejasController.getVieja = async (req, res)=>{
    const { id } = req.params;
    const viejas = await viejasModel.findById(id)

    // Error Handler so my app don't fking stop working xd
    .then((viejas)=>res.json(viejas))
    .catch((err)=>res.json({message: err}))
}

// POST
viejasController.insertViejas = async (req, res)=>{
    const viejas = await viejasModel(req.body)
    viejas.save()
    
    // Error Handler so my app don't fking stop working xd
    .then((viejas)=>res.json(viejas))
    .catch((err)=>res.json({message: err}))

}

// PUT
viejasController.updateViejas = async (req, res)=>{
    const { id } = req.params;
    const { name, age, nationality, isPelona } = req.body;
    
    const viejas = await viejasModel.updateOne({_id: id},{$set: {name, age, nationality, isPelona}})
    
    // Error Handler so my app don't fking stop working xd
    .then((viejas)=>res.json(viejas))
    .catch((err)=>res.json({message: err}))
}

// DELETE
viejasController.deleteViejas = async(req, res) =>{
    const { id } = req.params;
    const viejas = await viejasModel.remove({_id:id})
    
    // ERROR HANDLER
    .then((viejas)=>res.json(viejas))
    .catch((err)=>res.json({message: err}))
}
module.exports = viejasController;