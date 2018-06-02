package com.bobo.web;

import com.bobo.dao.QuestionDao;
import com.bobo.entity.Question;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

/**
 * Created by fangzhipeng on 2017/4/20.
 * 这里省略了service层，实际开发加上；
 */
@RestController
@CrossOrigin
@RequestMapping("question")
public class QuestionController {

    @Autowired
    QuestionDao questionDao;

    @RequestMapping(value = "/list", method = RequestMethod.GET)
    public List<Question> getQuestion() {
        return questionDao.findAll();
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public Question getQuestionById(@PathVariable("id") int id) {
        return questionDao.findOne(id);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.PUT)
    public String updateQuestion(@PathVariable("id") int id, @RequestParam(value = "name", required = true) String name,
                                @RequestParam(value = "money", required = true) double money) {
        Question Question = new Question();

        return Question.toString();

    }

    @RequestMapping(value = "", method = RequestMethod.POST)
    public String postQuestion(@RequestParam(value = "name") String name,
                              @RequestParam(value = "money") double money) {
        Question Question = new Question();
        Question Question1 = questionDao.save(Question);
        return Question1.toString();

    }

    @RequestMapping(value = "/add", method = RequestMethod.POST)
    public boolean add(@RequestParam Map<String,Object> map) {
//        questionDao.save(Question);
        System.out.println(map);
        return true;
    }



}
