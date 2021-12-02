using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class init : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateTable(
                name: "Todos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Question = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Answer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CrosswordId = table.Column<int>(type: "int", nullable: true),
                    DragandDropId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Todos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Todos_Crosswords_CrosswordId",
                        column: x => x.CrosswordId,
                        principalTable: "Crosswords",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Todos_DragandDrops_DragandDropId",
                        column: x => x.DragandDropId,
                        principalTable: "DragandDrops",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.InsertData(
                table: "Todos",
                columns: new[] { "Id", "Answer", "CrosswordId", "DragandDropId", "Question" },
                values: new object[,]
                {
                    { 1, "dog", null, null, "dog?" },
                    { 2, "cat", null, null, "cat?" },
                    { 3, "fish", null, null, "fish?" },
                    { 4, "fox", null, null, "fox?" },
                    { 5, "hippo", null, null, "hippo?" },
                    { 6, "rhino", null, null, "rhino?" }
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
                table: "Wordsearches",
                columns: new[] { "Id", "Height", "Keywords", "Matrix", "UserId", "Width" },
                values: new object[] { 1, 10, "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE", "J, Q, V, N, R, G, N, T, U, I, V, L, A, O, S, A, X, P, S, C,W, P, R, I, D, M, E, I, I, T, K, P, I, T, I, E, T, R, H, K, Z, U, A, C, K, S, G, C, X, T, X, T, B, N, F, Z, Y, S, G, J, O, D, L, U, Y, U, H, A, H, N, A, F, E, F, C, A, N, V, A, S, E, D, O, C, R, P, L, A, Y, A, F, X, E, E, V, C, P, J, H, B", 1, 10 });

            migrationBuilder.CreateIndex(
                name: "IX_Crosswords_UserId",
                table: "Crosswords",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_DragandDrops_UserId",
                table: "DragandDrops",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_Todos_CrosswordId",
                table: "Todos",
                column: "CrosswordId");

            migrationBuilder.CreateIndex(
                name: "IX_Todos_DragandDropId",
                table: "Todos",
                column: "DragandDropId");

            migrationBuilder.CreateIndex(
                name: "IX_Wordsearches_UserId",
                table: "Wordsearches",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Todos");

            migrationBuilder.DropTable(
                name: "Wordsearches");

            migrationBuilder.DropTable(
                name: "Crosswords");

            migrationBuilder.DropTable(
                name: "DragandDrops");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
