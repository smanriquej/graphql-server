import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const focupacionAfinSchema = new mongoose.Schema({
  gran_grupo: {
    type: Number,
  },
  ocupacion: {
    type: String,
    required: true,
  },
  ocupacion_afin: {
    type: String,
  },
  nombre_ocupacion_afin: {
    type: String,
  },
});

focupacionAfinSchema.plugin(uniqueValidator);

export default mongoose.model('cuoc_ocupacion_afin07', focupacionAfinSchema);