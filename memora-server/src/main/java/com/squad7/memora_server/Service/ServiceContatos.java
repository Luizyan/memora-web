package com.squad7.memora_server.Service;

import com.squad7.memora_server.Model.Contatos;
import com.squad7.memora_server.Model.ResponseModel;
import com.squad7.memora_server.Repository.RepositoryContatos;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class ServiceContatos {

    // enjeção de dependecia
    @Autowired
    private final RepositoryContatos repositoryContatos;
    @Autowired
    private ResponseModel responseModel;


    //metodo cadastrar listar
    public ResponseEntity<?> cadastrarAlterar(Contatos contatos, String acao){
        if (contatos.getNome().equals("")){
            responseModel.setMensagem("vc nao digitou o seu nome");
            return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.BAD_REQUEST);
        } else if (contatos.getMensagem().equals("")) {
            responseModel.setMensagem("vc nao escreveu sua mensaem");
            return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.BAD_REQUEST);
        } else if (contatos.getEmail().equals("")) {
            responseModel.setMensagem(("vc não digitou seu Email"));
            return new ResponseEntity<ResponseModel>(responseModel, HttpStatus.BAD_REQUEST);
        }else{
            if (acao.equals("cadastrar")){
                return new ResponseEntity<Contatos>(repositoryContatos.save(contatos), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<Contatos>(repositoryContatos.save(contatos), HttpStatus.OK);
            }
        }
    }

    //metodo listar
    public Iterable<Contatos> listar(){
        return repositoryContatos.findAll();
    }

    //metodo delete
    public ResponseEntity<ResponseModel> remover(long id){
        repositoryContatos.deleteById(id);
        responseModel.setMensagem("cliente deletado com sucesso");
        return new ResponseEntity<ResponseModel>(responseModel,HttpStatus.OK);
    }
}

