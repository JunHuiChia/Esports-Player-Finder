package com.example.esportsplayerfinder;

import android.util.Pair;
import android.util.Patterns;
import android.widget.EditText;

import org.jetbrains.annotations.NotNull;

import java.util.regex.Pattern;

public class InputValidationString {

    public static boolean validate_email(String email) {

        boolean valid = true;

        if (email.isEmpty() || !Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            valid = false;
        }

        return valid;
    }

    public static boolean validate_password(String password) {

        boolean valid = true;

        if (password.isEmpty() || password.length() < 8 || password.length() > 20){
            valid = false;
        }

        return valid;
    }
}
