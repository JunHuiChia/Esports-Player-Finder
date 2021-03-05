package com.example.esportsplayerfinder;

import android.graphics.Color;
import android.graphics.drawable.ColorDrawable;
import android.os.Bundle;

import androidx.annotation.ColorInt;
import androidx.appcompat.app.ActionBar;
import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;
import androidx.viewpager2.widget.CompositePageTransformer;
import androidx.viewpager2.widget.MarginPageTransformer;
import androidx.viewpager2.widget.ViewPager2;

import android.view.Menu;
import android.view.MenuItem;
import android.view.View;

public class MainActivity extends AppCompatActivity {

    ViewPager2 viewPager;



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_landing);



        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);











        };

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
                setContentView(R.layout.activity_landing);
                return true;
            case R.id.friendsList:
                // NEED TO CHANGE TO FRIENDS LIST WHEN MADE
                setContentView(R.layout.activity_landing);
                return true;

        }


        return super.onOptionsItemSelected(item);
    }
}