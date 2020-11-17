import { db } from "../models/index.js";

//criando objeto global
const Podcast = db.podcast;

//função create(metodo post) do CRUD
const create = async (req, res) => {
  const podcast = new Podcast({
    title: req.body.title,
    description: req.body.description,
    feed_url: req.body.feed_url,
    site_url: req.body.site_url,
    image_url: req.body.image_url,
    docs: req.body.docs,
    itunesImage: req.body.itunesImage,
  });

  try {
    const data = await podcast.save();

    res.send(data);
  } catch (err) {
    res.status(400).send({ message: `Erro ao inserir podcast ${error}` });
  }
};

//BUSCAR TUDO(método get)
const findAll = async (req, res) => {
  try {
    const data = await Podcast.find({});

    res.send(data);
  } catch (err) {
    res.status(400).send({ message: `Erro ao buscar todos podcasts ${error}` });
  }
};

//BUSCAR PELO ID(metodo get)
const findOne = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Podcast.findById({ _id: id });

    res.send(data);
  } catch (err) {
    res
      .status(400)
      .send({ message: `Erro ao buscar podcast id ${id} ${error}` });
  }
};

//Atualizar dados(metodo put)
const update = async (req, res) => {
  try {
    const data = await Podcast.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      {
        new: true,
      }
    );
    if (!data) {
      res.send(`Podcast id ${id} not found`);
    } else {
      res.send("Podcast atualizado com sucesso");
    }
  } catch (err) {
    res
      .status(400)
      .send({ message: `Erro ao atualizar o podcast id ${id} ${error}` });
  }
};

//deletar documentos(metodo delete)
const remove = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Podcast.findOneAndDelete({ _id: id });

    if (!data) {
      res.send(`Podcast id ${id} not found`);
    } else {
    res.send(`Podcast excluido com sucesso - ${data}`);
    }
  } catch (err) {
    res
      .status(400)
      .send({ message: `Erro ao excluir o podcast id ${id} ${error}` });
  }
};

export default { create, findAll, findOne, update, remove };
