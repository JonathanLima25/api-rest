import autores from "../models/Autor.js";

class AutorController {
    static listarAutors = (req, res) => {
        autores.find((err, autores) => {
            res.status(200).json(autores);
        })
    }
    
    static listarAutorPorId = (req, res) => {
        const id = req.params.id;

        autores.findById(id, (err, autor) => {
            if(err) {
                res.status(404).send({message: `${err.message}Status inesistente`})
            } else {
                res.status(200).send(autor);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);
        autor.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha ao cadastrar o autor`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizaAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor atualizado com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor removido com sucesso!"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }


}

export default AutorController;