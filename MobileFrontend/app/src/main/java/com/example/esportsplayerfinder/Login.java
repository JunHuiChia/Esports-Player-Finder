package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;

public class Login extends AppCompatActivity {

    private EditText eUsername;
    private EditText ePassword;
    private Button eLogin;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        eUsername = findViewById(R.id.loginUsername);
        ePassword = findViewById(R.id.loginPassword);
        eLogin = findViewById(R.id.btnLogin);

        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);

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
                Intent intentProfile = new Intent(Login.this, FriendsPage.class);
                startActivity(intentProfile);;
                return true;
            case R.id.friendsList:
                Intent intentFriend = new Intent(Login.this, FriendsPage.class);
                startActivity(intentFriend);
                return true;
            case R.id.loginOption:
                // NEED TO CHANGE TO PROFILE PAGE WHEN MADE
                Intent intentLogin = new Intent(Login.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                Intent intentRegister = new Intent(Login.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.dashboard:
                Intent intentDashboard = new Intent(Login.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;


        }


        return super.onOptionsItemSelected(item);
    }



}