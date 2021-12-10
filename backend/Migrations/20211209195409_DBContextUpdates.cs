using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class DBContextUpdates : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Answer", "Clue" },
                values: new object[] { "Four", "Famous potions page 39__" });

            migrationBuilder.UpdateData(
                table: "Crosswords",
                keyColumn: "Id",
                keyValue: 1,
                column: "Title",
                value: "Harry Potter Trivia");

            migrationBuilder.InsertData(
                table: "Crosswords",
                columns: new[] { "Id", "Title", "UserId" },
                values: new object[,]
                {
                    { 2, "Frank Grillo Trivia", 1 },
                    { 3, "Lyrics Trivia", 1 }
                });

            migrationBuilder.InsertData(
                table: "CrosswordQuestions",
                columns: new[] { "Id", "Answer", "Clue", "CrosswordId" },
                values: new object[,]
                {
                    { 52, "FiftySix", "His current age (2021)", 2 },
                    { 53, "BrockRumlow", "His character in Captain America", 2 },
                    { 54, "Paleo", "His diet style of choice", 2 },
                    { 55, "Cricket", "Last name translation (Italian)", 2 },
                    { 56, "ThePurge", "Besides Marvel, he starred in this movie series:", 2 },
                    { 57, "Remy", "Oldest son", 2 },
                    { 58, "Twice", "How many times has he been married?", 2 },
                    { 59, "Boxing", "His biggest passion", 2 },
                    { 60, "English", "She played the fiddle in an Irish band but she fell in love with an _____ man.", 3 },
                    { 61, "Phone", "One, don’t pick up the _____, you know he’s only calling ’cause he’s drunk and alone", 3 },
                    { 62, "California", "Welcome to the Hotel ____", 3 },
                    { 63, "Firework", "Baby you're a ____", 3 },
                    { 64, "Falling", "For I can't help ___ in love with you", 3 },
                    { 65, "Zombie", "What's in your head, in your head? _____", 3 }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 52);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 53);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 54);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 55);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 56);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 57);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 58);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 59);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 60);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 61);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 62);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 63);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 64);

            migrationBuilder.DeleteData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 65);

            migrationBuilder.DeleteData(
                table: "Crosswords",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Crosswords",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.UpdateData(
                table: "CrosswordQuestions",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Answer", "Clue" },
                values: new object[] { "394", "Famous potions page" });

            migrationBuilder.UpdateData(
                table: "Crosswords",
                keyColumn: "Id",
                keyValue: 1,
                column: "Title",
                value: "Harry Potter Crossword");
        }
    }
}
