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
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;

import static org.mockito.Mockito.*;

public class Create_TeamTest {

    @InjectMocks
    Create_Team create_Team;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreate() throws Exception {
        create_Team.onCreate(null);
    }

    @Test(expected = NullPointerException.class)
    public void testOnItemSelected() throws Exception {
        create_Team.onItemSelected(null, null, 0, 0L);
    }

    @Test
    public void testOnNothingSelected() throws Exception {
        create_Team.onNothingSelected(null);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreateOptionsMenu() throws Exception {
        boolean result = create_Team.onCreateOptionsMenu(null);
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testOnOptionsItemSelected() throws Exception {
        boolean result = create_Team.onOptionsItemSelected(null);
        Assert.assertEquals(true, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme