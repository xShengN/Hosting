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
    public class RoomreserController : ControllerBase
    {
        private readonly TaskContext _context;
        public RoomreserController(TaskContext context){
            _context = context;
            
              if (_context.Roomreser.Count() == 0){
                 _context.Roomreser.Add(new Roomreser {Id= 1003265245, IdRoom= 1});
                 _context.SaveChanges();
             } 
        }
         //GET: api/Roomreser
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Roomreser>>> GetRoomresers(){
            return await _context.Roomreser.ToListAsync();
        }
        //POST: api/Roomreser
        [HttpPost]
        public async Task<ActionResult<Roomreser>> PostRoomreser(Roomreser item){
            _context.Roomreser.Add(item);
            await _context.SaveChangesAsync();
            return NoContent();
        }
        [HttpGet("{id}")]
        public async Task<ActionResult<Roomreser>> GetRoomreser (int id){
            var room = await _context.Roomreser.FindAsync(id);
            if (room == null){
                return NotFound();
            }
            return room; 
        }
        //DELETE: api/Roomreser/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRoomreser(int id){
            var Roomreser = await _context.Roomreser.FindAsync(id);

            if (Roomreser == null){
                return NotFound();
            }

            _context.Roomreser.Remove(Roomreser);
	        await _context.SaveChangesAsync();
            return NoContent();
            }
    }
}