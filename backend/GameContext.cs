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
                new User() { Id = 1, Name = "Easy", Username= "Jacky", Password="123456" },
                new User() { Id = 2, Name = "Medium", Username = "Jenny", Password = " yy2 " },
                new User() { Id =3, Name ="Hard", Username = "Gio", Password ="yy3"}
                );

            modelbuilder.Entity<Crossword>().HasData(

                new Crossword()
                {
                    Id = 1,
                    Title = "Harry Potter Trivia",
                    UserId = 1

                },
                new Crossword()
                {
                    Id = 2,
                    Title = "Frank Grillo Trivia",
                    UserId = 1

                },
                new Crossword()
                {
                    Id = 3,
                    Title = "Lyrics Trivia",
                    UserId = 1

                }
                );

            modelbuilder.Entity<CrosswordQuestion>().HasData(
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
        Clue = "Famous potions page 39__",
        Answer = "Four"
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
        Clue = "Which Hogwarts teaching position is cursed? (Acronym)",
        Answer = "DATDA"
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
    },
     new CrosswordQuestion()
      {
          Id = 50,
          CrosswordId = 1,
          Clue = "Hogwarts potions teacher",
          Answer = "Snape"
      },
    new CrosswordQuestion()
    { Id = 51,
    CrosswordId = 1,
    Clue = "Weasley Wizard ____ (joke shop)",
    Answer = "Wheezes"
    },
     new CrosswordQuestion()
     {
         Id = 52,
         CrosswordId = 2,
         Clue = "His current age (2021)",
         Answer = "FiftySix"
     },
     new CrosswordQuestion()
     {
         Id = 53,
         CrosswordId = 2,
         Clue = "His character in Captain America",
         Answer = "BrockRumlow"
     },
     new CrosswordQuestion()
     {
         Id = 54,
         CrosswordId = 2,
         Clue = "His diet style of choice",
         Answer = "Paleo"
     },
     new CrosswordQuestion()
     {
         Id = 55,
         CrosswordId = 2,
         Clue = "Last name translation (Italian)",
         Answer = "Cricket"
     },
     new CrosswordQuestion()
     {
         Id = 56,
         CrosswordId = 2,
         Clue = "Besides Marvel, he starred in this movie series:",
         Answer = "ThePurge"
     },
     new CrosswordQuestion()
     {
         Id = 57,
         CrosswordId = 2,
         Clue = "Oldest son",
         Answer = "Remy"
     },
     new CrosswordQuestion()
     {
         Id = 58,
         CrosswordId = 2,
         Clue = "How many times has he been married?",
         Answer = "Twice"
     },
     new CrosswordQuestion()
     {
         Id = 59,
         CrosswordId = 2,
         Clue = "His biggest passion",
         Answer = "Boxing"
     },
        new CrosswordQuestion()
        {
         Id = 60,
         CrosswordId = 3,
         Clue = "She played the fiddle in an Irish band but she fell in love with an _____ man.",
         Answer = "English"
        },
       new CrosswordQuestion()
       {
           Id = 61,
           CrosswordId = 3,
           Clue = "One, don’t pick up the _____, you know he’s only calling ’cause he’s drunk and alone",
           Answer = "Phone"
       }, new CrosswordQuestion()
       {
           Id = 62,
           CrosswordId = 3,
           Clue = "Welcome to the Hotel ____",
           Answer = "California"
       }, new CrosswordQuestion()
       {
           Id = 63,
           CrosswordId = 3,
           Clue = "Baby you're a ____",
           Answer = "Firework"
       }, new CrosswordQuestion()
       {
           Id = 64,
           CrosswordId = 3,
           Clue = "For I can't help ___ in love with you",
           Answer = "Falling"
       }, new CrosswordQuestion()
       {
           Id = 65,
           CrosswordId = 3,
           Clue = "What's in your head, in your head? _____",
           Answer = "Zombie"
       }
    );


            modelbuilder.Entity<Wordsearch>().HasData(

                new Wordsearch()
                { Title= "PRO",
                    Id = 2,
                    UserId = 2,
                    Matrix = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B",
                    Height = 10,
                    Width = 10,
                    Keywords = "CANVAS, CODE, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE"
                },
                new Wordsearch()
                { Title="programing languages",
                    Id = 1,
                    UserId = 1,
                    Matrix = "j, e, f, b, l, p, e, p, r, e, c, a, m, d, c, i, m, g, t, c, o, i, v, o, k, p, r, j, s, m, p, b, w, a, s, q, r, o, u, a, r, i, x, i, l, e, l, h, r, s, w, o, l, c, q, l, i, r, p, c, s, c, r, e, e, a, u, m, g, r, a, l, x, h, p, b, u, r, y, i, j, a, l, a, y, c, a, l, m, p, c, l, o, j, u, r, e, r, m, t",
                    Height = 10,
                    Width = 10,
                    Keywords = "java, ruby"
                },
                new Wordsearch()
                { Title="general",
                    Id = 3,
                    UserId = 3,
                    Matrix = "g, h, n, s, a, l, s, t, b, o, t, a, b, e, l, a, m, p, e, u, b, a, s, e, b, o, a, r, d, t, w, r, b, e, d, w, a, r, d, c, o, h, f, l, o, r, o, t, i, g, s, l, i, l, e, c, o, t, n, t, k, t, l, t, i, a, a, o, g, u, a, i, b, s, e, y, l, l, m, t, p, l, a, n, t, f, l, o, o, r, f, r, g, y, t, y, x, q, y, e",
                    Height = 10,
                    Width = 10,
                    Keywords = "table, white, pillow, lamp, bedding, baseboard, plant, floor, cord, bedroom"
                }

                );

            modelbuilder.Entity<DragandDrop>().HasData(

                new DragandDrop()
                {
                    Id = 1,
                    UserId = 1,
                    Title = "An Issue in Healthcare",
                    Subheading = "Directions: Click and drag the phrases to the correct spaces in the text.",
                    PromptText = "<div class='drop-targets' id='drop-targets'><span class='promptText'>According to some estimates, well over half of the people in the world are functionally illiterate. This means that they are unable to perform everyday </br>tasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not </span><span class='box'>able to read</span><span class='promptText'> directions on medicine bottles or packages. Imagine </span><span class='box'>being</span><span class='promptText'> a parent with a sick child and being unable </span><span class='box'>to read</span><span class='promptText'> the directions on a medicine bottle. We all know that it is important for medical directions </span><span class='box'>to be understood</span><span class='promptText'> clearly. One solution is pictures. Many medical professionals are working today </span><span class='box'>to solve</span><span class='promptText'> this problem by </span><span class='box'>using</span><span class='promptText'> pictures to convey health-care information.</span></div><div class='wordbox' id='word-bank'><h3>Word Bank</h3><div class=\'item\' id=\'2\' draggable=\'true\'>being</div> <div class=\'item\' id=\'4\' draggable=\'true\'>to be understood</div> <div class=\'item\' id=\'3\' draggable=\'true\'>to read</div> <div class=\'item\' id=\'1\' draggable=\'true\'>able to read</div> <div class=\'item\' id=\'6\' draggable=\'true\'>using</div> <div class=\'item\' id=\'5\' draggable=\'true\'>to solve</div></div>",

                    WordBank = "According to some estimates, well over half of the people in the world are functionally illiterate. This means that they are unable to perform everyday \ntasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not {able to read} directions on medicine bottles or packages. Imagine {being} a parent with a sick child and being unable {to read} the directions on a medicine bottle. We all know that it is important for medical directions {to be understood} clearly. One solution is pictures. Many medical professionals are working today {to solve} this problem by {using} pictures to convey health-care information."

                },

                 new DragandDrop()
                 {
                Id = 2,
                    UserId = 1,
                    Title = "Why?",
                    Subheading = "Directions: Click and drag the phrases to the correct spaces in the text.",
                    PromptText = "<div class='drop-targets' id='drop-targets'><span class='promptText'>1. It's such a hot day that I could </span><span class='box'>fry an egg on the sidewalk</span><span class='promptText'></br>2. I'm so hungry that I could </span><span class='box'>eat a horse</span><span class='promptText'></br>3. He's such a rich man that he </span><span class='box'>buys a new boat when one gets wet</span><span class='promptText'></br>4. She is so sick that she </span><span class='box'>needs two beds</span><span class='promptText'></span></div><div class='wordbox' id='word-bank'><h3>Word Bank</h3><div class=\'item\' id=\'1\' draggable=\'true\'>fry an egg on the sidewalk</div> <div class=\'item\' id=\'4\' draggable=\'true\'>needs two beds</div> <div class=\'item\' id=\'2\' draggable=\'true\'>eat a horse</div> <div class=\'item\' id=\'3\' draggable=\'true\'>buys a new boat when one gets wet</div></div>",

                    WordBank = "1. It's such a hot day that I could {fry an egg on the sidewalk}\n2. I'm so hungry that I could {eat a horse}\n3. He's such a rich man that he {buys a new boat when one gets wet}\n4. She is so sick that she {needs two beds}"
                 }
                    
                );

            base.OnModelCreating(modelbuilder);
        }

    }

}


