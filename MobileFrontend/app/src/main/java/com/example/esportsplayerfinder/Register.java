package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
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

        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);

    }
    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_profile, menu);

        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here.
        switch(item.getItemId()){
            case R.id.myProfile:
                // NEED TO CHANGE TO PROFILE PAGE WHEN MADE
                Intent intentProfile = new Intent(Register.this, FriendsPage.class);
                startActivity(intentProfile);;
                return true;
            case R.id.friendsList:
                Intent intentFriend = new Intent(Register.this, FriendsPage.class);
                startActivity(intentFriend);
                return true;
            case R.id.loginOption:
                // NEED TO CHANGE TO PROFILE PAGE WHEN MADE
                Intent intentLogin = new Intent(Register.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                Intent intentRegister = new Intent(Register.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.dashboard:
                Intent intentDashboard = new Intent(Register.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;


        }


        return super.onOptionsItemSelected(item);
    }


}
