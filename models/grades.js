import mongoose from 'mongoose';

//Criação do modelo
const gradesSchema = mongoose.Schema({
  name: { type: String, required: true },
  subject: { type: String, required: true },
  type: { type: String, required: true },
  value: {
    type: Number,
    required: true,
    //valida  se a nota inserida é menor que 0
    validate(value) {
      if (value < 0) {
        throw new Error('Valor Negativo para a nota não permitido');
      }
    },
  },
  lastModified: {
    type: Date,
    default: Date.now(),
  },
});
//definindo Modelo da Coleção
const gradesModel = mongoose.model('grades', gradesSchema, 'grades');

export { gradesModel };
