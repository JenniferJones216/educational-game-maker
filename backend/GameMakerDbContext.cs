using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EducationalGameMaker
{
    public class GameMakerDbContext : DbContext
    {
        public IConfiguration Configuration;
        public GameMakerDbContext(IConfiguration configuration)
        {
            Configuration = configuration;
        }
        protected override void OnConfiguring(DbContextOptionsBuilder builder)
        {
            var connectionString = Configuration.GetConnectionString("DefaultConnection");

            builder.UseSqlServer(connectionString).UseLazyLoadingProxies();

            base.OnConfiguring(builder);
        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            //Add seed data here:
            //(From todo example)
            //    builder.Entity<Owner>().HasData(
            //    new Owner() { Id = 1, Name = "Davis" },
            //    new Owner() { Id = 2, Name = "Carlos" },
            //    new Owner() { Id = 3, Name = "Gavin" }
            //);

            //builder.Entity<Todo>().HasData(
            //    new Todo() { Id = 1, Title = "Todo Item 1", Description = "Test Todo", IsDone = false, CreatedOn = DateTime.Now, DueDate = DateTime.Now.AddDays(5), OwnerId = 1, Priority = PriorityLevel.High },
            //    new Todo(2, "Todo Item 2", "Test Todo 2", false, DateTime.Now, DateTime.Now.AddDays(5), 2, PriorityLevel.Low)
            //);

            base.OnModelCreating(builder);
        }
    }
}
