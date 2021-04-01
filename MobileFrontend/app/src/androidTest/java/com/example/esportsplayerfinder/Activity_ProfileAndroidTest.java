package com.example.esportsplayerfinder;

import android.app.Activity;

import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.rules.ActivityScenarioRule;
import androidx.test.internal.runner.junit4.AndroidJUnit4ClassRunner;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;
import static androidx.test.espresso.matcher.ViewMatchers.withId;
import static androidx.test.espresso.matcher.ViewMatchers.withText;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;


@RunWith(AndroidJUnit4ClassRunner.class)
public class Activity_ProfileAndroidTest {

    @Rule
    public ActivityScenarioRule<Activity_Profile> activityRule =
            new ActivityScenarioRule<>(Activity_Profile.class);
    // Assigns Account_Settings to be subject of the tests.

    @Test
    public void test_isActivityInView() {
        //Launches activity to test within.
        onView(withId(R.id.profileActivity)) //Get object on current view with ID
                .check(matches(isDisplayed())); //check if displayed
    }

    @Test
    public void test_isDashbarInView() {
        onView(withId(R.id.Dashbar))
                .check(matches(isDisplayed()));
    }
}