const Manager = require("../library/Manager")
const Intern = require("../library/Manager")

test("Check Manager Office Number",function(){
    const testValue = 4444444444
    const testManager = new Manager("David",12,"davidtest@test.com", "testValue")
    const returnValue = testManager.officeNumber
    expect(returnValue).toBe("testValue")

})

test("Check Manager getOfficeNumber Method",function(){
    const testManager = new Manager("David",12,"davidtest@test.com", 4444444444)
    const returnValue = testManager.getOfficeNumber()
    expect(returnValue).toBe(4444444444)

})


test("Check Manager GetRole Method",function(){
    const testManager = new Manager("David",12,"davidtest@test.com", 4444444444)
    const returnValue = testManager.getRole()
    expect(returnValue).toBe("Manager")

})