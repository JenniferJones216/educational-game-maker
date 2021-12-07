using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class NoFUN : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 1,
                column: "Keywords",
                value: "CANVAS, CODE, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 1,
                column: "Keywords",
                value: "CANVAS, CODE, FUN, FUNCTION, GAMES, JAVASCRIPT, KIDS, PLAY, SHARE, VARIABLE");
        }
    }
}
