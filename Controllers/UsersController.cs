using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel.models;
using Microsoft.AspNetCore.Identity;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System;
using System.Text;
using System.IdentityModel.Tokens.Jwt;

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
                _context.Users.Add(new Users { Id= 2707, FirstName = "Santiago", LastName = "Dueñas", Password = "20ZeroTwo."} );
                _context.Users.Add(new Users { Id= 2807, FirstName = "Samuel", LastName = "Dueñas", Password = "20ZMorningstar."} );
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
            [HttpPost("signin")]
            public async Task<ActionResult> Login(Users user){
                var users = await _context.Users.FindAsync(user.Id);
                if (users == null){
                    return NotFound( new {message= "Username doesn't exist"});
                }
                else {
                    if (users.Password.Equals(user.Password)){
                        var tokenDescriptor = new SecurityTokenDescriptor {
                            Subject = new ClaimsIdentity(new Claim []{
                                new Claim("UserID",users.Id.ToString())
                            }),
                            Expires = DateTime.UtcNow.AddDays(1),
                            SigningCredentials = new SigningCredentials (new SymmetricSecurityKey(Encoding.UTF8.GetBytes("27072000789456123")),SecurityAlgorithms.HmacSha256Signature)

                        };
                        var tokenHandler = new JwtSecurityTokenHandler();
                        var securityToken = tokenHandler.CreateToken(tokenDescriptor);
                        var token = tokenHandler.WriteToken(securityToken);
                        return Ok(new {token});
                    }
                    else {
                        return BadRequest(new {message = "Password is incorrect"});
                    }
                }
            }
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