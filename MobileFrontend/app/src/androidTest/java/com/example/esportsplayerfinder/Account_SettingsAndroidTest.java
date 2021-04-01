package com.example.esportsplayerfinder;

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
public class Account_SettingsAndroidTest {

    @Rule
    public ActivityScenarioRule<Account_Settings> activityRule =
            new ActivityScenarioRule<>(Account_Settings.class);
    // Assigns Account_Settings to be subject of the tests.

    @Test
    public void test_isActivityInView() {
        //Launches activity to test within.
        onView(withId(R.id.accountSettingsActivity)) //Get object on current view with ID
                .check(matches(isDisplayed())); //check if displayed
    }

    @Test
    public void test_isDashbarInView() {
        onView(withId(R.id.Dashbar))
                .check(matches(isDisplayed()));
    }
}