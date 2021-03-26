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

public class Account_Settings extends AppCompatActivity implements AdapterView.OnItemSelectedListener {

    private EditText editEmail;
    private EditText editPassword;
    private EditText editUsername;
    private Button editEmailbtn;
    private Button editPasswordbtn;
    private Button editUsernamebtn;
    private Button setUserGameRolebtn;
    private ArrayList<JSONObject> gamesArrayList = new ArrayList<JSONObject>();
    private String currentGame;
    private String currentRole;
    private int currentRoleID;


    Menu menu;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        getGames();
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_account__settings);

        editEmail = findViewById(R.id.changeEmail);
        editPassword = findViewById(R.id.changePassword);
        editUsername = findViewById(R.id.changeUsername);
        editEmailbtn = findViewById(R.id.updateEmailbtn);
        editPasswordbtn = findViewById(R.id.updatePasswordbtn);
        editUsernamebtn = findViewById(R.id.updateUsernamebtn);
        setUserGameRolebtn = findViewById(R.id.setGameRolebtn);


        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);






        editUsernamebtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String newUsername = editUsername.getText().toString();
                setUsername(newUsername);

            }
        });

        editPasswordbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                String newPassword = editPassword.getText().toString();
                setPassword(newPassword);

            }
        });

        editEmailbtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                String newEmail = editEmail.getText().toString();

                if (validEmail(newEmail)){
                    setEmail(newEmail);
                }

            }
        });

        setUserGameRolebtn.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                try {
                    setUserGameRole();
                } catch (JSONException e) {
                    e.printStackTrace();
                }


            }
        });


    }

    private void setUserGameRole() throws JSONException {

        for (int i = 0; i < gamesArrayList.size(); i++) {
            JSONObject games = gamesArrayList.get(i);

            for (int j = 0; j < games.length(); j++) {
                JSONArray roles = games.getJSONArray("game_roles");
                if (currentRole.equals(roles.getJSONObject(j).getString("name"))){
                    currentRoleID = roles.getJSONObject(j).getInt("id");

                }

                Log.d("role check", "setGameRoleSpinner: role "+ j + roles.getJSONObject(j).getString("name"));
            }

        }

        HashMap<String, Integer> params = new HashMap<>();
        params.put("game_role_id", currentRoleID);

        RequestQueue queue = Volley.newRequestQueue(Account_Settings.this);
        String url = "http://192.168.0.15:80/api/user/gamerole";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.POST, url, new JSONObject(params), new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        Toast.makeText(Account_Settings.this, "works", Toast.LENGTH_SHORT).show();
                        Toast.makeText(Account_Settings.this, response.toString(), Toast.LENGTH_LONG).show();
                        Log.d("Set role suc:", response.toString());


                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Toast.makeText(Account_Settings.this, error.toString(), Toast.LENGTH_LONG).show();
                        Log.e("VOLLEY", "set game role error" + error.toString());
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

    private void getGames() {

        RequestQueue queue = Volley.newRequestQueue(Account_Settings.this);
        String url = "http://192.168.0.15:80/api/games";
        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                    @Override
                    public void onResponse(JSONObject response) {
                        Toast.makeText(Account_Settings.this, "works", Toast.LENGTH_SHORT).show();
                        Toast.makeText(Account_Settings.this, response.toString(), Toast.LENGTH_LONG).show();
                        Log.d("load up games suc:", response.toString());
                        try {
                            JSONArray games = response.getJSONArray("games");
                            Log.d("Log games array", "Games array = " + games.toString());
                            for (int i = 0; i < games.length() ; i++) {
                                gamesArrayList.add(games.getJSONObject(i));
                                Log.d("array","array"+gamesArrayList.toString());

                                Log.d("game "+i+" roles", games.getJSONObject(i).getJSONArray("game_roles").getJSONObject(i).toString());


                            }
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                        try {
                            setGameSpinner();
                            setGameRoleSpinner();
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }

                    }
                }, new Response.ErrorListener() {

                    @Override
                    public void onErrorResponse(VolleyError error) {
                        Toast.makeText(Account_Settings.this, error.toString(), Toast.LENGTH_LONG).show();
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

    private void setGameRoleSpinner() throws JSONException {
        // Create dropdown menu for choosing a game
        Spinner spinner = findViewById(R.id.gameRoleSelection);


        List<String> gameChoices = new ArrayList<String>();
        for (int i = 0; i < gamesArrayList.size(); i++) {
            JSONObject games = gamesArrayList.get(i);

            for (int j = 0; j < games.length(); j++) {
                JSONArray roles = games.getJSONArray("game_roles");
                gameChoices.add(roles.getJSONObject(j).getString("name"));
                Log.d("role check ", "setGameRoleSpinner: role "+ j + roles.getJSONObject(j).getString("name"));
            }

        }
        ArrayAdapter<String> dataAdapter = new ArrayAdapter<String>(this, android.R.layout.simple_spinner_item, gameChoices);
        dataAdapter.setDropDownViewResource(android.R.layout.simple_spinner_dropdown_item);
        spinner.setAdapter(dataAdapter);
        spinner.setOnItemSelectedListener(Account_Settings.this);

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
        spinner.setOnItemSelectedListener(Account_Settings.this);
    }


    private void setEmail(String newEmail) {
        RequestQueue queue = Volley.newRequestQueue(Account_Settings.this);
        String url = "http://192.168.0.15:80/api/users";

        HashMap<String, String> params = new HashMap<String, String>();
        params.put("email", newEmail);
        params.put("password", ProfileMan.password);
        params.put("username", ProfileMan.username);

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, url, new JSONObject(params), new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Toast.makeText(Account_Settings.this, "works", Toast.LENGTH_LONG).show();
                Toast.makeText(Account_Settings.this, response.toString(), Toast.LENGTH_LONG).show();
                ProfileMan.password = newEmail;

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("VOLLEY", error.toString());
                Toast.makeText(Account_Settings.this, "Email or password is incorrect", Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String>  params = new HashMap<String, String>();
                params.put("X-HTTP-Method-Override","PATCH");
                params.put("Authorization", "Bearer " + ProfileMan.token);
                params.put("Content-Type", "application/json");
                params.put("Accept", "application/json");

                return params;
            }
        };

        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

        queue.add(jsonObjectRequest);
    }

    private void setPassword(String newPassword) {
        RequestQueue queue = Volley.newRequestQueue(Account_Settings.this);
        String url = "http://192.168.0.15:80/api/users";

        HashMap<String, String> params = new HashMap<String, String>();
        params.put("email", ProfileMan.email);
        params.put("password", newPassword);
        params.put("username", ProfileMan.username);

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, url, new JSONObject(params), new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Toast.makeText(Account_Settings.this, "works", Toast.LENGTH_LONG).show();
                Toast.makeText(Account_Settings.this, response.toString(), Toast.LENGTH_LONG).show();
                ProfileMan.password = newPassword;

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("VOLLEY", error.toString());
                Toast.makeText(Account_Settings.this, "Email or password is incorrect", Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String>  params = new HashMap<String, String>();
                params.put("X-HTTP-Method-Override","PATCH");
                params.put("Authorization", "Bearer " + ProfileMan.token);
                params.put("Content-Type", "application/json");
                params.put("Accept", "application/json");

                return params;
            }
        };

        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

        queue.add(jsonObjectRequest);
    }

    private void setUsername(String newUsername) {

        RequestQueue queue = Volley.newRequestQueue(Account_Settings.this);
        String url = "http://192.168.0.15:80/api/users";

        HashMap<String, String> params = new HashMap<String, String>();
        params.put("email", ProfileMan.email);
        params.put("password", ProfileMan.password);
        params.put("username", newUsername);

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, url, new JSONObject(params), new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Toast.makeText(Account_Settings.this, "works", Toast.LENGTH_LONG).show();
                Toast.makeText(Account_Settings.this, response.toString(), Toast.LENGTH_LONG).show();
                ProfileMan.username = newUsername;

            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("VOLLEY", error.toString());
                Toast.makeText(Account_Settings.this, "Email or password is incorrect", Toast.LENGTH_SHORT).show();
            }
        }) {
            @Override
            public Map<String, String> getHeaders() throws AuthFailureError {
                Map<String, String>  params = new HashMap<String, String>();
                params.put("X-HTTP-Method-Override","PATCH");
                params.put("Authorization", "Bearer " + ProfileMan.token);
                params.put("Content-Type", "application/json");
                params.put("Accept", "application/json");

                return params;
            }
        };

        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

        queue.add(jsonObjectRequest);
    }

    private boolean validEmail(String inputEmail) {
        String regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
        Log.d("email check", "validEmail: " +  inputEmail.matches(regex));
        if (!( inputEmail.matches(regex))){
            Toast.makeText(this, "Email Not Valid:\n Please try again with a valid email", Toast.LENGTH_SHORT).show();
        }
        return inputEmail.matches(regex);
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
                Intent intentProfile = new Intent(Account_Settings.this, Activity_Profile.class);
                startActivity(intentProfile);;
                return true;
            case R.id.loginOption:
                // Redirect to Login page
                Intent intentLogin = new Intent(Account_Settings.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                //Redirect to register page
                Intent intentRegister = new Intent(Account_Settings.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.dashboard:
                //Redirect to dashboard
                Intent intentDashboard = new Intent(Account_Settings.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;
            case R.id.logout:
                //Reset stored information
                ProfileMan.username = null;
                ProfileMan.ID = -1;
                ProfileMan.email = null;
                ProfileMan.token = "";
                //Redirect to register page
                Intent intentLogout = new Intent(Account_Settings.this, MainActivity.class);
                startActivity(intentLogout);
                return true;
            case R.id.accountSettings:
                //Redirect to account settings page
                Intent intentAccountSettings = new Intent(Account_Settings.this, Account_Settings.class);
                startActivity(intentAccountSettings);
                return true;
            case R.id.findTeam:
                //Redirect to find team page
                Intent intentFindTeam = new Intent(Account_Settings.this, Find_Team.class);
                startActivity(intentFindTeam);
                return true;


        }



        return super.onOptionsItemSelected(item);
    }


    @Override
    public void onItemSelected(AdapterView<?> parent, View view, int position, long id) {
        // On selecting a spinner item
        String item = parent.getItemAtPosition(position).toString();

        // Showing selected spinner item
        Toast.makeText(parent.getContext(), "Selected: " + item, Toast.LENGTH_LONG).show();

        currentRole = item;
    }
    public void onNothingSelected(AdapterView<?> arg0) {
      // add nothing selected
    }
}