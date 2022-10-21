const Employee = require("../library/Employee")

test("Check Employee to be an Object",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = typeof(testEmployee)
    expect(returnValue).toBe("object")

})


test("Check EmployeeName attribute",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = testEmployee.name
    expect(returnValue).toBe("David")

})


test("Check Employee Id attribute",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = testEmployee.id
    expect(returnValue).toBe(12)

})

test("Check Employee Email attribute",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = testEmployee.email
    expect(returnValue).toBe("davidtest@test.com")

})


test("Check EmployeeName attribute",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = testEmployee.getName()
    expect(returnValue).toBe("David")

})


test("Check Employee Id attribute",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = testEmployee.getId();
     

})

test("Check Employee GetEmail Method",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = testEmployee.getEmail()
    expect(returnValue).toBe("davidtest@test.com")

})

test("Check Employee GetRole Method",function(){
    const testEmployee = new Employee("David",12,"davidtest@test.com")
    const returnValue = testEmployee.getRole()
    expect(returnValue).toBe("Employee")

})