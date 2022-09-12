import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const ocupacionSchema = new mongoose.Schema({
  cod_indice: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion_ocupacion: {
    type: String,
    required: true,
  },
});

ocupacionSchema.plugin(uniqueValidator);

export default mongoose.model('cuoc_ocupacion02', ocupacionSchema);