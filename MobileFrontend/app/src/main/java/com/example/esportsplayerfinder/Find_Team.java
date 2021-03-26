package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.os.TestLooperManager;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.LinearLayout;
import android.widget.TextView;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;

public class Find_Team extends AppCompatActivity {

    Menu menu;
    LinearLayout linearLayout;
    int pageNumber = 0;

    private Button createNewTeambtn;

    private TextView firstTeamName;
    private TextView firstGameName;
    private Button firstTeambtn;
    private TextView secondTeamName;
    private TextView secondGameName;
    private Button secondTeambtn;
    private TextView thirdTeamName;
    private TextView thirdGameName;
    private Button thirdTeambtn;
    private TextView fourthTeamName;
    private TextView fourthGameName;
    private Button fourthTeambtn;

    private Button nextPagebtn;
    private  Button prevPagebtn;





    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find__team);

        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);

        createNewTeambtn = findViewById(R.id.createTeambtn);

        firstTeamName = findViewById(R.id.firstTeamInListName);
        firstGameName = findViewById(R.id.firstTeamInListGame);
        firstTeambtn = findViewById(R.id.joinFirstTeam);

        secondTeamName = findViewById(R.id.secondTeamInListName);
        secondGameName = findViewById(R.id.secondTeamInListGame);
        secondTeambtn = findViewById(R.id.joinSecondTeam);

        thirdTeamName = findViewById(R.id.thirdTeamInListName);
        thirdGameName = findViewById(R.id.thirdTeamInListGame);
        thirdTeambtn = findViewById(R.id.joinThirdTeam);

        fourthTeamName = findViewById(R.id.fourthTeamInListName);
        fourthGameName = findViewById(R.id.fourthTeamInListGame);
        fourthTeambtn = findViewById(R.id.joinFourthTeam);

        nextPagebtn = findViewById(R.id.nextPagebtn);
        prevPagebtn = findViewById(R.id.prevPagebtn);

        getNextPageOfTeams();

        createNewTeambtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intentCreateTeam = new Intent(Find_Team.this, Create_Team.class);
                startActivity(intentCreateTeam);
            }
        });

    }

    private void getNextPageOfTeams() {

        for (int i = 1; i < 5; i++) {

            HashMap<String, Integer> params = new HashMap<>();
            params.put("id", i);

            RequestQueue queue = Volley.newRequestQueue(Find_Team.this);
            String url = "http://192.168.0.15:80/api/teams";
            int finalI = i;
            JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                    (Request.Method.GET, url, new JSONObject(params), new Response.Listener<JSONObject>() {

                        @Override
                        public void onResponse(JSONObject response) {

                            if (finalI == 1 ){
                                setFirstTeamDetails(response);
                            }else if (finalI == 2){
                                setSecondTeamDetails();

                            }



                        }
                    }, new Response.ErrorListener() {

                        @Override
                        public void onErrorResponse(VolleyError error) {
                            Toast.makeText(Find_Team.this, error.toString(), Toast.LENGTH_LONG).show();
                            Log.e("VOLLEY", "get teams" + error.toString());
                            error.printStackTrace();

                        }
                    }) {
                @Override
                public Map<String, String> getHeaders() throws AuthFailureError {
                    Map<String, String> params = new HashMap<String, String>();
                    params.put("Content-Type", "application/json");
                    params.put("Accept", "application/json");
                    Log.d("token test", "get token:" + "Bearer " + ProfileMan.token);

                    return params;
                }
            };
            jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

            queue.add(jsonObjectRequest);
            Log.d("team details", "getTeamDetails: check");

        }





    }

    private void setFirstTeamDetails(JSONObject response) {

    }


    private void setSecondTeamDetails() {
    }






    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        this.menu = menu;
        // Inflate the menu; this adds items to the action bar if it is present.
        getMenuInflater().inflate(R.menu.menu_profile, menu);
// Checks if the user is logged in and edits menu options
        if(ProfileMan.username==null){
            this.menu.findItem(R.id.myProfile).setVisible(false);
            this.menu.findItem(R.id.accountSettings).setVisible(false);
            this.menu.findItem(R.id.logout).setVisible(false);
            this.menu.findItem(R.id.loginOption).setVisible(true);
            this.menu.findItem(R.id.registerOption).setVisible(true);
        }else{
            this.menu.findItem(R.id.myProfile).setVisible(true);
            this.menu.findItem(R.id.accountSettings).setVisible(true);
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
                Intent intentProfile = new Intent(Find_Team.this, Activity_Profile.class);
                startActivity(intentProfile);;
                return true;
            case R.id.loginOption:
                // Redirect to Login page
                Intent intentLogin = new Intent(Find_Team.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                //Redirect to register page
                Intent intentRegister = new Intent(Find_Team.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.dashboard:
                //Redirect to dashboard
                Intent intentDashboard = new Intent(Find_Team.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;
            case R.id.logout:
                //Reset stored information
                ProfileMan.username = null;
                ProfileMan.ID = -1;
                ProfileMan.email = null;
                ProfileMan.token = "";
                //Redirect to register page
                Intent intentLogout = new Intent(Find_Team.this, MainActivity.class);
                startActivity(intentLogout);
                return true;
            case R.id.accountSettings:
                //Redirect to account settings page
                Intent intentAccountSettings = new Intent(Find_Team.this, Account_Settings.class);
                startActivity(intentAccountSettings);
                return true;
            case R.id.findTeam:
                //Redirect to find team page
                Intent intentFindTeam = new Intent(Find_Team.this, Find_Team.class);
                startActivity(intentFindTeam);
                return true;


        }



        return super.onOptionsItemSelected(item);
    }
}