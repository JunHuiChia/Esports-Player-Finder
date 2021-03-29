package com.example.esportsplayerfinder;

import android.content.res.Resources;
import android.view.Menu;
import android.widget.Button;
import android.widget.EditText;

import androidx.appcompat.app.AppCompatDelegate;
import androidx.collection.SimpleArrayMap;
import androidx.collection.SparseArrayCompat;
import androidx.core.app.ComponentActivity;
import androidx.fragment.app.FragmentController;
import androidx.lifecycle.LifecycleRegistry;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.*;

public class LoginTest {

    @InjectMocks
    Login login;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test(expected = NullPointerException.class)
    public void testValidPassword_NullPassword() throws Exception {
        boolean result = login.validPassword(null);
        Assert.assertEquals(null, result);
    }

    @Test
    public void testValidPassword_EmptyPassword() throws Exception {
        boolean result = login.validPassword("");
        Assert.assertEquals(false, result);
    }

    @Test
    public void testValidPassword_GoodPassword() throws Exception {
        boolean result = login.validPassword("Password");
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testValidEmail_NullEmail() throws Exception {

        boolean result = login.validEmail("email");
        Assert.assertEquals(false, result);
    }

    @Test(expected = NullPointerException.class)
    public void testValidEmail_EmptyEmail() throws Exception {
        boolean result = login.validEmail("");
        Assert.assertEquals(false, result);
    }

    @Test
    public void testValidEmail_GoodEmail() throws Exception {
        boolean result = login.validEmail("email@gmail.com");
        Assert.assertEquals(true, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme