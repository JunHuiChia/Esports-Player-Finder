package com.example.esportsplayerfinder;

import android.content.res.Resources;
import android.view.Menu;
import android.widget.Button;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatDelegate;
import androidx.collection.SimpleArrayMap;
import androidx.collection.SparseArrayCompat;
import androidx.core.app.ComponentActivity;
import androidx.fragment.app.FragmentController;
import androidx.lifecycle.LifecycleRegistry;
import androidx.lifecycle.ViewModelProvider;
import androidx.lifecycle.ViewModelStore;

import com.google.android.material.textfield.TextInputEditText;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import static org.mockito.Mockito.*;

public class RegisterTest {

    @InjectMocks
    Register register;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreate() throws Exception {
        register.onCreate(null);
    }

    @Test
    public void testChangeToProfilePage() throws Exception {
        register.changeToProfilePage(null);
    }

    @Test
    public void testChangeToLoginPage() throws Exception {
        register.changeToLoginPage(null);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreateOptionsMenu() throws Exception {
        boolean result = register.onCreateOptionsMenu(null);
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testOnOptionsItemSelected() throws Exception {
        boolean result = register.onOptionsItemSelected(null);
        Assert.assertEquals(true, result);
    }

    @Test
    public void testValidPassword_EmptyPassword() throws Exception {
        boolean result = register.validPassword("");
        Assert.assertEquals(false, result);
    }

    @Test(expected = NullPointerException.class)
    public void testValidPassword_NullPassword() throws Exception {
        boolean result = register.validPassword(null);
        Assert.assertEquals(null, result);
    }

    @Test
    public void testValidPassword_GoodPassword() throws Exception {
        boolean result = register.validPassword("Password");
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testValidEmail_NullEmail() throws Exception {

        boolean result = register.validEmail("email");
        Assert.assertEquals(false, result);
    }

    @Test(expected = NullPointerException.class)
    public void testValidEmail_EmptyEmail() throws Exception {
        boolean result = register.validEmail("");
        Assert.assertEquals(false, result);
    }

    @Test
    public void testValidEmail_GoodEmail() throws Exception {
        boolean result = register.validEmail("email@gmail.com");
        Assert.assertEquals(true, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme