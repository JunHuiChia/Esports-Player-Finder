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

public class LoginTest3 {
    @Mock
    EditText eEmail;
    @Mock
    EditText ePassword;
    @Mock
    Button eLogin;
    @Mock
    Button registerLink;
    @Mock
    Menu menu;
    @Mock
    AppCompatDelegate mDelegate;
    @Mock
    Resources mResources;
    @Mock
    FragmentController mFragments;
    @Mock
    LifecycleRegistry mFragmentLifecycleRegistry;
    @Mock
    SparseArrayCompat<String> mPendingFragmentActivityResults;
    @Mock
    LifecycleRegistry mLifecycleRegistry;
    //Field mSavedStateRegistryController of type SavedStateRegistryController - was not mocked since Mockito doesn't mock a Final class when 'mock-maker-inline' option is not set
    @Mock
    ViewModelStore mViewModelStore;
    @Mock
    ViewModelProvider.Factory mDefaultFactory;
    //Field mOnBackPressedDispatcher of type OnBackPressedDispatcher - was not mocked since Mockito doesn't mock a Final class when 'mock-maker-inline' option is not set
    @Mock
    SimpleArrayMap<Class<? extends ComponentActivity.ExtraData>, ComponentActivity.ExtraData> mExtraDataMap;

    @InjectMocks
    Login login;

    @Before
    public void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testOnCreate() throws Exception {
        login.onCreate(null);
    }

    @Test
    public void testValidEmail() throws Exception {
        boolean result = login.validEmail("inputEmail");
        Assert.assertEquals(true, result);
    }

    @Test
    public void testValidPassword() throws Exception {
        boolean result = login.validPassword("inputPassword");
        Assert.assertEquals(true, result);
    }

    @Test
    public void testGetUserDetails() throws Exception {
        login.getUserDetails();
    }

    @Test
    public void testGetToken() throws Exception {
        login.getToken("inputEmail", "inputPassword");
    }

    @Test
    public void testChangeToRegisterPage() throws Exception {
        login.changeToRegisterPage(null);
    }

    @Test
    public void testChangeToProfilePage() throws Exception {
        login.changeToProfilePage(null);
    }

    @Test
    public void testOnCreateOptionsMenu() throws Exception {
        boolean result = login.onCreateOptionsMenu(menu);
        Assert.assertEquals(true, result);
    }

}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme