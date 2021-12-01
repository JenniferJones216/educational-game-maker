using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EducationalGameMaker.Models;
using Microsoft.Extensions.Configuration;

namespace EducationalGameMaker
{
    public class GameContext : DbContext
    {
        public DbSet<User> Users { get; set; }
        public DbSet<Crossword> Crosswords { get; set; }

        public DbSet<Wordserch> Wordserches { get; set; }

       
        public IConfiguration Configuration;

        public GameContext(IConfiguration configuration)
        {
            Configuration = configuration;

        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            var connectionString = Configuration.GetConnectionString("DefaultConnection");
            optionsBuilder.UseSqlServer(connectionString).UseLazyLoadingProxies();
            base.OnConfiguring(optionsBuilder);

        }


        protected override void OnModelCreating(ModelBuilder modelbuilder)
        {
            modelbuilder.Entity<User>().HasData(
                new User() { Id = 1, Name = "entry" }


                );

            modelbuilder.Entity<Crossword>().HasData(

                new Crossword()
                {
                    Id = 1,
                    UserId = 1,
                    Clues = new string[] { "cat?", "dog?", "fish?", "fox?", "hipopotamus?", "rino?" },
                    Phrases = new string[] { "cat", "dog", "fish", "fox", "hipopotamus", "rino" }


                }
                 );

            modelbuilder.Entity<Wordserch>().HasData(

                new Wordserch()
                {
                    Id = 1,
                    UserId = 1,
                    Matrix = new char[]{'J', 'Q', 'V', 'N', 'R', 'G', 'N', 'T', 'U', 'I',
  'V', 'L', 'A', 'O', 'S', 'A', 'X', 'P', 'S', 'C',
  'W', 'P', 'R', 'I', 'D', 'M', 'E', 'I', 'I', 'T',
  'K', 'P', 'I', 'T', 'I', 'E', 'T', 'R', 'H', 'K',
  'Z', 'U', 'A', 'C', 'K', 'S', 'G', 'C', 'X', 'T',
  'X', 'T', 'B', 'N', 'F', 'Z', 'Y', 'S', 'G', 'J',
  'O', 'D', 'L', 'U', 'Y', 'U', 'H', 'A', 'H', 'N',
  'A', 'F', 'E', 'F', 'C', 'A', 'N', 'V', 'A', 'S',
  'E', 'D', 'O', 'C', 'R', 'P', 'L', 'A', 'Y', 'A',
  'F', 'X', 'E', 'E', 'V', 'C', 'P', 'J', 'H', 'B'},
                    Hight = 10,
                    Width = 10,
                    Keywords = new string[] { "CANVAS", "CODE", "FUN", "FUNCTION", "GAMES", "JAVASCRIPT", "KIDS", "PLAY", "SHARE", "VARIABLE" }
                }


                );

            base.OnModelCreating(modelbuilder);
        }
    }

}


