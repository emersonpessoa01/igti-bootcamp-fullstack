//colocando as configurações de banco de dados
import mongoose from "mongoose";
import podcastModel from "../models/podcastModel.js";

const db = {};
//db = informações de banco
//url, mongoose e podcast = modelo
db.url = process.env.MONGOURL;
db.mongoose = mongoose;
db.podcast = podcastModel(mongoose);

export { db };
