package com.example.esportsplayerfinder;

import android.content.Intent;
import android.os.Bundle;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;

public class MainActivity extends AppCompatActivity {

//    float x1,x2,y1,y2;
    Menu menu;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_landing);


// initialise toolbar in activity.
        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);




        };

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        // Inflate the menu; this adds items to the action bar if it is present.
        this.menu = menu;
        getMenuInflater().inflate(R.menu.menu_profile, menu);
// Checks if the user is logged in and edits menu options
        if(ProfileMan.username==null){
            this.menu.findItem(R.id.myProfile).setVisible(false);
            this.menu.findItem(R.id.logout).setVisible(false);
            this.menu.findItem(R.id.loginOption).setVisible(true);
            this.menu.findItem(R.id.registerOption).setVisible(true);

        }else{
            this.menu.findItem(R.id.myProfile).setVisible(true);
            this.menu.findItem(R.id.logout).setVisible(true);
            this.menu.findItem(R.id.loginOption).setVisible(false);
            this.menu.findItem(R.id.registerOption).setVisible(false);
        }

        return true;
    }

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        // Handle action bar item clicks here.
        switch(item.getItemId()){
            case R.id.myProfile:
                // Redirect to profile page
                Intent intentProfile = new Intent(MainActivity.this, Activity_Profile.class);
                startActivity(intentProfile);;
                return true;
                case R.id.loginOption:
                // Redirect to Login page
                Intent intentLogin = new Intent(MainActivity.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                //Redirect to register page
                Intent intentRegister = new Intent(MainActivity.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.logout:
                //Reset stored information
                ProfileMan.username = null;
                ProfileMan.ID = -1;
                ProfileMan.email = null;
                ProfileMan.token = "";
                //Redirect to register page
                Intent intentDashboard = new Intent(MainActivity.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;


        }


        return super.onOptionsItemSelected(item);
    }

//    public boolean onTouchEvent(MotionEvent touchEvent){
//        switch (touchEvent.getAction()){
//            case MotionEvent.ACTION_DOWN:
//                x1 = touchEvent.getX();
//                y1 = touchEvent.getY();
//                break;
//            case MotionEvent.ACTION_UP:
//                x2 = touchEvent.getX();
//                y2 = touchEvent.getY();
//                if(x1>x2){
//                    Intent i = new Intent(MainActivity.this, FriendsPage.class);
//                    startActivity(i);
//            }
//                break;
//        }
//        return false;
//    }
}