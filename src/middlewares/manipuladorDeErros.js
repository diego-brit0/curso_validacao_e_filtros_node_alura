import mongoose from "mongoose";
import ErroBase from "../erros/ErroBase.js";
import RequisicaoIncorreta from "../erros/RequisicaoIncorreta.js";
import ErroValidacao from "../erros/ErroValidacao.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

function manipuladorDeErros(erro, req, res, next) {
  if(erro instanceof mongoose.Error.CastError) {
    new RequisicaoIncorreta().enviarResponsta(res)
  } else if (erro instanceof mongoose.Error.ValidationError) {
    new ErroValidacao(erro).enviarResponsta(res);
  } else if (erro instanceof NaoEncontrado){
    erro.enviarResponsta(res);
  }else {
    new ErroBase().enviarResponsta(res);
  }

}

export default manipuladorDeErros;