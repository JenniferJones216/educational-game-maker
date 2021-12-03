using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class init1203 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CrosswordQuestions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CrosswordId = table.Column<int>(type: "int", nullable: false),
                    Clue = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Answer = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrosswordQuestions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Username = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Crosswords",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crosswords", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Crosswords_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DragandDrops",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Subheading = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    PromptText = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    WordBank = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DragandDrops", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DragandDrops_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Wordsearches",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Height = table.Column<int>(type: "int", nullable: false),
                    Width = table.Column<int>(type: "int", nullable: false),
                    Matrix = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Keywords = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wordsearches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Wordsearches_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "CrosswordQuestions",
                columns: new[] { "Id", "Answer", "Clue", "CrosswordId" },
                values: new object[,]
                {
                    { 50, "Snape", "Hogwarts potions teacher", 1 },
                    { 28, "Dentists", "The job of Hermiones parents", 1 },
                    { 29, "Muggles", "Non-magic folk", 1 },
                    { 30, "Dursley", "Dudley, Petunia, and Vernon", 1 },
                    { 31, "Mudblood", "Foul name for a muggle-born", 1 },
                    { 32, "Draco", "A constellation but also a member of the Slytherin House", 1 },
                    { 33, "WhompingWillow", "A quite destructive arbor", 1 },
                    { 34, "Seven", "Number of Voldemorts Horcruxes", 1 },
                    { 35, "RegulusABlack", "R.A.B.", 1 },
                    { 36, "FelixFelicis", "A potion that makes the drinker lucky for a period of time", 1 },
                    { 37, "PersianCat", "Dolores Umbridges Patronus", 1 },
                    { 27, "Pensieve", "A memory keeper", 1 },
                    { 38, "Lies", "Umbridges detention punishment was writing 'I must not tell _____'", 1 },
                    { 40, "Hippogriff", "Buckbeak is a:", 1 },
                    { 41, "Bellatrix", "Who killed Sirius Black?", 1 },
                    { 42, "Nymphadora", "What name does Tonks HATE?", 1 },
                    { 43, "TheBurrow", "Another name for the Weasleys house", 1 },
                    { 44, "Seven", "How many Weasley children are there?", 1 },
                    { 45, "RubeusHagrid", "Keeper of Keys and Grounds at Hogwarts", 1 },
                    { 46, "Quidditch", "The magical worlds famous sport", 1 },
                    { 47, "Alohomora", "Incantation for the unlocking charm:", 1 },
                    { 48, "Ginny", "Whos body was found in the Chamber of Secrets", 1 },
                    { 49, "Filch", "Mrs. Norris Owner", 1 },
                    { 39, "Sunlight", "What does Devils Snare hate?", 1 },
                    { 26, null, "Quote: \"Im going to bed before either of you come up with another clever idea to get us killed - or worse,\r\n        _____\",\r\n        Answer = \"expelled", 1 },
                    { 25, "Ollivander", "Famous wand shop owner", 1 },
                    { 24, "PadmaAndParvati", "Patil twins names", 1 },
                    { 1, "Hooch", "The one who teaches flying lessons", 1 },
                    { 2, "Leviosa", "To float: Wingardium _____", 1 },
                    { 3, "McGonagall", "Who teaches Transfiguration?", 1 },
                    { 4, "394", "Famous potions page", 1 },
                    { 5, "Gryffindor", "The bravery house", 1 },
                    { 6, "Parseltongue", "If you can talk to snakes you are a _____", 1 },
                    { 7, "Seeker", "Harrys quidditch position", 1 },
                    { 8, "Voldemort", "The Dark Lord", 1 },
                    { 9, "Fluffy", "Name of the adorable three headed dog", 1 },
                    { 10, "Azkaban", "Famous magical high-security prison", 1 },
                    { 11, "Torture", "The Cruciatus Curse is used for: ", 1 },
                    { 12, "eye", "Mad-___ Moody", 1 },
                    { 13, "Auror", "A person whos job is to catch dark wizards", 1 },
                    { 14, "Dobby", "Cute little house elf who befriends Harry", 1 },
                    { 15, "TomRiddle", "Voldemorts real name", 1 }
                });

            migrationBuilder.InsertData(
                table: "CrosswordQuestions",
                columns: new[] { "Id", "Answer", "Clue", "CrosswordId" },
                values: new object[,]
                {
                    { 16, "RoomOfRequirement", "This room only appears when a person is in great need of it", 1 },
                    { 17, "Marauders", "___ Map", 1 },
                    { 18, "DefenseAgainstTheDarkArts", "Which Hogwarts teaching position is cursed?", 1 },
                    { 19, "FleurDelacour", "The female competitor in the Triwizard Tournament", 1 },
                    { 20, "ExpectoPatronum", "To get rid of dementors", 1 },
                    { 21, "Trevor", "Nevilles Toad", 1 },
                    { 22, "MoaningMyrtle", "Girls Bathroom Ghost", 1 },
                    { 23, "AvadaKedavra", "This curse will end a life", 1 }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Name", "Password", "Username" },
                values: new object[,]
                {
                    { 1, "entry", " yy ", " xx " },
                    { 2, "midele", " yy2 ", " xx2 " }
                });

            migrationBuilder.InsertData(
                table: "Crosswords",
                columns: new[] { "Id", "UserId" },
                values: new object[] { 1, 1 });

            migrationBuilder.InsertData(
                table: "DragandDrops",
                columns: new[] { "Id", "PromptText", "Subheading", "Title", "UserId", "WordBank" },
                values: new object[] { 1, "<span class='promptText'>\r\n            According to some estimates, well over half of the people in the world are functionally illiterate.This means that they are unable to perform everyday tasks because they can't read, understand, and respond appropriately to information. One of the problems this creates in health care is that millions of people are not</span>\r\n            <span class='box'>able to read</span>\r\n            <span class='promptText'>directions on medicine bottles or packages.Imagine</span>\r\n            <span class='box'>being</span>\r\n            <span class='promptText'>a parent with a sick child and being unable</span>\r\n            <span class='box'>to read</span>\r\n            <span class='promptText'> the directions on a medicine bottle.We all know that it is important for medical directions</span>\r\n            <span class='box'>to be understood</span>\r\n            <span class='promptText'>clearly.One solution is pictures.Many medical professionals are working today</span>\r\n            <span class='box'>to solve</span>\r\n            <span class='promptText'>this problem by</span>\r\n            <span class='box'>using</span>\r\n            <span class='promptText'>pictures to convey health-care information.</span>", "Directions: Click and drag the phrases to the correct spaces in the text.", "An Issue in Healthcare", 1, "<div class='item' id='1' draggable='true'>\r\n                to be understood\r\n            </div>\r\n            <div class='item' id='2' draggable='true'>\r\n                able to read\r\n            </div>\r\n            <div class='item' id='3' draggable='true'>\r\n               to solve\r\n            </div>\r\n            <div class='item' id='4' draggable='true'>\r\n                using\r\n            </div>\r\n            <div class='item' id='5' draggable='true'>\r\n                to read\r\n            </div>\r\n            <div class='item' id='6' draggable='true'>\r\n                being\r\n            </div>" });

            migrationBuilder.InsertData(
                table: "Wordsearches",
                columns: new[] { "Id", "Height", "Keywords", "Matrix", "UserId", "Width" },
                values: new object[,]
                {
                    { 1, 10, "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE", "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C,W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B", 1, 10 },
                    { 2, 10, "java", "j,e,f,b,l,p,e,p,r,e,c,a,m,d,c,i,m,g,t,c,o,i,v,o,k,p,r,j,s,m,p,b,w,a,s,q,r,o,u,a,r,i,x,i,l,e,l,h,r,s,w,o,l,c,q,l,i,r,p,c,s,c,r,e,e,a,u,m,g,r,a,l,x,h,p,b,u,r,y,i,j,a,l,a,y,c,a,l,m,p,c,l,o,j,u,r,e,r,m,t", 1, 10 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Crosswords_UserId",
                table: "Crosswords",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DragandDrops_UserId",
                table: "DragandDrops",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Wordsearches_UserId",
                table: "Wordsearches",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CrosswordQuestions");

            migrationBuilder.DropTable(
                name: "Crosswords");

            migrationBuilder.DropTable(
                name: "DragandDrops");

            migrationBuilder.DropTable(
                name: "Wordsearches");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
