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
        public DbSet<Task1> Task1s { get; set; }
        public DbSet<Crossword> Crosswords { get; set; }
        public DbSet<Wordserch> Wordserches { get; set; }
        public DbSet<DragandDrop> DragandDrops { get; set; }
        public DbSet<DragandDropTask> DragandDropTasks { get; set; }
        public DbSet<CrosswordTask> CrosswordTasks { get; set; }
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
                    UserId = 1


                }
                 );
            modelbuilder.Entity<Task1>().HasData(

                new Task1()
                {
                    Id = 1,
                    Answer = "dog",
                    Question = "dog?"
                },
                new Task1()
                {
                    Id = 2,
                    Answer = "cat",
                    Question = "cat?"
                },
                new Task1()
                {
                    Id = 3,
                    Answer = "fish",
                    Question = "fish?"
                },
                new Task1()
                {
                    Id = 4,
                    Answer = "fox",
                    Question = "fox?"
                },
                new Task1()
                {
                    Id = 5,
                    Answer = "hippo",
                    Question = "hippo?"
                },
                new Task1()
                {
                    Id = 6,
                    Answer = "rhino",
                    Question = "rhino?"
                });


            modelbuilder.Entity<Wordserch>().HasData(

                new Wordserch()
                {
                    Id = 1,
                    UserId = 1,
                    Matrix = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C,W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B",
                    Hight = 10,
                    Width = 10,
                    Keywords = "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE"
                }


                );

            modelbuilder.Entity<DragandDrop>().HasData(

                new DragandDrop()
                {
                    Id = 1,
                    UserId = 1,
                    Title = "title"

                }

                );
            modelbuilder.Entity<DragandDropTask>().HasData(

                new DragandDropTask()
                {
                    Id = 1,
                    DragandDropId = 1,
                    Task1Id = 1
                },
                new DragandDropTask()
                {
                    Id = 2,
                    DragandDropId = 1,
                    Task1Id = 2
                },
                new DragandDropTask()
                {
                    Id = 3,
                    DragandDropId = 1,
                    Task1Id = 3,
                });
            modelbuilder.Entity<CrosswordTask>().HasData(

                new CrosswordTask()
                {
                    Id = 1,
                    CrosswordId = 1,
                    Task1Id = 1
                },
                new CrosswordTask()
                {
                    Id = 2,
                    CrosswordId = 1,
                    Task1Id = 2
                },
                new CrosswordTask()
                {
                    Id = 3,
                    CrosswordId = 1,
                    Task1Id = 3
                });



            base.OnModelCreating(modelbuilder);
        }

    }

}


