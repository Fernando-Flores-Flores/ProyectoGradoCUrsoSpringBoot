/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.gestora.demo.model.dao;

import com.gestora.demo.models.entity.Cliente;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author Fernando
 */
public interface IClienteDao extends CrudRepository<Cliente, Long>{
    
}
