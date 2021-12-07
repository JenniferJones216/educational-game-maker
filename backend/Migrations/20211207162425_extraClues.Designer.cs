﻿// <auto-generated />
using EducationalGameMaker;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace EducationalGameMaker.Migrations
{
    [DbContext(typeof(GameContext))]
    [Migration("20211207162425_extraClues")]
    partial class extraClues
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("EducationalGameMaker.Models.Crossword", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Crosswords");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            UserId = 1
                        });
                });

            modelBuilder.Entity("EducationalGameMaker.Models.CrosswordQuestion", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Answer")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Clue")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("CrosswordId")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("CrosswordId");

                    b.ToTable("CrosswordQuestions");

                    b.HasData(
                        new
                        {
                            Id = 50,
                            Answer = "Snape",
                            Clue = "Hogwarts potions teacher",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 1,
                            Answer = "Hooch",
                            Clue = "The one who teaches flying lessons",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 2,
                            Answer = "Leviosa",
                            Clue = "To float: Wingardium _____",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 3,
                            Answer = "McGonagall",
                            Clue = "Who teaches Transfiguration?",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 4,
                            Answer = "394",
                            Clue = "Famous potions page",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 5,
                            Answer = "Gryffindor",
                            Clue = "The bravery house",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 6,
                            Answer = "Parseltongue",
                            Clue = "If you can talk to snakes you are a _____",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 7,
                            Answer = "Seeker",
                            Clue = "Harrys quidditch position",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 8,
                            Answer = "Voldemort",
                            Clue = "The Dark Lord",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 9,
                            Answer = "Fluffy",
                            Clue = "Name of the adorable three headed dog",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 10,
                            Answer = "Azkaban",
                            Clue = "Famous magical high-security prison",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 11,
                            Answer = "Torture",
                            Clue = "The Cruciatus Curse is used for: ",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 12,
                            Answer = "eye",
                            Clue = "Mad-___ Moody",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 13,
                            Answer = "Auror",
                            Clue = "A person whos job is to catch dark wizards",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 14,
                            Answer = "Dobby",
                            Clue = "Cute little house elf who befriends Harry",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 15,
                            Answer = "TomRiddle",
                            Clue = "Voldemorts real name",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 16,
                            Answer = "RoomOfRequirement",
                            Clue = "This room only appears when a person is in great need of it",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 17,
                            Answer = "Marauders",
                            Clue = "___ Map",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 18,
                            Answer = "DATDA",
                            Clue = "Which Hogwarts teaching position is cursed? (Acronym)",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 19,
                            Answer = "FleurDelacour",
                            Clue = "The female competitor in the Triwizard Tournament",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 20,
                            Answer = "ExpectoPatronum",
                            Clue = "To get rid of dementors",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 21,
                            Answer = "Trevor",
                            Clue = "Nevilles Toad",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 22,
                            Answer = "MoaningMyrtle",
                            Clue = "Girls Bathroom Ghost",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 23,
                            Answer = "AvadaKedavra",
                            Clue = "This curse will end a life",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 24,
                            Answer = "PadmaAndParvati",
                            Clue = "Patil twins names",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 25,
                            Answer = "Ollivander",
                            Clue = "Famous wand shop owner",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 26,
                            Clue = "Quote: \"Im going to bed before either of you come up with another clever idea to get us killed - or worse,\r\n        _____\",\r\n        Answer = \"expelled",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 27,
                            Answer = "Pensieve",
                            Clue = "A memory keeper",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 28,
                            Answer = "Dentists",
                            Clue = "The job of Hermiones parents",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 29,
                            Answer = "Muggles",
                            Clue = "Non-magic folk",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 30,
                            Answer = "Dursley",
                            Clue = "Dudley, Petunia, and Vernon",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 31,
                            Answer = "Mudblood",
                            Clue = "Foul name for a muggle-born",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 32,
                            Answer = "Draco",
                            Clue = "A constellation but also a member of the Slytherin House",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 33,
                            Answer = "WhompingWillow",
                            Clue = "A quite destructive arbor",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 34,
                            Answer = "Seven",
                            Clue = "Number of Voldemorts Horcruxes",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 35,
                            Answer = "RegulusABlack",
                            Clue = "R.A.B.",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 36,
                            Answer = "FelixFelicis",
                            Clue = "A potion that makes the drinker lucky for a period of time",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 37,
                            Answer = "PersianCat",
                            Clue = "Dolores Umbridges Patronus",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 38,
                            Answer = "Lies",
                            Clue = "Umbridges detention punishment was writing 'I must not tell _____'",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 39,
                            Answer = "Sunlight",
                            Clue = "What does Devils Snare hate?",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 40,
                            Answer = "Hippogriff",
                            Clue = "Buckbeak is a:",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 41,
                            Answer = "Bellatrix",
                            Clue = "Who killed Sirius Black?",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 42,
                            Answer = "Nymphadora",
                            Clue = "What name does Tonks HATE?",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 43,
                            Answer = "TheBurrow",
                            Clue = "Another name for the Weasleys house",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 44,
                            Answer = "Seven",
                            Clue = "How many Weasley children are there?",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 45,
                            Answer = "RubeusHagrid",
                            Clue = "Keeper of Keys and Grounds at Hogwarts",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 46,
                            Answer = "Quidditch",
                            Clue = "The magical worlds famous sport",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 47,
                            Answer = "Alohomora",
                            Clue = "Incantation for the unlocking charm:",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 48,
                            Answer = "Ginny",
                            Clue = "Whos body was found in the Chamber of Secrets",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 49,
                            Answer = "Filch",
                            Clue = "Mrs. Norris Owner",
                            CrosswordId = 1
                        },
                        new
                        {
                            Id = 51,
                            Answer = "Wheezes",
                            Clue = "Weasley Wizard ____ (joke shop)",
                            CrosswordId = 1
                        });
                });

            modelBuilder.Entity("EducationalGameMaker.Models.DragandDrop", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("PromptText")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Subheading")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<string>("WordBank")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("DragandDrops");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            PromptText = "<span class='promptText'>\r\n            According to some estimates, well over half of the people in the world are functionally illiterate.This means that they are unable to perform everyday tasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not</span>\r\n            <span class='box'>able to read</span>\r\n            <span class='promptText'>directions on medicine bottles or packages.Imagine</span>\r\n            <span class='box'>being</span>\r\n            <span class='promptText'>a parent with a sick child and being unable</span>\r\n            <span class='box'>to read</span>\r\n            <span class='promptText'> the directions on a medicine bottle.We all know that it is important for medical directions</span>\r\n            <span class='box'>to be understood</span>\r\n            <span class='promptText'>clearly.One solution is pictures.Many medical professionals are working today</span>\r\n            <span class='box'>to solve</span>\r\n            <span class='promptText'>this problem by</span>\r\n            <span class='box'>using</span>\r\n            <span class='promptText'>pictures to convey health-care information.</span>",
                            Subheading = "Directions: Click and drag the phrases to the correct spaces in the text.",
                            Title = "An Issue in Healthcare",
                            UserId = 1,
                            WordBank = "<div class='item' id='1' draggable='true'>\r\n                to be understood\r\n            </div>\r\n            <div class='item' id='2' draggable='true'>\r\n                able to read\r\n            </div>\r\n            <div class='item' id='3' draggable='true'>\r\n               to solve\r\n            </div>\r\n            <div class='item' id='4' draggable='true'>\r\n                using\r\n            </div>\r\n            <div class='item' id='5' draggable='true'>\r\n                to read\r\n            </div>\r\n            <div class='item' id='6' draggable='true'>\r\n                being\r\n            </div>"
                        });
                });

            modelBuilder.Entity("EducationalGameMaker.Models.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Name")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Password")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Username")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Name = "entry",
                            Password = " yy ",
                            Username = " xx "
                        },
                        new
                        {
                            Id = 2,
                            Name = "midele",
                            Password = " yy2 ",
                            Username = " xx2 "
                        });
                });

            modelBuilder.Entity("EducationalGameMaker.Models.Wordsearch", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Height")
                        .HasColumnType("int");

                    b.Property<string>("Keywords")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Matrix")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("UserId")
                        .HasColumnType("int");

                    b.Property<int>("Width")
                        .HasColumnType("int");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Wordsearches");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Height = 10,
                            Keywords = "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE",
                            Matrix = "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C, W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B",
                            UserId = 1,
                            Width = 10
                        },
                        new
                        {
                            Id = 2,
                            Height = 10,
                            Keywords = "java, ruby",
                            Matrix = "j, e, f, b, l, p, e, p, r, e, c, a, m, d, c, i, m, g, t, c, o, i, v, o, k, p, r, j, s, m, p, b, w, a, s, q, r, o, u, a, r, i, x, i, l, e, l, h, r, s, w, o, l, c, q, l, i, r, p, c, s, c, r, e, e, a, u, m, g, r, a, l, x, h, p, b, u, r, y, i, j, a, l, a, y, c, a, l, m, p, c, l, o, j, u, r, e, r, m, t",
                            UserId = 1,
                            Width = 10
                        });
                });

            modelBuilder.Entity("EducationalGameMaker.Models.Crossword", b =>
                {
                    b.HasOne("EducationalGameMaker.Models.User", "User")
                        .WithMany("Crosswords")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("EducationalGameMaker.Models.CrosswordQuestion", b =>
                {
                    b.HasOne("EducationalGameMaker.Models.Crossword", null)
                        .WithMany("CrosswordQuestions")
                        .HasForeignKey("CrosswordId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });

            modelBuilder.Entity("EducationalGameMaker.Models.DragandDrop", b =>
                {
                    b.HasOne("EducationalGameMaker.Models.User", "User")
                        .WithMany("DragandDrops")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("EducationalGameMaker.Models.Wordsearch", b =>
                {
                    b.HasOne("EducationalGameMaker.Models.User", "User")
                        .WithMany("Wordsearchs")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("EducationalGameMaker.Models.Crossword", b =>
                {
                    b.Navigation("CrosswordQuestions");
                });

            modelBuilder.Entity("EducationalGameMaker.Models.User", b =>
                {
                    b.Navigation("Crosswords");

                    b.Navigation("DragandDrops");

                    b.Navigation("Wordsearchs");
                });
#pragma warning restore 612, 618
        }
    }
}
