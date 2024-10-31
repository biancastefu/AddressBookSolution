using AddressBookApi.Models;
using System.Collections.Generic;

namespace AddressBookApi.Services
{
    public class PersonService
    {
        private readonly List<Person> _people = new List<Person>
        {
                new Person { Id = 1, Name = "Chris Taylor", Address = "808 Redwood Pl, Boston, MA 02101" },
                new Person { Id = 2, Name = "Patricia Anderson", Address = "909 Spruce Way, Philadelphia, PA 19101" },
                new Person { Id = 3, Name = "Robert Thomas", Address = "1010 Fir Loop, Atlanta, GA 30301" },
                new Person { Id = 4, Name = "Linda Hernandez", Address = "1111 Poplar Ave, Orlando, FL 32801" },
                new Person { Id = 5, Name = "James Moore", Address = "1212 Magnolia Dr, Houston, TX 77001" },
                new Person { Id = 6, Name = "Karen Jackson", Address = "1313 Aspen St, Phoenix, AZ 85001" },
                new Person { Id = 7, Name = "Charles Lee", Address = "1414 Sycamore Rd, Las Vegas, NV 89101" }

                };

        public IEnumerable<Person> GetPeople() => _people;
        public Person GetPersonById(int id) => _people.Find(p => p.Id == id);
    }
}
