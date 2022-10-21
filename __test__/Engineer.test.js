const Engineer = require("../library/Engineer")

test("Check Engineer to be an Object",function(){
    const testEngineer = new Engineer("David",12,"davidtest@test.com","davidGithub")
    const returnValue = typeof(testEngineer)
    expect(returnValue).toBe("object")

})


test("Check Engineer Github attribute",function(){
    const testValue = "davidGithub"
    const testEngineer = new Engineer("David",12,"davidtest@test.com",testValue)
    const returnValue = testEngineer.github
    expect(returnValue).toBe(testValue)

})


test("Check Engineer getRole Method",function(){
    const testEngineer = new Engineer("David",12,"davidtest@test.com","davidGithub")
    const returnValue = testEngineer.getRole()
    expect(returnValue).toBe("Engineer")
})

test("Check Engineer getGithub Method",function(){
    const testEngineer = new Engineer("David",12,"davidtest@test.com","davidGithub")
    const returnValue = testEngineer.getGithub()
    expect(returnValue).toBe("davidGithub")
})