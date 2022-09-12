import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const indiceSchema = new mongoose.Schema({
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
});

indiceSchema.virtual('ocupacion', {
  ref: 'cuoc_ocupacion02',
  localField: 'cod_indice',
  foreignField: 'cod_indice',
  justOne: true,
})

indiceSchema.virtual('conocimientos', {
  ref: 'cuoc_conocimeiento05',
  localField: 'cod_indice',
  foreignField: 'ocupacion',
})

indiceSchema.virtual('denominaciones', {
  ref: 'cuoc_denominaciones03',
  localField: 'cod_indice',
  foreignField: 'ocupacion',
})

indiceSchema.plugin(uniqueValidator);

export default mongoose.model('cuoc_indice01', indiceSchema);