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
    public class ReservationController : ControllerBase
    {
        private readonly TaskContext _context;
        public ReservationController(TaskContext context)
        {
            _context = context;

         if (_context.Reservation.Count() == 0) {
                _context.Reservation.Add(new Reservation {Document= 1003265245, Name = "Santiago", Lastname= "Dueñas", Sex="Masculino", DateIn = "06/11/2019",Dateout = "06/13/2019", TypeRoom="Normal", Active=true});
                _context.SaveChanges();
            }  
        }
            //GET: api/Reservation
            [HttpGet]
            public async Task<ActionResult<IEnumerable<Reservation>>> GetReservations(){
                return await _context.Reservation.ToListAsync();
            }
            //GET: api/Reservation/1
            [HttpGet("{id}")]
            public async Task<ActionResult<IEnumerable<Reservation>>> GetReservation (int id){
                var reservation = await _context.Reservation.Where(e=>e.Document==id).ToListAsync();
                if (reservation == null){
                    return NotFound();
                }
                return reservation; 
            }
            //POST: api/Reservation
            [HttpPost]
            public async Task<ActionResult<Reservation>> PostReservation(Reservation item){
                _context.Reservation.Add(item);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(GetReservation), new {id = item.Id}, item);
            }
            //PUT: api/Reservation/1
            [HttpPut("{id}")]
            public async Task<IActionResult> PutReservation(int id, Reservation item){

                if (id != item.Id){
                    return BadRequest();
                }
                _context.Entry(item).State = EntityState.Modified;
                await _context.SaveChangesAsync();
                return NoContent();
            }

            [HttpPut("disable/{id}")]
            public async Task<IActionResult> DisableReservation(int id){
                
                int aux = _context.Reservation.Count();
                var item = new Reservation();
                for (int i=1; i<aux+1; i++){
                    var auxiliar = await _context.Reservation.FindAsync(i);
                    if (auxiliar.Document==id){
                        item = auxiliar;
                        item.Active=false;
                        _context.Entry(item).State = EntityState.Modified;
                        await _context.SaveChangesAsync();
                        return NoContent();
                    }
                }
                return BadRequest();

            }


            //DELETE: api/Reservation/1
            [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteReservation(int id){
                var Reservation = await _context.Reservation.FindAsync(id);

                if (Reservation == null){
                    return NotFound();
                }

                _context.Reservation.Remove(Reservation);
		        await _context.SaveChangesAsync();
                return NoContent();
            }
    }
}