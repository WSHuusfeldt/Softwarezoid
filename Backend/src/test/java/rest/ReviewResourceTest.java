/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import entities.dto.ReviewDTO;
import java.util.List;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.Disabled;

/**
 *
 * @author emilt
 */
@Disabled
public class ReviewResourceTest {
    
    public ReviewResourceTest() {
    }
    
    @BeforeAll
    public static void setUpClass() {
    }
    
    @AfterAll
    public static void tearDownClass() {
    }
    
    @BeforeEach
    public void setUp() {
    }
    
    @AfterEach
    public void tearDown() {
    }

    /**
     * Test of add method, of class ReviewResource.
     */
    @Test
    public void testAdd() {
        System.out.println("add");
        ReviewDTO reviewDTO = null;
        ReviewResource instance = new ReviewResource();
        String expResult = "";
        String result = instance.add(reviewDTO);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }

    /**
     * Test of getJson method, of class ReviewResource.
     */
    @Test
    public void testGetJson() throws Exception {
        System.out.println("getJson");
        long id = 0L;
        ReviewResource instance = new ReviewResource();
        List<ReviewDTO> expResult = null;
        List<ReviewDTO> result = instance.getJson(id);
        assertEquals(expResult, result);
        // TODO review the generated test code and remove the default call to fail.
        fail("The test case is a prototype.");
    }
    
}
