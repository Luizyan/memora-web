package com.squad7.memora_server.Controller;

import com.squad7.memora_server.Model.Contatos;
import com.squad7.memora_server.Model.ResponseModel;
import com.squad7.memora_server.Service.ServiceContatos;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequestMapping("/api")
@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "*")
public class ControllerContatos {

    //enjecao de dependencia
    @Autowired
    private final ServiceContatos serviceContatos;



    @PostMapping("/cadastrar")
    public ResponseEntity<?> cadastrar(@RequestBody Contatos contatos){
        return serviceContatos.cadastrarAlterar(contatos, "cadastrar");
    }


    @GetMapping("/listar")
    public Iterable<Contatos> listar (){
        return serviceContatos.listar();
    }

    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody Contatos contatos){
        return serviceContatos.cadastrarAlterar(contatos, "alterar");
    }

    @DeleteMapping("/remover/{id}")
    public ResponseEntity<ResponseModel> remover(@PathVariable long id){
        return serviceContatos.remover(id);
    }

}
