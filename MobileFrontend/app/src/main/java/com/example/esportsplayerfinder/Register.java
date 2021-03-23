package com.example.esportsplayerfinder;

import androidx.appcompat.app.AppCompatActivity;
import androidx.appcompat.widget.Toolbar;

import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.Menu;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.widget.Button;
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
import com.google.android.material.textfield.TextInputEditText;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.HashMap;
import java.util.Map;


public class Register extends AppCompatActivity {

    TextInputEditText regInputUsername, regInputEmail, regInputPassword;
    Button buttonRegister;
    TextView textViewLogin;
    Menu menu;

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


        buttonRegister.setOnClickListener(new View.OnClickListener()
        {
            @Override
            public void onClick(View v) {
                String inputUsername = regInputUsername.getText().toString();
                String inputPassword = regInputPassword.getText().toString();
                String inputEMail = regInputEmail.getText().toString();

                if (validUsername(inputUsername) && validPassword(inputPassword)){


                }

                if (validUsername(inputUsername) && validPassword(inputPassword))
                {

                    JSONObject object = new JSONObject();
                    try {
                        object.put("username", inputUsername);
                        object.put("email", inputEMail);
                        object.put("password", inputPassword);
                    } catch (JSONException e) {
                        e.printStackTrace();
                    }


                    RequestQueue queue = Volley.newRequestQueue(Register.this);
                    String url = "http://192.168.0.15:80/api/register";
                    JsonObjectRequest jsonObjectRequest = new JsonObjectRequest
                            (Request.Method.POST, url, object, new Response.Listener<JSONObject>() {

                                @Override
                                public void onResponse(JSONObject response) {
                                    Toast.makeText(Register.this, "works", Toast.LENGTH_LONG).show();
                                    Toast.makeText(Register.this, response.toString(), Toast.LENGTH_LONG).show();

                                }
                            }, new Response.ErrorListener() {

                                @Override
                                public void onErrorResponse(VolleyError error) {

                                    Toast.makeText(Register.this, error.toString(), Toast.LENGTH_LONG).show();
                                    Log.d("load up profile error:", error.toString());
                                    error.printStackTrace();

                                }
                            }){
                        @Override
                        public Map<String, String> getHeaders() throws AuthFailureError {
                            Map<String, String>  params = new HashMap<String, String>();
                            params.put("Authorization", "Bearer " + ProfileMan.token);
                            params.put("Content-Type", "application/json");
                            params.put("Accept", "application/json");

                            return params;
                        }
                    };
                    jsonObjectRequest.setRetryPolicy(new DefaultRetryPolicy(20 * 1000, 2, DefaultRetryPolicy.DEFAULT_BACKOFF_MULT));

                    queue.add(jsonObjectRequest);
                }





            }
        });

    }

    public void changeToProfilePage(View view) {
        Intent intentProfile = new Intent(Register.this, Activity_Profile.class);
        startActivity(intentProfile);
    }

    private boolean validPassword(String inputPassword) {
        if (!(inputPassword.equals(""))){
            if (Character.isUpperCase(inputPassword.charAt(0))){
                Log.d("Valid Password:", "valid Password");
                return true;
            }
        }else{
            return false;
        }
        return false;
    }

    private boolean validUsername(String inputUsername) {
        if (inputUsername.equals("")){
            return false;
        }else if (inputUsername.length() < 4){
            return false;
        }else {
            Log.d("Valid Username:", "valid Username");
            return true;
        }
    }

    public void changeToLoginPage(View view) {
        Intent intentLogin = new Intent(Register.this, Login.class);
        startActivity(intentLogin);
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
                Intent intentProfile = new Intent(Register.this, Activity_Profile.class);
                startActivity(intentProfile);;
                return true;
            case R.id.loginOption:
                // Redirect to Login page
                Intent intentLogin = new Intent(Register.this, Login.class);
                startActivity(intentLogin);;
                return true;
            case R.id.registerOption:
                //Redirect to register page
                Intent intentRegister = new Intent(Register.this, Register.class);
                startActivity(intentRegister);
                return true;
            case R.id.dashboard:
                //Redirect to dashboard
                Intent intentDashboard = new Intent(Register.this, MainActivity.class);
                startActivity(intentDashboard);
                return true;
            case R.id.logout:
                //Reset stored information
                ProfileMan.username = null;
                ProfileMan.ID = -1;
                ProfileMan.email = null;
                ProfileMan.token = "";
                //Redirect to register page
                Intent intentLogout = new Intent(Register.this, MainActivity.class);
                startActivity(intentLogout);
                return true;
            case R.id.accountSettings:
                //Redirect to dashboard
                Intent intentAccountSettings = new Intent(Register.this, Account_Settings.class);
                startActivity(intentAccountSettings);
                return true;


        }


        return super.onOptionsItemSelected(item);
    }


}
