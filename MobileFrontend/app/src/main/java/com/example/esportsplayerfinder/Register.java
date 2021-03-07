package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.widget.Button;
import android.widget.TextView;

import com.google.android.material.textfield.TextInputEditText;


public class Register extends AppCompatActivity {

    TextInputEditText regInputUsername, regInputEmail, regInputPassword;
    Button buttonRegister;
    TextView textViewLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        regInputUsername = findViewById(R.id.regName);
        regInputEmail = findViewById(R.id.regEmail);
        regInputPassword = findViewById(R.id.regPassword);
        buttonRegister = findViewById(R.id.btnRegister);
        textViewLogin = findViewById(R.id.textExistingUserQuestion);

    }
}