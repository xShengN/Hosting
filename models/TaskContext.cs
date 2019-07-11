using Microsoft.EntityFrameworkCore;    
namespace Hotel.models
{
    public class TaskContext : DbContext
    {
        public TaskContext(DbContextOptions<TaskContext> options) : base(options){

        }
        public DbSet<Users> Users {get;set;}
        public DbSet <Room> Room {get;set;}
        public DbSet <Reservation> Reservation {get;set;}
        public DbSet <Roomreser> Roomreser {get;set;}
        public DbSet <Login> Login {get;set;}
        public DbSet <Pather> Pather {get;set;}
        
    }
}