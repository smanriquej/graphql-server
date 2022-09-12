import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const conocimeientoSchema = new mongoose.Schema({
  gran_grupo:{
    type: Number,
  },
  ocupacion: {
    type: String,
    required: true,
  },
  id_conocimiento: {
    type: String,
    required: true,
  },
  nombre_conocimiento: {
    type: String,
    required: true,
  },
});

conocimeientoSchema.plugin(uniqueValidator);

export default mongoose.model('cuoc_conocimiento05', conocimeientoSchema);