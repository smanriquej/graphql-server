import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';


const schema02 = new mongoose.Schema({
  cod_indice: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion_cupacion: {
    type: String,
    required: true,
  },
});

schema02.plugin(uniqueValidator);

export default mongoose.model('cuoc_ocupacion02', schema02);