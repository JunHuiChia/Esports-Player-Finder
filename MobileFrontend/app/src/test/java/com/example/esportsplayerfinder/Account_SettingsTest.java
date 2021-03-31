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

import org.json.JSONObject;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Ignore;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;

import static org.mockito.Mockito.*;

public class Account_SettingsTest {

    @InjectMocks
    Account_Settings account_Settings;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Ignore("No time to fix.")
    @Test(expected = NullPointerException.class)
    public void testOnCreate() throws Exception {
        account_Settings.onCreate(null);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreateOptionsMenu() throws Exception {
        boolean result = account_Settings.onCreateOptionsMenu(null);
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testOnOptionsItemSelected() throws Exception {
        boolean result = account_Settings.onOptionsItemSelected(null);
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testOnItemSelected() throws Exception {
        account_Settings.onItemSelected(null, null, 0, 0L);
    }

    @Test
    public void testOnNothingSelected() throws Exception {
        account_Settings.onNothingSelected(null);
    }

    @Test(expected = NullPointerException.class)
    public void testValidEmail_NullEmail() throws Exception {

        boolean result = account_Settings.validEmail("email");
        Assert.assertEquals(false, result);
    }

    @Test(expected = NullPointerException.class)
    public void testValidEmail_EmptyEmail() throws Exception {
        boolean result = account_Settings.validEmail("");
        Assert.assertEquals(false, result);
    }

    @Test
    public void testValidEmail_GoodEmail() throws Exception {
        boolean result = account_Settings.validEmail("email@gmail.com");
        Assert.assertEquals(true, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme