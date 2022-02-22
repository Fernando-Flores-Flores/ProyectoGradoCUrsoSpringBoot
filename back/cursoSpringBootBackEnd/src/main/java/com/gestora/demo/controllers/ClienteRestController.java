
package com.gestora.demo.controllers;

import com.gestora.demo.models.entity.Cliente;
import com.gestora.demo.services.IClienteService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:4200"})
@RestController
@RequestMapping("/api")
public class ClienteRestController {
    
    @Autowired
    private IClienteService clienteService;
    
    @GetMapping("/clientes")
    public  List<Cliente>index(){
        return clienteService.findAll();
    }
}