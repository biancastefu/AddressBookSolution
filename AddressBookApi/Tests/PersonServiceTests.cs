using Xunit;
using AddressBookApi.Services;
using AddressBookApi.Models;

public class PersonServiceTests
{
    private readonly PersonService _service;

    public PersonServiceTests()
    {
        _service = new PersonService();
    }

    [Fact]
    public void GetAllPeople_ShouldReturnListOfPeople()
    {
        var people = _service.GetPeople();
        Assert.NotEmpty(people);
    }

    [Fact]
    public void GetPersonById_ShouldReturnPerson()
    {
        var person = _service.GetPersonById(1);
        Assert.NotNull(person);
        Assert.Equal(1, person.Id);
    }

    [Fact]
    public void GetPersonById_ShouldReturnNullIfNotFound()
    {
        var person = _service.GetPersonById(999);
        Assert.Null(person);
    }
}
