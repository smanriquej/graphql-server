import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const schema = new mongoose.Schema({
  cod_indice: {
    type: String,
    required: true,
    unique: true,
  },
  longitud_indice: {
    type: String,
    required: true,
  },
  indice_gran_grupo: {
    type: String,
    required: true,
    unique: true,
  },
  indice_subgrupo_ppal: {
    type: String,
  },
  indice_subgrupo: {
    type: String,
  },
  indice_grupo_primario: {
    type: String,
  },
  indice_perfil_ocupaciona: {
    type: String,
  },
  indice_denominacion_ocupacion: {
    type: String,
  },
  nombre_cuoc_indice: {
    type: String,
    required: true,
  },
  // ocupacion: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'cuoc_ocupacion02'
  // }
});

schema.plugin(uniqueValidator);

export default mongoose.model('cuoc_indice01', schema);