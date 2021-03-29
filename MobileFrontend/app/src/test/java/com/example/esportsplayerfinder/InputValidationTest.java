package com.example.esportsplayerfinder;

import org.junit.Assert;
import org.junit.Test;

public class InputValidationTest {

    @Test
    public void testValidate_email() throws Exception {
        boolean result = InputValidation.validate_email(null);
        Assert.assertEquals(false, result);
    }

    @Test
    public void testValidate_password() throws Exception {
        boolean result = InputValidation.validate_password(null);
        Assert.assertEquals(false, result);
    }
}

//Generated with love by TestMe :) Please report issues and submit feature requests at: http://weirddev.com/forum#!/testme