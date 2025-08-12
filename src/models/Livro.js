import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: {type: String},
    titulo: {
      type: String, 
      required: [true, "O título do livro é obrigatório"]
    },
    autor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'autores', 
      required: [true, "O(a) autor(a) é obrigatório"]
    },
    editora: {
      type: String,
      required: [true, "A editora é obrigatoria"],
      enum: {
        values: ["Casa do codigo", "Alura"],
        message: "A editora {VALUE} nao e um valor permitido"
      }
    },
    numeroPaginas: {
      type: Number,
      validate: (valor) => {
        return valor >= 10 && valor <= 5000;
      }
    }
  }
);

const livros= mongoose.model('livros', livroSchema);

export default livros;