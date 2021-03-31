package com.example.esportsplayerfinder;

import android.content.res.Resources;
import android.view.Menu;
import android.widget.TextView;

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

public class Team_DetailsTest {

    @InjectMocks
    Team_Details team_Details;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreate() throws Exception {
        team_Details.onCreate(null);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreateOptionsMenu() throws Exception {
        boolean result = team_Details.onCreateOptionsMenu(null);
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testOnOptionsItemSelected() throws Exception {
        boolean result = team_Details.onOptionsItemSelected(null);
        Assert.assertEquals(true, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme