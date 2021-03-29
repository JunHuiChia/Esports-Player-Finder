package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

import com.android.volley.AuthFailureError;
import com.android.volley.ClientError;
import com.android.volley.DefaultRetryPolicy;
import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.toolbox.JsonObjectRequest;
import com.android.volley.toolbox.RequestFuture;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;

public class Login extends AppCompatActivity {

    private EditText eEmail;
    private EditText ePassword;
    private Button eLogin;
    private Button registerLink;
    private String password;
    Menu menu;

    @Override
    protected void onCreate(Bundle savedInstanceState)
    {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);

        eEmail = findViewById(R.id.loginEmail);
        ePassword = findViewById(R.id.loginPassword);
        eLogin = findViewById(R.id.btnLogin);
        registerLink = findViewById(R.id.linkToRegister);

        Toolbar myToolbar = (Toolbar) findViewById(R.id.Dashbar);
        setSupportActionBar(myToolbar);
        getSupportActionBar().setLogo(R.drawable.logo6);
        getSupportActionBar().setTitle(R.string.Empty_String);

            eLogin.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {

                    String inputEmail = eEmail.getText().toString();
                    String inputPassword = ePassword.getText().toString();

                    password = inputPassword;

                    if (validPassword(inputPassword) && validEmail(inputEmail)){
                        getToken(inputEmail, inputPassword);
                    }

                }
            });






    }

    private boolean validEmail(String inputEmail) {
        String regex = "^[\\w-_\\.+]*[\\w-_\\.]\\@([\\w]+\\.)+[\\w]+[\\w]$";
        Log.d("email check", "validEmail: " +  inputEmail.matches(regex));
        if (!( inputEmail.matches(regex))){
            Toast.makeText(this, "Email Not Valid:\n Please try again with a valid email", Toast.LENGTH_SHORT).show();
        }
        return inputEmail.matches(regex);
    }

    private boolean validPassword(String inputPassword) {
        if (!(inputPassword.equals(""))){
            Log.d("Valid Password:", "valid Password:" + true);
            return true;
        }else{
            Log.d("Login", "Invalid Password");
            return false;
        }
    }


public void getUserDetails()
{

    RequestQueue queue = Volley.newRequestQueue(Login.this);
    String url = "http://192.168.0.15:80/api/user";
    JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
            (Request.Method.GET, url, null, new Response.Listener<JSONObject>() {

                @Override
                public void onResponse(JSONObject response) {
                    Toast.makeText(Login.this, "works", Toast.LENGTH_SHORT).show();
                    Toast.makeText(Login.this, response.toString(), Toast.LENGTH_LONG).show();
                    Log.d("load up profile suc:", response.toString());
                    try {
                        ProfileMan.ID = (new Integer( response.getString("id")));
                        Log.d("ID:", response.getString("id"));
                        ProfileMan.username = ( response.getString("username"));
                        Log.d("name:", response.getString("username"));
                        ProfileMan.email = ( response.getString("email"));
                        Log.d("email:", response.getString("email"));
                        ProfileMan.password = password;
                        ProfileMan.teams = response.getJSONArray("teams");
                        changeToProfilePage(findViewById(R.id.btnLogin));
                    } catch (JSONException e) {
                        Log.d("login", "onResponse:"+ e.toString());
                    }
                }
            }, new Response.ErrorListener() {

                @Override
                public void onErrorResponse(VolleyError error) {
                    Toast.makeText(Login.this, error.toString(), Toast.LENGTH_LONG).show();
                    Log.e("VOLLEY", "get user details" + error.toString());
                    error.printStackTrace();

                }
            }){
        @Override
        public Map<String, String> getHeaders() throws AuthFailureError {
            Map<String, String>  params = new HashMap<String, String>();
            params.put("Authorization", "Bearer " + ProfileMan.token);
            Log.d("token test", "get token:" + "Bearer " + ProfileMan.token);

            return params;
        }
    };
    jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

    queue.add(jsonObjectRequest);
    Log.d("usrdeats", "getUserDetails: check");
}

    public void getToken(String inputEmail, String inputPassword)
    {
        RequestQueue queue = Volley.newRequestQueue(Login.this);
        String url = "http://192.168.0.15:80/api/sanctum/token";

        HashMap<String, String> params = new HashMap<String, String>();
        params.put("email", inputEmail);
        params.put("password", inputPassword);
        params.put("device_name",  inputEmail + "_mobile");

        JsonObjectRequest jsonObjectRequest = new JsonObjectRequest(Request.Method.POST, url, new JSONObject(params), new Response.Listener<JSONObject>() {
            @Override
            public void onResponse(JSONObject response) {
                Toast.makeText(Login.this, "works", Toast.LENGTH_LONG).show();
                Toast.makeText(Login.this, response.toString(), Toast.LENGTH_LONG).show();
                try {
                    ProfileMan.token = response.getString("token");
                    Log.d("Token check", "Token value - " + ProfileMan.token );
                    getUserDetails();
                } catch (JSONException e) {
                    e.printStackTrace();
                }
            }
        }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                Log.e("VOLLEY", error.toString());
                Toast.makeText(Login.this, "Email or password is incorrect", Toast.LENGTH_SHORT).show();
            }
        }) {
        };

        jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

        queue.add(jsonObjectRequest);
        Log.d("TToken check", "Token value - " + ProfileMan.token );


}

public void changeToRegisterPage(View view) {
    Intent intentRegister = new Intent(Login.this, Register.class);
    startActivity(intentRegister);
}
    public void changeToProfilePage(View view) {
        Intent intentProfile = new Intent(Login.this, Activity_Profile.class);
        startActivity(intentProfile);
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
                Intent intentProfile = new Intent(Login.this, Activity_Profile.class);
                startActivity(intentProfile);;
                return true;
            case R.id.loginOption:
                // Redirect to Login page
                Intent intentLogin = new Intent(Login.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                //Redirect to register page
                Intent intentRegister = new Intent(Login.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.dashboard:
                //Redirect to dashboard
                Intent intentDashboard = new Intent(Login.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;
            case R.id.logout:
                //Reset stored information
                ProfileMan.username = null;
                ProfileMan.ID = -1;
                ProfileMan.email = null;
                ProfileMan.token = "";
                //Redirect to register page
                Intent intentLogout = new Intent(Login.this, MainActivity.class);
                startActivity(intentLogout);
                return true;
            case R.id.accountSettings:
                //Redirect to account settings page
                Intent intentAccountSettings = new Intent(Login.this, Account_Settings.class);
                startActivity(intentAccountSettings);
                return true;
            case R.id.findOrCreateTeam:
                //Redirect to find team page
                Intent intentFindTeam = new Intent(Login.this, Find_Team.class);
                startActivity(intentFindTeam);
                return true;


        }


        return super.onOptionsItemSelected(item);
    }



}