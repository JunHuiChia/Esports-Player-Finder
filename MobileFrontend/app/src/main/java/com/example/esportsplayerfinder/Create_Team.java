package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Spinner;
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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Create_Team extends AppCompatActivity implements AdapterView.OnItemSelectedListener{

    private EditText teamName;
    private EditText teamDescription;
    private EditText teamDiscordCode;
    private Button createNewTeambtn;

    private ArrayList<JSONObject> gamesArrayList = new ArrayList<JSONObject>();
    private String currentGame;
    private int currentGameID;
    
    Menu menu;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_create__team);

        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);


        teamName = findViewById(R.id.teamName);
        teamDescription = findViewById(R.id.teamDescription);
        teamDiscordCode = findViewById(R.id.teamDiscordCode);
        createNewTeambtn = findViewById(R.id.btnCreateTeam);

        getGames();

        createNewTeambtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String newTeamName = teamName.getText().toString();
                String newTeamDescription = teamDescription.getText().toString();
                String newTeamDiscordCode = teamDiscordCode.getText().toString();

                try {
                    createNewTeam(newTeamName,newTeamDescription,newTeamDiscordCode);
                } catch (JSONException e) {
                    e.printStackTrace();
                }

            }
        });
    }

    private void createNewTeam(String newTeamName, String newTeamDescription, String newTeamDiscordCode) throws JSONException {

        RequestQueue queue = Volley.newRequestQueue(Create_Team.this);
        String url = "http://192.168.0.15:80/api/teams";

        getGameID();


        Map params = new HashMap();
        params.put("name", newTeamName);
        params.put("description", newTeamDescription);
        params.put("discord_channel_id",  newTeamDiscordCode);
        params.put("game_id", currentGameID);
        Log.d("params check", "Params: " + params);

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, url, new JSONObject(params), new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Toast.makeText(Create_Team.this, "works", Toast.LENGTH_LONG).show();
                Toast.makeText(Create_Team.this, response.toString(), Toast.LENGTH_LONG).show();

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("VOLLEY", error.toString());
                Toast.makeText(Create_Team.this, "Details are incorrectly entered", Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String>  params = new HashMap<String, String>();
                params.put("Authorization", "Bearer " + ProfileMan.token);
                params.put("Content-Type", "application/json");
                params.put("Accept", "application/json");
                Log.d("token test", "get token:" + "Bearer " + ProfileMan.token);

                return params;
            }
        };

        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

        queue.add(jsonObjectRequest);
        Log.d("TToken check", "Token value - " + ProfileMan.token );
    }

    private void getGameID() throws JSONException {
        List<String> gameChoices = new ArrayList<String>();
        for (int i = 0; i < gamesArrayList.size(); i++) {
            gameChoices.add(gamesArrayList.get(i).getString("name"));
            if (gameChoices.get(i).equals(currentGame)){
                currentGameID = gamesArrayList.get(i).getInt("id");

            }

        }

    }

    private void getGames() {

        RequestQueue queue = Volley.newRequestQueue(Create_Team.this);
        String url = "http://192.168.0.15:80/api/games";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        Toast.makeText(Create_Team.this, "works", Toast.LENGTH_SHORT).show();
                        Toast.makeText(Create_Team.this, response.toString(), Toast.LENGTH_LONG).show();
                        Log.d("load up games suc:", response.toString());
                        try {
                            JSONArray games = response.getJSONArray("games");
                            Log.d("Log games array", "Games array = " + games.toString());
                            for (int i = 0; i < games.length() ; i++) {
                                gamesArrayList.add(games.getJSONObject(i));
                                Log.d("array","array"+gamesArrayList.toString());

                                Log.d("game "+i+" roles", games.getJSONObject(i).getJSONArray("game_roles").getJSONObject(i).toString());

                                setGameSpinner();

                            }
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }


                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Toast.makeText(Create_Team.this, error.toString(), Toast.LENGTH_LONG).show();
                        Log.e("VOLLEY", "get games details" + error.toString());
                        error.printStackTrace();

                    }
                }){
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String>  params = new HashMap<String, String>();
                params.put("Authorization", "Bearer " + ProfileMan.token);
                params.put("Content-Type", "application/json");
                params.put("Accept", "application/json");
                Log.d("token test", "get token:" + "Bearer " + ProfileMan.token);

                return params;
            }
        };
        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

        queue.add(jsonObjectRequest);
    }

    private void setGameSpinner() throws JSONException {

        // Create dropdown menu for choosing a game
        Spinner spinner = findViewById(R.id.gameSelection);
        List<String> gameChoices = new ArrayList<String>();
        for (int i = 0; i < gamesArrayList.size(); i++) {
            gameChoices.add(gamesArrayList.get(i).getString("name"));

        }
        ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, gameChoices);
        dataAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(dataAdapter);
        spinner.setOnItemSelectedListener(Create_Team.this);
    }

    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        // On selecting a spinner item
        String item = parent.getItemAtPosition(position).toString();

        // Showing selected spinner item
        Toast.makeText(parent.getContext(), "Selected: " + item, Toast.LENGTH_LONG).show();
        
        currentGame = item;

    }
    public void onNothingSelected(AdapterView<?> arg0) {
        // add nothing selected
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
                Intent intentProfile = new Intent(Create_Team.this, Activity_Profile.class);
                startActivity(intentProfile);;
                return true;
            case R.id.loginOption:
                // Redirect to Login page
                Intent intentLogin = new Intent(Create_Team.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                //Redirect to register page
                Intent intentRegister = new Intent(Create_Team.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.dashboard:
                //Redirect to dashboard
                Intent intentDashboard = new Intent(Create_Team.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;
            case R.id.logout:
                //Reset stored information
                ProfileMan.username = null;
                ProfileMan.ID = -1;
                ProfileMan.email = null;
                ProfileMan.token = "";
                //Redirect to register page
                Intent intentLogout = new Intent(Create_Team.this, MainActivity.class);
                startActivity(intentLogout);
                return true;
            case R.id.accountSettings:
                //Redirect to account settings page
                Intent intentAccountSettings = new Intent(Create_Team.this, Account_Settings.class);
                startActivity(intentAccountSettings);
                return true;
            case R.id.findOrCreateTeam:
                //Redirect to find team page
                Intent intentFindTeam = new Intent(Create_Team.this, Find_Team.class);
                startActivity(intentFindTeam);
                return true;
            case R.id.myTeams:
                //Redirect to find team page
                Intent intentMyTeams = new Intent(Create_Team.this, My_Teams.class);
                startActivity(intentMyTeams);
                return true;


        }



        return super.onOptionsItemSelected(item);
    }
}
