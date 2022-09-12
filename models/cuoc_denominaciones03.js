import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const denominacionesSchema = new mongoose.Schema({
  gran_grupo: {
    type: Number,
  },
  grupo_primario: {
    type: String,
  },
  ocupacion: {
    type: String,
    required: true,
  },
  denominacion: {
    type: String,
  },
  nombre_denominacion: {
    type: String,
  },
  fuente_denominacion: {
    type: String,
  },
  codigo_ciuo: {
    type: String,
  },
});

denominacionesSchema.plugin(uniqueValidator);

export default mongoose.model('cuoc_denominaciones03', denominacionesSchema);