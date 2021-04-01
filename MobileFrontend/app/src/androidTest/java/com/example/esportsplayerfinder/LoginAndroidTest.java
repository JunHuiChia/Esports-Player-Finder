package com.example.esportsplayerfinder;

import androidx.test.core.app.ActivityScenario;
import androidx.test.ext.junit.rules.ActivityScenarioRule;
import androidx.test.internal.runner.junit4.AndroidJUnit4ClassRunner;

import static androidx.test.espresso.Espresso.onView;
import static androidx.test.espresso.action.ViewActions.click;
import static androidx.test.espresso.assertion.ViewAssertions.matches;
import static androidx.test.espresso.matcher.ViewMatchers.isDisplayed;
import static androidx.test.espresso.matcher.ViewMatchers.withId;
import static androidx.test.espresso.matcher.ViewMatchers.withText;

import org.junit.Rule;
import org.junit.Test;
import org.junit.runner.RunWith;

@RunWith(AndroidJUnit4ClassRunner.class)
public class LoginAndroidTest {


    @Rule
    public ActivityScenarioRule<Login> activityRule =
            new ActivityScenarioRule<>(Login.class);
    // Assigns Login activity to be subject of the tests.

    @Test
    public void test_isActivityInView() {
        onView(withId(R.id.login)) //Get object on current view with ID = login
                .check(matches(isDisplayed())); //check if displayed
    }

    @Test
    public void test_isDashbarInView() {
        onView(withId(R.id.Dashbar))
                .check(matches(isDisplayed()));
    }

    @Test
    public void test_visibility_newUserHintRegisterButton() {
        onView(withId(R.id.textNewUserQuestion))
                .check(matches(isDisplayed()));
        onView(withId(R.id.linkToRegister))
                .check(matches(isDisplayed()));
    }

    @Test
    public void test_isLoginButtonTextDisplayed() {
        onView(withId(R.id.btnLogin))
                .check(matches(withText("Login")));
    }

    @Test
    public void test_switchToRegister() {
        onView(withId(R.id.linkToRegister))
                .perform(click());
        onView(withId(R.id.register))
                .check(matches(isDisplayed()));

    }
}