package com.example.esportsplayerfinder;

import android.util.Patterns;
import android.widget.EditText;

public class InputValidation {

    public static boolean validate_email(EditText input_email) {

        boolean valid = true;
        String email = input_email.getText().toString();

        if (email.isEmpty() || !Patterns.EMAIL_ADDRESS.matcher(email).matches()) {
            input_email.setError("Enter a valid email address");
            valid = false;
        } else { input_email.setError(null); }

        return valid;
    }

    public static boolean validate_password(EditText input_password) {

        boolean valid = true;
        String password = input_password.getText().toString();

        if (password.isEmpty() || password.length() < 8 || password.length() > 20){
            input_password.setError("Password must be between 8 and 20 characters");
            valid = false;
        } else { input_password.setError(null); }

        return valid;
    }
}
