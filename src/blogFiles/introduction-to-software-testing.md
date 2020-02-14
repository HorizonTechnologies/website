The software development life cycle consists of the following steps:
![software development life cycle](/blog-images/software-testing.png)

When a software is being developed, the developers use requirements from the planning phase as a baseline to build a product. The developers may/ may not understand the exact requirements. There can always be assumptions when building it. There is a difference between building a ‘product right’ versus the ‘right product’. Thus, software testing is the process of validating the product to make sure it is fulfilling the intended purpose. Any flaw in the product where the behavior is not as intended is a software bug.

Software quality is the responsibility of every person working on project. However, it is the testers or software quality assurance engineers who are primary gatekeepers of quality for the product.

There are different types of testing done at various stages of the testing process. They can be broadly classified into 2 types:

1. White box testing
2. Black box testing

### 1. White box testing:

This deals with testing the structure of the internal code of the application. Unit tests are the most common white box testing example. Whitebox testing/clear box testing tests the lowest level of the application and ensures the smallest testable component/unit is working as expected. This level of testing also measures the code coverage, that is, running every line of code without issues.
Since these tests are testing the code, they are usually written by the application developer who is implementing the product.

### 2. Black box testing:

The main aim is to test the functionality of the product as a whole without looking at the internal code of the application. This involves both functional and non-functional testing.

**_a. Functional testing_**:
This deals with testing the product against the functional requirements. Testing is done to ensure the product works as per the user specifications.

Few testing types here are:

1. Smoke testing: ensuring the minimal basic functionality of the product is working
2. Integration testing: ensuring group of components work together
3. System testing: testing the product from an end-to-end perspective
4. Regression testing: ensuring existing product functionality works after a new release

**_b. Non-Functional testing_**:
This deals with testing the product against the non-functional requirements like security and performance that are not included under functional requirements. For example, it is not enough for a web page to load without issues in a browser, but it has to load correctly within an accepted time limit, say 2 seconds.

Few testing types here are:

1. Load testing: ensuring the application does not crash when lot of users are using it
2. Security testing: ensures application data is secure and there is no data loss

We will look at each of these testing types in detail and other responsibilities of testing in future blogs.
