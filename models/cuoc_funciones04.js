import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const funcionesSchema = new mongoose.Schema({
  gran_grupo: {
    type: Number,
  },
  ocupacion: {
    type: String,
    required: true,
  },
  consecutivo_funcion: {
    type: String,
  },
  redaccion_funcion: {
    type: String,
  },
  fuente_ciuo: {
    type: String,
  },
  fuente_cno: {
    type: String,
  },
});

funcionesSchema.plugin(uniqueValidator);

export default mongoose.model('cuoc_funciones04', funcionesSchema);