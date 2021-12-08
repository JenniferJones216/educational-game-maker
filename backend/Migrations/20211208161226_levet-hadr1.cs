using Microsoft.EntityFrameworkCore.Migrations;

namespace EducationalGameMaker.Migrations
{
    public partial class levethadr1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 3,
                column: "UserId",
                value: 3);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.UpdateData(
                table: "Wordsearches",
                keyColumn: "Id",
                keyValue: 3,
                column: "UserId",
                value: 1);
        }
    }
}
