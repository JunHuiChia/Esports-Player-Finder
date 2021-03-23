package com.example.esportsplayerfinder;

import android.app.Activity;
import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import org.json.JSONObject;

public class LoginResponseListener {
    public void onResponse(String response) {
        Log.d("works", "Works: ");
        ProfileMan.token = response;
        Log.d("Token check", "Token value - " + ProfileMan.token );
    }
}
