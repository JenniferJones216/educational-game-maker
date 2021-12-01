using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Task1s",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Answer = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Task1s", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: true)
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
                    UserId = table.Column<int>(type: "int", nullable: false)
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
                name: "Wordserches",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<int>(type: "int", nullable: false),
                    Hight = table.Column<int>(type: "int", nullable: false),
                    Width = table.Column<int>(type: "int", nullable: false),
                    Matrix = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Keywords = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Wordserches", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Wordserches_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CrosswordTasks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CrosswordId = table.Column<int>(type: "int", nullable: false),
                    Task1Id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrosswordTasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CrosswordTasks_Crosswords_CrosswordId",
                        column: x => x.CrosswordId,
                        principalTable: "Crosswords",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_CrosswordTasks_Task1s_Task1Id",
                        column: x => x.Task1Id,
                        principalTable: "Task1s",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DragandDropTasks",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Task1Id = table.Column<int>(type: "int", nullable: false),
                    DragandDropId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DragandDropTasks", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DragandDropTasks_DragandDrops_DragandDropId",
                        column: x => x.DragandDropId,
                        principalTable: "DragandDrops",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DragandDropTasks_Task1s_Task1Id",
                        column: x => x.Task1Id,
                        principalTable: "Task1s",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Task1s",
                columns: new[] { "Id", "Answer", "Question" },
                values: new object[,]
                {
                    { 1, "dog", "dog?" },
                    { 2, "cat", "cat?" },
                    { 3, "fish", "fish?" },
                    { 4, "fox", "fox?" },
                    { 5, "hippo", "hippo?" },
                    { 6, "rhino", "rhino?" }
                });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "Id", "Name" },
                values: new object[] { 1, "entry" });

            migrationBuilder.InsertData(
                table: "Crosswords",
                columns: new[] { "Id", "UserId" },
                values: new object[] { 1, 1 });

            migrationBuilder.InsertData(
                table: "DragandDrops",
                columns: new[] { "Id", "Subheading", "Title", "UserId" },
                values: new object[] { 1, null, "title", 1 });

            migrationBuilder.InsertData(
                table: "Wordserches",
                columns: new[] { "Id", "Hight", "Keywords", "Matrix", "UserId", "Width" },
                values: new object[] { 1, 10, "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE", "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C,W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B", 1, 10 });

            migrationBuilder.InsertData(
                table: "CrosswordTasks",
                columns: new[] { "Id", "CrosswordId", "Task1Id" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 1, 2 },
                    { 3, 1, 3 }
                });

            migrationBuilder.InsertData(
                table: "DragandDropTasks",
                columns: new[] { "Id", "DragandDropId", "Task1Id" },
                values: new object[,]
                {
                    { 1, 1, 1 },
                    { 2, 1, 2 },
                    { 3, 1, 3 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Crosswords_UserId",
                table: "Crosswords",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_CrosswordTasks_CrosswordId",
                table: "CrosswordTasks",
                column: "CrosswordId");

            migrationBuilder.CreateIndex(
                name: "IX_CrosswordTasks_Task1Id",
                table: "CrosswordTasks",
                column: "Task1Id");

            migrationBuilder.CreateIndex(
                name: "IX_DragandDrops_UserId",
                table: "DragandDrops",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DragandDropTasks_DragandDropId",
                table: "DragandDropTasks",
                column: "DragandDropId");

            migrationBuilder.CreateIndex(
                name: "IX_DragandDropTasks_Task1Id",
                table: "DragandDropTasks",
                column: "Task1Id");

            migrationBuilder.CreateIndex(
                name: "IX_Wordserches_UserId",
                table: "Wordserches",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CrosswordTasks");

            migrationBuilder.DropTable(
                name: "DragandDropTasks");

            migrationBuilder.DropTable(
                name: "Wordserches");

            migrationBuilder.DropTable(
                name: "Crosswords");

            migrationBuilder.DropTable(
                name: "DragandDrops");

            migrationBuilder.DropTable(
                name: "Task1s");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
