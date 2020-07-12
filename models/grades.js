export default (mongoose) => {
  const schema = mongoose.Schema({
    name: {
      type: String,
      require: true,
    },
    subject: {
      type: String,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    value: {
      type: Number,
      require: true,
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
  const grades = mongoose.model('grades', schema, 'grades');
  return grades;
};
