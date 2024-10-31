using Microsoft.AspNetCore.Mvc;
using AddressBookApi.Services;
using AddressBookApi.Models;

[Route("api/[controller]")]
[ApiController]
public class PeopleController : ControllerBase
{
    private readonly PersonService _personService;

    public PeopleController()
    {
        _personService = new PersonService();
    }

    [HttpGet]
    public ActionResult<IEnumerable<Person>> GetPeople()
    {
        return Ok(_personService.GetPeople());
    }

    [HttpGet("{id}")]
    public ActionResult<Person> GetPerson(int id)
    {
        var person = _personService.GetPersonById(id);
        if (person == null)
        {
            return NotFound();
        }
        return Ok(person);
    }
}
