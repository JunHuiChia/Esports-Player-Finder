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
import android.widget.ImageView;
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

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.IllegalFormatCodePointException;
import java.util.Map;

public class Find_Team extends AppCompatActivity {

    Menu menu;

    private Button createNewTeambtn;

    private TextView firstTeamName;
    private TextView firstGameName;
    private Button firstTeambtn;
    private ImageView firstBackground;

    private TextView secondTeamName;
    private TextView secondGameName;
    private Button secondTeambtn;
    private ImageView secondBackground;

    private TextView thirdTeamName;
    private TextView thirdGameName;
    private Button thirdTeambtn;
    private ImageView thirdBackground;

    private TextView fourthTeamName;
    private TextView fourthGameName;
    private Button fourthTeambtn;
    private ImageView fourthBackground;

    private Button nextPagebtn;
    private TextView pageNumber;
    private  Button prevPagebtn;

    public int page = 0;





    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_find__team);

        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);

        createNewTeambtn = findViewById(R.id.createTeambtn);

        firstTeamName = (TextView)findViewById(R.id.firstTeamInListName);
        firstGameName = (TextView)findViewById(R.id.firstTeamInListGame);
        firstTeambtn = findViewById(R.id.joinFirstTeam);
        firstBackground = findViewById(R.id.firstTeamBackground);

        secondTeamName = (TextView)findViewById(R.id.secondTeamInListName);
        secondGameName = (TextView)findViewById(R.id.secondTeamInListGame);
        secondTeambtn = findViewById(R.id.joinSecondTeam);
        secondBackground = findViewById(R.id.secondTeamBackground);

        thirdTeamName = (TextView)findViewById(R.id.thirdTeamInListName);
        thirdGameName = (TextView)findViewById(R.id.thirdTeamInListGame);
        thirdTeambtn = findViewById(R.id.joinThirdTeam);
        thirdBackground = findViewById(R.id.thirdTeamBackground);

        fourthTeamName = (TextView)findViewById(R.id.fourthTeamInListName);
        fourthGameName = (TextView)findViewById(R.id.fourthTeamInListGame);
        fourthTeambtn = findViewById(R.id.joinFourthTeam);
        fourthBackground = findViewById(R.id.fourthTeamBackground);

        nextPagebtn = findViewById(R.id.nextPagebtn);
        pageNumber = findViewById(R.id.pageNumbertxt);
        prevPagebtn = findViewById(R.id.prevPagebtn);

        getNextPageOfTeams();

        if (page == 0){
            prevPagebtn.setVisibility(prevPagebtn.INVISIBLE);
        }

        createNewTeambtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                Intent intentCreateTeam = new Intent(Find_Team.this, Create_Team.class);
                startActivity(intentCreateTeam);
            }
        });

        nextPagebtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                page++;
                getNextPageOfTeams();
                pageNumber.setText(String.valueOf(page+1));
                prevPagebtn.setVisibility(prevPagebtn.VISIBLE);

            }
        });

        prevPagebtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                page--;
                getNextPageOfTeams();
                pageNumber.setText(String.valueOf(page+1));

                if (page == 0){
                    prevPagebtn.setVisibility(prevPagebtn.INVISIBLE);
                }

            }
        });

        firstTeambtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

            }
        });

    }

    private void getNextPageOfTeams() {

        for (int i = ((page*4) + 1); i < ((page*4) + 5); i++) {


            RequestQueue queue = Volley.newRequestQueue(Find_Team.this);
            String url = "http://192.168.0.15:80/api/teams?id="+ i;
            int finalI = i;
            JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                    (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                        @Override
                        public void onResponse(JSONObject response) {
                            Log.d("finalI check", "onResponse: " + finalI);
                            Log.d("response check", "onResponse: " + response.toString());

                            if ((finalI - 1)%4 == 0){
                                try {
                                    setFirstTeamDetails(response);
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }else if ((finalI - 2)%4 == 0){
                                try {
                                    setSecondTeamDetails(response);
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }

                            }else if ((finalI - 3)%4 == 0){
                                try {
                                    setThirdTeamDetails(response);
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }else if ((finalI - 4)%4 == 0){
                                try {
                                    setFourthTeamDetails(response);
                                } catch (JSONException e) {
                                    e.printStackTrace();
                                }
                            }




                        }
                    }, new Response.ErrorListener() {

                        @Override
                        public void onErrorResponse(VolleyError error) {
                            Toast.makeText(Find_Team.this, error.toString(), Toast.LENGTH_LONG).show();
                            Log.e("VOLLEY", "get team " + finalI + " " + error.toString());
                            error.printStackTrace();

                            Log.d("Maths", "onErrorResponse: " + (finalI - 2)%4);

                            if ((finalI - 2)%4 == 0){

                                    removeSecondTeamDetails();


                            }else if ((finalI - 3)%4 == 0){

                                removeThirdTeamDetails();

                            }else if ((finalI - 4)%4 == 0){

                                removeFourthTeamDetails();

                            }


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

    private void removeFourthTeamDetails() {
        fourthGameName.setVisibility(secondGameName.INVISIBLE);
        fourthBackground.setVisibility(secondBackground.INVISIBLE);
        fourthTeambtn.setVisibility(secondTeambtn.INVISIBLE);
        fourthTeamName.setVisibility(secondTeamName.INVISIBLE);
    }

    private void removeThirdTeamDetails() {
        thirdGameName.setVisibility(secondGameName.INVISIBLE);
        thirdBackground.setVisibility(secondBackground.INVISIBLE);
        thirdTeambtn.setVisibility(secondTeambtn.INVISIBLE);
        thirdTeamName.setVisibility(secondTeamName.INVISIBLE);
    }

    private void removeSecondTeamDetails() {

        secondGameName.setVisibility(secondGameName.INVISIBLE);
        secondBackground.setVisibility(secondBackground.INVISIBLE);
        secondTeambtn.setVisibility(secondTeambtn.INVISIBLE);
        secondTeamName.setVisibility(secondTeamName.INVISIBLE);


    }

    private void setFourthTeamDetails(JSONObject response) throws JSONException {

        fourthGameName.setVisibility(fourthGameName.VISIBLE);
        fourthBackground.setVisibility(fourthBackground.VISIBLE);
        fourthTeambtn.setVisibility(fourthTeambtn.VISIBLE);
        fourthTeamName.setVisibility(fourthTeamName.VISIBLE);

        JSONObject team = response.getJSONObject("Team");

        fourthTeamName.setText(team.getString("name"));
        fourthGameName.setText(team.getJSONObject("game").getString("name"));
    }

    private void setThirdTeamDetails(JSONObject response) throws JSONException {
        thirdGameName.setVisibility(thirdGameName.VISIBLE);
        thirdBackground.setVisibility(thirdBackground.VISIBLE);
        thirdTeambtn.setVisibility(thirdTeambtn.VISIBLE);
        thirdTeamName.setVisibility(thirdTeamName.VISIBLE);

        JSONObject team = response.getJSONObject("Team");

        thirdTeamName.setText(team.getString("name"));
        thirdGameName.setText(team.getJSONObject("game").getString("name"));
    }

    private void setFirstTeamDetails(JSONObject response) throws JSONException {


        JSONObject team = response.getJSONObject("Team");

        firstTeamName.setText(team.getString("name"));
        firstGameName.setText(team.getJSONObject("game").getString("name"));
    }


    private void setSecondTeamDetails(JSONObject response) throws JSONException {

        secondGameName.setVisibility(secondGameName.VISIBLE);
        secondBackground.setVisibility(secondBackground.VISIBLE);
        secondTeambtn.setVisibility(secondTeambtn.VISIBLE);
        secondTeamName.setVisibility(secondTeamName.VISIBLE);

        JSONObject team = response.getJSONObject("Team");

        secondTeamName.setText(team.getString("name"));
        secondGameName.setText(team.getJSONObject("game").getString("name"));
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
            case R.id.findOrCreateTeam:
                //Redirect to find team page
                Intent intentFindTeam = new Intent(Find_Team.this, Find_Team.class);
                startActivity(intentFindTeam);
                return true;
            case R.id.myTeams:
                //Redirect to find team page
                Intent intentMyTeams = new Intent(Find_Team.this, My_Teams.class);
                startActivity(intentMyTeams);
                return true;


        }



        return super.onOptionsItemSelected(item);
    }
}