//responsavel por chamar o Banco de Dados
import mongooseDateFormat from "mongoose-date-format";

//exportando uma função que retorna um modelo
export default (mongoose)=>{
const podcastSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  feed_url: {
    type: String,
    required: true,
  },
  site_url: {
    type: String,
    required: true,
  },
  docs: {
    type: String,
    required: true,
  },
  itunesImage: {
    type: Object,
    required: true,
  },
  lastModified: {
    type: Date,
    default: new Date(),
  },
});

const podcastModel = mongoose.model("podcast", podcastSchema, "podcast"); //para criar student no singular
podcastSchema.plugin(mongooseDateFormat);
return podcastModel;
}