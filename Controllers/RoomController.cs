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
    public class RoomController : ControllerBase
    {
        private readonly TaskContext _context;
        public RoomController(TaskContext context)
        {
            _context = context;

            if (_context.Room.Count() == 0) {
                _context.Room.Add(new Room {Id=1, Avidable=false, Type = "Normal"});
                _context.Room.Add(new Room {Id=2, Avidable=true, Type = "Normal"});
                _context.Room.Add(new Room {Id=3, Avidable=true, Type = "Doble"});
                _context.Room.Add(new Room {Id=4, Avidable=true, Type = "Doble"});
                _context.Room.Add(new Room {Id=5, Avidable=true, Type = "Premium"});
                _context.Room.Add(new Room {Id=6, Avidable=true, Type = "Premium"});
                _context.SaveChanges();
            }
        }    
        //GET: api/Room
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Room>>> GetRooms(){
            return await _context.Room.ToListAsync();
        }        
        //GET: api/Room/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetRoom (int id){
            var room = await _context.Room.FindAsync(id);
            if (room == null){
                return NotFound();
            }
            return room; 
        }
        //POST: api/Room
        [HttpPost]
        public async Task<ActionResult<Room>> PostRoom(Room item){
             _context.Room.Add(item);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetRoom), new {id = item.Id}, item);
        } 
        //PUT: api/Room/1
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRoom(int id, Room item){
            if (id != item.Id){
                return BadRequest();
            }
             _context.Entry(item).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }       
    }
}