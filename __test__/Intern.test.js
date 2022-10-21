const Intern = require("../library/Intern")

test("Check Intern School",function(){
    const testIntern = new Intern("David",12,"davidtest@test.com", "Bama State")
    const returnValue = testIntern.school
    expect(returnValue).toBe("Bama State")

})

test("Check Intern getSchool Method",function(){
    const testIntern = new Intern("David",12,"davidtest@test.com", "Bama State")
    const returnValue = testIntern.getSchool()
    expect(returnValue).toBe("Bama State")

})


test("Check Intern GetRole Method",function(){
    const testIntern = new Intern("David",12,"davidtest@test.com", "Bama State")
    const returnValue = testIntern.getRole()
    expect(returnValue).toBe("Intern")

})