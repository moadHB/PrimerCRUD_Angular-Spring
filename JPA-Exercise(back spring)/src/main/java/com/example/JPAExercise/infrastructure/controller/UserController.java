package com.example.JPAExercise.infrastructure.controller;

import com.example.JPAExercise.domain.User;
import com.example.JPAExercise.infrastructure.repository.UserPort;
import lombok.AllArgsConstructor;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping
@AllArgsConstructor
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.DELETE,RequestMethod.PUT})
public class UserController {

    private UserPort userPort;
    private HttpServletResponse response;


    @GetMapping("users")
    public void getAllUsers() throws JSONException {
        List<User> listaPersonas=userPort.findAll();
        JSONArray jsonArray= new JSONArray();
        for (User personaAuxiliar:listaPersonas) {
            jsonArray.put(new JSONObject(personaAuxiliar.getJson()));
        }
        try {
            response.getWriter().write(String.valueOf(jsonArray));
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    @GetMapping("addUser")
    public void addUser() throws IOException, JSONException {
        User user = new User();
        userPort.save(user);
        this.getAllUsers();
    }

    @PostMapping("/updateUser/{id}")
    public void updateUser(@PathVariable("id") int id, @RequestBody User user) throws IOException, JSONException {
        Optional<User> userData = userPort.findById(id);
        if (userData.isPresent()) {
            User u = userData.get();
            if (user.getName() != null) u.setName(user.getName());
            if (user.getLastName() != null) u.setLastName(user.getLastName());
            if (user.getCity() != null) u.setCity(user.getCity());
            if (user.getAge() != null) u.setAge(user.getAge());
            userPort.save(u);
        }
        this.getAllUsers();
    }

    @GetMapping("/deleteUser/{id}")
    public void deleteUser(@PathVariable(value = "id") Integer id) throws Exception, JSONException {
        userPort.findById(id).orElseThrow(()->new Exception("Id not found - " + id));
        userPort.deleteById(id);
        this.getAllUsers();
    }
}
