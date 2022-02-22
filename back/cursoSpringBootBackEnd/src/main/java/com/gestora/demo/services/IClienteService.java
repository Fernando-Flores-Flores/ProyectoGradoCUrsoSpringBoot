package com.gestora.demo.services;

import com.gestora.demo.models.entity.Cliente;
import java.util.List;

public interface IClienteService {
        public List<Cliente> findAll();
}
