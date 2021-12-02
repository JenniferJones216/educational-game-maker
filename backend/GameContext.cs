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
        public DbSet<CrosswordQuestion> CrosswordQuestions { get; set; }
        public DbSet<Crossword> Crosswords { get; set; }
        public DbSet<Wordsearch> Wordsearches { get; set; }
        public DbSet<DragandDrop> DragandDrops { get; set; }
       
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
            modelbuilder.Entity<CrosswordQuestion>().HasData(
            new CrosswordQuestion()
            {
                Id = 50,
                CrosswordId = 1,
                Clue = "Hogwarts potions teacher",
                Answer = "Snape"
            },
    new CrosswordQuestion()
    {
        Id = 1,
        CrosswordId = 1,
        Clue = "The one who teaches flying lessons",
        Answer = "Hooch"
    },
    new CrosswordQuestion()
    {
        Id = 2,
        CrosswordId = 1,
        Clue = "To float: Wingardium _____",
        Answer = "Leviosa"
    },
    new CrosswordQuestion()
    {
        Id = 3,
        CrosswordId = 1,
        Clue = "Who teaches Transfiguration?",
        Answer = "McGonagall"
    },
    new CrosswordQuestion()
    {
        Id = 4,
        CrosswordId = 1,
        Clue = "Famous potions page",
        Answer = "394"
    },
    new CrosswordQuestion()
    {
        Id = 5,
        CrosswordId = 1,
        Clue = "The bravery house",
        Answer = "Gryffindor"
    },
    new CrosswordQuestion()
    {
        Id = 6,
        CrosswordId = 1,
        Clue = "If you can talk to snakes you are a _____",
        Answer = "Parseltongue"
    },
    new CrosswordQuestion()
    {
        Id = 7,
        CrosswordId = 1,
        Clue = "Harrys quidditch position",
        Answer = "Seeker"
    },
    new CrosswordQuestion()
    {
        Id = 8,
        CrosswordId = 1,
        Clue = "The Dark Lord",
        Answer = "Voldemort"
    },
    new CrosswordQuestion()
    {
        Id = 9,
        CrosswordId = 1,
        Clue = "Name of the adorable three headed dog",
        Answer = "Fluffy"
    },
    new CrosswordQuestion()
    {
        Id = 10,
        CrosswordId = 1,
        Clue = "Famous magical high-security prison",
        Answer = "Azkaban"
    },
    new CrosswordQuestion()
    {
        Id = 11,
        CrosswordId = 1,
        Clue = "The Cruciatus Curse is used for: ",
        Answer = "Torture"
    },
    new CrosswordQuestion()
    {
        Id = 12,
        CrosswordId = 1,
        Clue = "Mad-___ Moody",
        Answer = "eye"
    },
    new CrosswordQuestion()
    {
        Id = 13,
        CrosswordId = 1,
        Clue = "A person whos job is to catch dark wizards",
        Answer = "Auror"
    },
    new CrosswordQuestion()
    {
        Id = 14,
        CrosswordId = 1,
        Clue = "Cute little house elf who befriends Harry",
        Answer = "Dobby"
    },
    new CrosswordQuestion()
    {
        Id = 15,
        CrosswordId = 1,
        Clue = "Voldemorts real name",
        Answer = "TomRiddle"
    },
    new CrosswordQuestion()
    {
        Id = 16,
        CrosswordId = 1,
        Clue = "This room only appears when a person is in great need of it",
        Answer = "RoomOfRequirement"
    },
    new CrosswordQuestion()
    {
        Id = 17,
        CrosswordId = 1,
        Clue = "___ Map",
        Answer = "Marauders"
    },
    new CrosswordQuestion()
    {
        Id = 18,
        CrosswordId = 1,
        Clue = "Which Hogwarts teaching position is cursed?",
        Answer = "DefenseAgainstTheDarkArts"
    },
    new CrosswordQuestion()
    {
        Id = 19,
        CrosswordId = 1,
        Clue = "The female competitor in the Triwizard Tournament",
        Answer = "FleurDelacour"
    },
    new CrosswordQuestion()
    {
        Id = 20,
        CrosswordId = 1,
        Clue = "To get rid of dementors",
        Answer = "ExpectoPatronum"
    },
    new CrosswordQuestion()
    {
        Id = 21,
        CrosswordId = 1,
        Clue = "Nevilles Toad",
        Answer = "Trevor"
    },
    new CrosswordQuestion()
    {
        Id = 22,
        CrosswordId = 1,
        Clue = "Girls Bathroom Ghost",
        Answer = "MoaningMyrtle"
    },
    new CrosswordQuestion()
    {
        Id = 23,
        CrosswordId = 1,
        Clue = "This curse will end a life",
        Answer = "AvadaKedavra"
    },
    new CrosswordQuestion()
    {
        Id = 24,
        CrosswordId = 1,
        Clue = "Patil twins names",
        Answer = "PadmaAndParvati"
    },
    new CrosswordQuestion()
    {
        Id = 25,
        CrosswordId = 1,
        Clue = "Famous wand shop owner",
        Answer = "Ollivander"
    },
    new CrosswordQuestion()
    {
        Id = 26,
        CrosswordId = 1,
        Clue = @"Quote: ""Im going to bed before either of you come up with another clever idea to get us killed - or worse,
        _____"",
        Answer = ""expelled"
    },
    new CrosswordQuestion()
    {
        Id = 27,
        CrosswordId = 1,
        Clue = "A memory keeper",
        Answer = "Pensieve"
    },
    new CrosswordQuestion()
    {
        Id = 28,
        CrosswordId = 1,
        Clue = "The job of Hermiones parents",
        Answer = "Dentists"
    },
    new CrosswordQuestion()
    {
        Id = 29,
        CrosswordId = 1,
        Clue = "Non-magic folk",
        Answer = "Muggles"
    },
    new CrosswordQuestion()
    {
        Id = 30,
        CrosswordId = 1,
        Clue = "Dudley, Petunia, and Vernon",
        Answer = "Dursley"
    },
    new CrosswordQuestion()
    {
        Id = 31,
        CrosswordId = 1,
        Clue = "Foul name for a muggle-born",
        Answer = "Mudblood"
    },
    new CrosswordQuestion()
    {
        Id = 32,
        CrosswordId = 1,
        Clue = "A constellation but also a member of the Slytherin House",
        Answer = "Draco"
    },
    new CrosswordQuestion()
    {
        Id = 33,
        CrosswordId = 1,
        Clue = "A quite destructive arbor",
        Answer = "WhompingWillow"
    },
    new CrosswordQuestion()
    {
        Id = 34,
        CrosswordId = 1,
        Clue = "Number of Voldemorts Horcruxes",
        Answer = "Seven"
    },
    new CrosswordQuestion()
    {
        Id = 35,
        CrosswordId = 1,
        Clue = "R.A.B.",
        Answer = "RegulusABlack"
    },
    new CrosswordQuestion()
    {
        Id = 36,
        CrosswordId = 1,
        Clue = "A potion that makes the drinker lucky for a period of time",
        Answer = "FelixFelicis"
    },
    new CrosswordQuestion()
    {
        Id = 37,
        CrosswordId = 1,
        Clue = "Dolores Umbridges Patronus",
        Answer = "PersianCat"
    },
    new CrosswordQuestion()
    {
        Id = 38,
        CrosswordId = 1,
        Clue = "Umbridges detention punishment was writing 'I must not tell _____'",
        Answer = "Lies"
    },
    new CrosswordQuestion()
    {
        Id = 39,
        CrosswordId = 1,
        Clue = "What does Devils Snare hate?",
        Answer = "Sunlight"
    },
    new CrosswordQuestion()
    {
        Id = 40,
        CrosswordId = 1,
        Clue = "Buckbeak is a:",
        Answer = "Hippogriff"
    },
    new CrosswordQuestion()
    {
        Id = 41,
        CrosswordId = 1,
        Clue = "Who killed Sirius Black?",
        Answer = "Bellatrix"
    },
    new CrosswordQuestion()
    {
        Id = 42,
        CrosswordId = 1,
        Clue = "What name does Tonks HATE?",
        Answer = "Nymphadora"
    },
    new CrosswordQuestion()
    {
        Id = 43,
        CrosswordId = 1,
        Clue = "Another name for the Weasleys house",
        Answer = "TheBurrow"
    },
    new CrosswordQuestion()
    {
        Id = 44,
        CrosswordId = 1,
        Clue = "How many Weasley children are there?",
        Answer = "Seven"
    },
    new CrosswordQuestion()
    {
        Id = 45,
        CrosswordId = 1,
        Clue = "Keeper of Keys and Grounds at Hogwarts",
        Answer = "RubeusHagrid"
    },
    new CrosswordQuestion()
    {
        Id = 46,
        CrosswordId = 1,
        Clue = "The magical worlds famous sport",
        Answer = "Quidditch"
    },
    new CrosswordQuestion()
    {
        Id = 47,
        CrosswordId = 1,
        Clue = "Incantation for the unlocking charm:",
        Answer = "Alohomora"
    },
    new CrosswordQuestion()
    {
        Id = 48,
        CrosswordId = 1,
        Clue = "Whos body was found in the Chamber of Secrets",
        Answer = "Ginny"
    },
    new CrosswordQuestion()
    {
        Id = 49,
        CrosswordId = 1,
        Clue = "Mrs. Norris Owner",
        Answer = "Filch"
    });


            modelbuilder.Entity<Wordsearch>().HasData(

                new Wordsearch()
                {
                    Id = 1,
                    UserId = 1,
                    Matrix = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C,W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B",
                    Height = 10,
                    Width = 10,
                    Keywords = "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE"
                }


                );

            modelbuilder.Entity<DragandDrop>().HasData(

                new DragandDrop()
                {
                    Id = 1,
                    UserId = 1,
                    Title = "An Issue in Healthcare",
                    Subheading = "Directions: Click and drag the phrases to the correct spaces in the text.",
                    PromptText = @"<span class='promptText'>
            According to some estimates, well over half of the people in the world are functionally illiterate.This means that they are unable to perform everyday tasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not</span>
            <span class='box'>able to read</span>
            <span class='promptText'>directions on medicine bottles or packages.Imagine</span>
            <span class='box'>being</span>
            <span class='promptText'>a parent with a sick child and being unable</span>
            <span class='box'>to read</span>
            <span class='promptText'> the directions on a medicine bottle.We all know that it is important for medical directions</span>
            <span class='box'>to be understood</span>
            <span class='promptText'>clearly.One solution is pictures.Many medical professionals are working today</span>
            <span class='box'>to solve</span>
            <span class='promptText'>this problem by</span>
            <span class='box'>using</span>
            <span class='promptText'>pictures to convey health-care information.</span>",

                    WordBank = @"<div class='item' id='1' draggable='true'>
                to be understood
            </div>
            <div class='item' id='2' draggable='true'>
                able to read
            </div>
            <div class='item' id='3' draggable='true'>
               to solve
            </div>
            <div class='item' id='4' draggable='true'>
                using
            </div>
            <div class='item' id='5' draggable='true'>
                to read
            </div>
            <div class='item' id='6' draggable='true'>
                being
            </div>"

                });

            base.OnModelCreating(modelbuilder);
        }

    }

}


