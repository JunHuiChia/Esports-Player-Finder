package com.example.esportsplayerfinder;

import org.junit.Assert;
import org.junit.Test;

public class InputValidationStringTest {

    @Test
    public void testValidate_email() throws Exception {
        boolean result = InputValidationString.validate_email("email");
        Assert.assertEquals(true, result);
    }

    @Test
    public void testValidate_password() throws Exception {
        boolean result = InputValidationString.validate_password("password");
        Assert.assertEquals(true, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme