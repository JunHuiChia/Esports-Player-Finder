package com.example.esportsplayerfinder;

import android.content.res.Resources;
import android.view.Menu;
import android.widget.Button;
import android.widget.ImageView;
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

public class Find_TeamTest {

    @InjectMocks
    Find_Team find_Team;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreate() throws Exception {
        find_Team.onCreate(null);
    }

    @Test(expected = NullPointerException.class)
    public void testOnCreateOptionsMenu() throws Exception {
        boolean result = find_Team.onCreateOptionsMenu(null);
        Assert.assertEquals(true, result);
    }

    @Test(expected = NullPointerException.class)
    public void testOnOptionsItemSelected() throws Exception {
        boolean result = find_Team.onOptionsItemSelected(null);
        Assert.assertEquals(true, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme