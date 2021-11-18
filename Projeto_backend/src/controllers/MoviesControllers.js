const { response } = require('express');
const Movies = require('../models/Movies');


const create = async(req,res) => {
    try{
          const movie = await Movies.create(req.body);
          return res.status(201).json({message: "Filme cadastrado com sucesso!", movie: movie});
      }catch(err){
          res.status(500).json({error: err});
      }
};
const index = async(req,res) => {
    try {
        const movies = await Movies.findAll();
        return res.status(200).json({movies});
    }catch(err){
        return res.status(500).json({err});
    }
};
const show = async(req,res) => {
    const {id} = req.params;
    try {
        const movie = await Movies.findByPk(id);
        return res.status(200).json({movie});
    }catch(err){
        return res.status(500).json({err});
    }
};

const update = async(req,res) => {
    const {id} = req.params;
    try {
        const [updated] = await Movies.update(req.body, {where: {id: id}});
        if(updated) {
            const movie = await Movies.findByPk(id);
            return res.status(200).send(movie);
        } 
        throw new Error();
    }catch(err){
        return res.status(500).json("Filme não encontrado");
    }
};

const destroy = async(req,res) => {
    const {id} = req.params;
    try {
        const deleted = await Movies.destroy({where: {id: id}});
        if(deleted) {
            return res.status(200).json("Filme deletado com sucesso.");
        }
        throw new Error ();
    }catch(err){
        return res.status(500).json("Filme não encontrado.");
    }
};

module.exports = {
    index,
    show,
    create,
    update,
    destroy
};
