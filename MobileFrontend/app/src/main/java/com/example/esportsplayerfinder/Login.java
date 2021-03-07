package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class Login extends AppCompatActivity {

    private EditText eUsername;
    private EditText ePassword;
    private Button eLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        eUsername = findViewById(R.id.etUsername);
        ePassword = findViewById(R.id.etPassword);
        eLogin = findViewById(R.id.btnLogin);

        eLogin.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v) {
                String inputUsername = eUsername.getText().toString();
                String inputPassword = ePassword.getText().toString();

//                if inputUsername.isEmpty() || inputPassword.isEmpty()
//                {
//                    Toast.makeText( context: MainActivity.this, resId: "Please enter all details correctly.", Toast.LENGTH_SHORT).show()
//                }
            }
        });

    }

//    private boolean validate(String username, String password)
//    {
//
//    }

}