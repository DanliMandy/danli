package com.bobo.web;

import com.bobo.entity.Account;
import com.bobo.dao.AccountDao;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by fangzhipeng on 2017/4/20.
 * 这里省略了service层，实际开发加上；
 */
@RestController
@RequestMapping("user")
@CrossOrigin
public class AccountController {

    @Autowired
    AccountDao accountDao;

    @RequestMapping(value = "/login")
    public List<Account> login() {
        return accountDao.findAll();
    }




}
