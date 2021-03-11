package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.widget.TextView;

public class Activity_Profile extends AppCompatActivity {

    private TextView usernameTextView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity__profile);



        usernameTextView = findViewById(R.id.username);
        usernameTextView.setText(ProfileMan.username);
        Log.d("Username test:", ProfileMan.username);

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
                Intent intentProfile = new Intent(Activity_Profile.this, Activity_Profile.class);
                startActivity(intentProfile);;
                return true;
            case R.id.friendsList:
                Intent intentFriend = new Intent(Activity_Profile.this, FriendsPage.class);
                startActivity(intentFriend);
                return true;
            case R.id.loginOption:
                // NEED TO CHANGE TO PROFILE PAGE WHEN MADE
                Intent intentLogin = new Intent(Activity_Profile.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                Intent intentRegister = new Intent(Activity_Profile.this, Register.class);
                startActivity(intentRegister);
                return true;


        }


        return super.onOptionsItemSelected(item);
    }
}