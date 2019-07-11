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
    public class LoginController : ControllerBase
    {
        private readonly TaskContext _context;
                public LoginController(TaskContext context)
        {
            _context = context;

            if (_context.Login.Count() == 0) {
                _context.Login.Add(new Login {Id= 458});
                _context.SaveChanges();
            } 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Login>>> GetLogins(){
            return await _context.Login.ToListAsync();
        }
        
        [HttpGet("{id}")]
        public async Task<ActionResult<Login>> GetLogin (int id){
            var login = await _context.Login.FindAsync(id);
            if (login == null){
                 return NotFound();
            }
                return login; 
        }
        [HttpPost]
        public async Task<ActionResult<Login>> PostReservation(Login item){
            _context.Login.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetLogin), new {id = item.Id}, item);
        }
    }
}