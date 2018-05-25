package com.bobo.dao;

import com.bobo.entity.Account;
import com.bobo.entity.Question;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;


public interface QuestionDao extends JpaRepository<Question,Integer> {

    @Query("from Account")
    List<Account> findByRole();
}


