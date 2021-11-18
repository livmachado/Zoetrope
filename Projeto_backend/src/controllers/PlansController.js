const { response } = require('express');
const Plans = require('../models/Plans');


const create = async(req,res) => {
    try{
          const plan = await Plans.create(req.body);
          return res.status(201).json({message: "Plano cadastrado com sucesso!", plan: plan});
      }catch(err){
          res.status(500).json({error: err});
      }
};

const index = async(req,res) => {
    try {
        const plans = await Plans.findAll();
        return res.status(200).json({plans});
    }catch(err){
        return res.status(500).json({err});
    }
};
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const plan = await Plans.findByPk(id);
        return res.status(200).json({plan});
    }catch(err){
        return res.status(500).json({err});
    }
};
const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Plans.update(req.body, {where: {id: id}});
        if(updated) {
            const plan = await Plans.findByPk(id);
            return res.status(200).send(plan);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Plano não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Plans.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Usuário deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Usuário não encontrado.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
