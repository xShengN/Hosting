using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel.models;

namespace Hotel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class UsersController : ControllerBase
    {
        private readonly TaskContext _context;

        public UsersController(TaskContext context)
        {
            _context = context;
            
            if (_context.Users.Count() == 0){
                _context.Users.Add(new Users { Id= 15475, FirstName = "Santiago", LastName = "Dueñas", Password = "20ZeroTwo."} );
                _context.SaveChanges();
            }

        }
            // GET: api/Users
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Users>>> GetUsers(){
                return await _context.Users.ToListAsync();
            }
            //GET: api/Users/1
            [HttpGet("{id}")]
            public async Task<ActionResult<Users>> GetUser (int id){
                var users = await _context.Users.FindAsync(id);
                if (users == null){
                    return NotFound();
                }
                return users; 
            }
            //POST: api/Users
            [HttpPost]
            public async Task<ActionResult<Users>> PostUsers(Users item){
                _context.Users.Add(item);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetUser), new {id = item.Id}, item);
            }
            //PUT: api/Users/1
            [HttpPut("{id}")]
            public async Task<IActionResult> PutUser(int id, Users item){
                if (id != item.Id){
                    return BadRequest();
                }
                _context.Entry(item).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }
/*   */           
    }
}