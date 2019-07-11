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
    public class PatherController : ControllerBase
    {
        private readonly TaskContext _context;
                public PatherController(TaskContext context)
        {
            _context = context;

            if (_context.Pather.Count() == 0) {
                
                _context.Pather.Add(new Pather {Id=49101789, IdHigh=1003265245,Name="Adela", LastName="Martinez", Sex="Femenino", DateBorn="17/07/1979" });
                _context.SaveChanges();
            } 
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Pather>>> GetAcompañante(){
            return await _context.Pather.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Pather>> GetAcompañante (int id){
            var acompañante = await _context.Pather.FindAsync(id);
            if (acompañante == null){
                return NotFound();
            }
            return acompañante; 
        }

        [HttpPost]
        public async Task<ActionResult<Pather>> PostAcompañante(Pather item){
             _context.Pather.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetAcompañante), new {id = item.Id}, item);
        }   

        [HttpPut("{id}")]
        public async Task<IActionResult> PutAcompañante(int id, Pather item){
            if (id != item.Id){
                return BadRequest();
            }
             _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        } 
    }
}