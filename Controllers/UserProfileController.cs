using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hotel.models;
using System;

namespace Hotel.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserProfileController : ControllerBase
    {
        private readonly TaskContext _context;
         public UserProfileController(TaskContext context){
              _context = context;
         }

        [HttpGet]
        [Authorize]
        public async Task<Object> GetUserProfile(){
            string userauxId = User.Claims.First(c => c.Type == "UserID").Value;
            Int32.TryParse(userauxId, out int userId);
            var user = await _context.Users.FindAsync(userId);
            return new {
                user.FirstName,
                user.LastName,
                user.Id
            };
        }
    }
}