package com.squad7.memora_server.Repository;

import com.squad7.memora_server.Model.Contatos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RepositoryContatos extends CrudRepository<Contatos, Long> {
}
