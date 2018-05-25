package com.bobo.dao;

import com.bobo.entity.Account;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface AccountDao  extends JpaRepository<Account,Integer> {

    @Query("from Account")
    List<Account> findByRole();
}


